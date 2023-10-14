import {Document} from "mongoose";
import {UserModel} from "@/models/server/user/user";
import {CryptographyUtils} from "@/utils/Cryptography/CryptographicUtils";
import {IUser} from "@/models/shared/user/user.interface";

export class UserService {
    /**
     * Checks if a user with the provided username exists in the database.
     * @param {IUser} user - The user object containing the username to check.
     * @returns {Promise<boolean>} A promise that resolves to true if the user exists, false otherwise.
     */
    public static async checkUserExists(username: string): Promise<boolean> {
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
        return await UserModel.find({}).exec();
    }

    public static async countUsers(): Promise<number> {
        return await UserModel.find({}).count().exec();
    }

    /**
     * Retrieves a user document by their username from the database.
     * @param {string} username - The username of the user to retrieve.
     * @returns {Promise<Document[]>} A promise that resolves to an array of user documents matching the username.
     */
    public static async findOne(username: string): Promise<IUser | null> {
        const result : IUser | null = await UserModel.findOne({ username: username});
        if(result == null)
            throw new Error("User not found");
        return {
            username: result.username,
            name: result.name,
            surname: result.surname,
            email: result.email,
            password: result.password
        };
    }

    /**
     * Inserts a new user document into the database.
     * @param {IUser} newUser - The user data to insert.
     * @returns {Promise<Document>} A promise that resolves to the newly inserted user document.
     */
    public static async insertOne(newUser: IUser): Promise<Document> {
        const user = await new UserModel({
            username: newUser.username,
            name: newUser.name,
            surname: newUser.surname,
            email: newUser.email,
            password: await CryptographyUtils.hashString(newUser.password)
        });
        return await user.save();
    }

    // TODO: Account for _id with WithID<> everywhere. Use projection to eliminate _v.
    // TODO: Separate user model for client to be without password.
    public static convertToClientModel(user: IUser): IUser {
        const copy = {...user};
        delete (copy as any)["_id"];
        delete (copy as any)["__v"];
        delete (copy as any)["password"];
        return copy;
    }
}
