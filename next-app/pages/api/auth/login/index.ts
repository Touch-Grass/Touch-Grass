import {NextApiRequest, NextApiResponse} from "next";
import {RequestHandler} from "@/utils/HTTPHandler/HTTPHandler";
import { CookieService } from "@/services/cookies/service";
import {AuthService} from "@/services/auth/service";
import {IUser} from "@/models/shared/user/user.interface";
import {UserValidation} from "@/models/shared/user/user.validation";
import { HttpStatus, sendCustomError } from "@/utils/HTTPError/HTTPErrorUtils";

class LoginHandler extends RequestHandler {
    constructor() {
        super(); // Call the constructor of the parent class
    }

    /**
     * Handles user authentication via HTTP POST request.
     *
     * @param {NextApiRequest} request - The incoming HTTP request.
     * @param {NextApiResponse} response - The HTTP response object.
     */
    public async handlePost(request: NextApiRequest, response: NextApiResponse): Promise<void> {
        //Try authenticating
        try{
            //Check data
            UserValidation.validateAuthUser(request.body as IUser);
            //Try authentication
            const token = await AuthService.performAuthentication(request.body);
            //Set cookie
            response = CookieService.setCookie(response, token);
            return response.status(200).json({ message: "Authentication successful" });
        }catch(e: any){
            return sendCustomError(response, HttpStatus.BAD_REQUEST, e?.message);
        }
    }
}

export default new LoginHandler().handleRequest;
