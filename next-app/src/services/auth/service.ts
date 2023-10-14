import {CryptographyUtils} from "@/utils/Cryptography/CryptographicUtils";
import {UserService} from "../users/service";
import {IUser} from "@/models/shared/user/user.interface";

export class AuthService {
    /**
     * Performs user authentication based on a provided user identifier and password.
     *
     * @param {string} userIdentifier - The username or identifier of the user.
     * @param {string} password - The user"s password.
     * @returns {string} - A JSON Web Token (JWT) representing the user"s authentication.
     * @throws {Error} - Throws an error if authentication fails due to username, password, or missing JWT key.
     */
    public static async performAuthentication(user: IUser):Promise<string> {
        //Find user in DB & check result of query
        const userData = await UserService.findOne(user.username);
        if (!userData)
            throw new Error("User does not exist");

        //Check password
        if (!userData.password)
            throw new Error("Unable to retrieve password");
        if (!await CryptographyUtils.checkHashMatch(user.password, userData.password))
            throw new Error("Incorrect password");

        //Check existance of private key
        if (!process.env.PRIVATE_KEY)
            throw new Error("Missing private key");

        //return token
        return CryptographyUtils.signToken(userData.username, {}, process.env.PRIVATE_KEY.replace(/\\n/g, "\n"));
    }

    /**
     * Validates a JWT token and checks if the user associated with the token exists.
     * @param token - The JWT token to be validated.
     * @returns A Promise that resolves to a boolean value:
     *   - `true` if the token is valid, the public key is available, and the user exists.
     *   - `false` if any of the validation steps fail.
     */
    public static async performValidation(token:string):Promise<boolean> {
        try{
            if (!token || token.length == 0)
            throw new Error("Token is empty");

            //Check existance of private key
            if (!process.env.PUBLIC_KEY)
                throw new Error("Missing public key");

            //Get user
            const user = CryptographyUtils.validateToken(token, process.env.PUBLIC_KEY.replace(/\\n/g, "\n"));

            //Validate user
            const userData = await UserService.findOne(user);
            if (!userData)
                throw new Error("User does not exist");

            //Validation correct
            return true;

        }catch(error : any){
            return false;
        }

    }
}
