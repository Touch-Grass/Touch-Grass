import {NextApiRequest, NextApiResponse} from "next";
import {RequestHandler} from "@/utils/HTTPHandler/HTTPHandler";
import {UserService} from "@/services/users/service";
import {User} from "@/models/server/user/user";
import {IUser} from "@/models/shared/user/user.interface";
import {UserValidation} from "@/models/shared/user/user.validation";
import { HttpStatus, sendCustomError } from "@/utils/HTTPError/HTTPUtils";

class UserHandler extends RequestHandler {
    constructor() {
        super(); // Call the constructor of the parent class
    }

    /**
     * Handles HTTP POST requests to insert a new user into the database.
     * Validates the user data and checks for username uniqueness before insertion.
     * @param {NextApiRequest} request - The HTTP request object containing user data.
     * @param {NextApiResponse} response - The HTTP response object.
     * @returns {Promise<void>} A promise that resolves after handling the request.
     */
    public async handlePost(request: NextApiRequest, response: NextApiResponse): Promise<void> {
        try{
            const user = new User(request.body as IUser);
            //Validate user data
            UserValidation.validateUser(user);

            if(await UserService.checkUserExists(user.username))
                throw new Error("The username is already taken");
            //Insert user
            await UserService.insertOne(user);
            response.status(200).end();
        }catch(e: any){
            return sendCustomError(response, HttpStatus.BAD_REQUEST, e?.message);
        }
    }
}

export default new UserHandler().handleRequest;
