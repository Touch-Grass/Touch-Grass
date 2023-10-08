import {Document} from "mongoose";
import {UserInterface, UserModel, User} from "@/models/users/users";
import {CryptographyUtils} from "@/utils/Cryptography/CryptographicUtils";

export class UserService {
    /**
     * Checks if a user with the provided username exists in the database.
     * @param {UserInterface} user - The user object containing the username to check.
     * @returns {Promise<boolean>} A promise that resolves to true if the user exists, false otherwise.
     */
    public static async checkUserExists(username: string): Promise<Boolean> {
        try{
            await this.findOne(username);
            return true;
        }catch(e){
            return false;
        }
    }

    /**
     * Retrieves all user documents from the database.
     * @returns {Promise<Document[]>} A promise that resolves to an array of user documents.
     */
    public static async findAll(): Promise<Document[]> {
        return await UserModel.find({});
    }

    /**
     * Retrieves a user document by their username from the database.
     * @param {string} username - The username of the user to retrieve.
     * @returns {Promise<Document[]>} A promise that resolves to an array of user documents matching the username.
     */
    public static async findOne(username: string): Promise<UserInterface | null> {
        const result : UserInterface | null = await UserModel.findOne({ username: username});
        if(result == null)
            throw new Error("User not found");
        return {
            _id: result._id,
            username: result.username,
            name: result.name,
            surname: result.surname,
            email: result.email,
            password: result.password
        };
    }

    /**
     * Inserts a new user document into the database.
     * @param {UserInterface} newUser - The user data to insert.
     * @returns {Promise<Document>} A promise that resolves to the newly inserted user document.
     */
    public static async insertOne(newUser: UserInterface): Promise<Document> {
        const user = await new UserModel({
            username: newUser.username,
            name: newUser.name,
            surname: newUser.surname,
            email: newUser.email,
            password: await CryptographyUtils.hashString(newUser.password)
        });
        return await user.save();
    }
}