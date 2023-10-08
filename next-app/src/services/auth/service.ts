import { CryptographyUtils } from "@/utils/Cryptography/CryptographicUtils";
import { UserService } from "../users/service";
import { UserInterface } from "@/models/users/users";

export class AuthService {
    /**
     * Performs user authentication based on a provided user identifier and password.
     * 
     * @param {string} userIdentifier - The username or identifier of the user.
     * @param {string} password - The user's password.
     * @returns {string} - A JSON Web Token (JWT) representing the user's authentication.
     * @throws {Error} - Throws an error if authentication fails due to username, password, or missing JWT key.
     */
    public static async performAuthentication(user : UserInterface){
        //Find user in DB & check result of query
        const userData = await UserService.findOne(user.username);
        if(!userData)
            throw new Error('User does not exist');

        //Check password
        if(!userData.password)
            throw new Error('Unable to retrieve password');
        if(!await CryptographyUtils.checkHashMatch(user.password, userData.password))
            throw new Error('Incorrect password');

        //Check existance of private key
        if(!process.env.JWT_KEY)
            throw new Error('Missing private key');
        
        //return token
        return CryptographyUtils.signToken(userData.username, {}, process.env.JWT_KEY.replace(/\\n/g, '\n'));
    }
}