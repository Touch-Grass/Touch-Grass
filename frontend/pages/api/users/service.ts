import { Document } from 'mongoose';
import { UserModel, UserInterface } from "@models/users";
import { CryptographyUtils } from '@utils/Cryptography/CryptographicUtils';

export class UserService {
    /**
     * Finds a user object in the database using given criteria.
     * @param userCriteria The criteria to query for.
     * @param frontendFields Use the exclusive field set for frontend?
     * @returns {Promise<IUserModel>} The user object or null
     */

    public static async findAll() : Promise<Document[]> {
        return await UserModel.find({});
    }

    public static async insertOne(newUser : UserInterface) : Promise<Document>{
        const user = await new UserModel({
            name: newUser.name,
            surname: newUser.surname,
            email: newUser.email,
            password: await CryptographyUtils.hashString(newUser.password)
          });
        return await user.save();
    }
}