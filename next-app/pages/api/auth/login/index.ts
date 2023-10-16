import {NextApiRequest, NextApiResponse} from "next";
import {RequestHandler} from "@/utils/HTTPHandler/HTTPHandler";
import { CookieService } from "@/services/cookies/service";
import {AuthService} from "@/services/auth/service";
import {IUser} from "@/models/shared/user/user.interface";
import {UserValidation} from "@/models/shared/user/user.validation";
import { HttpStatus, sendOkResponse, sendCustomError } from "@/utils/HTTPError/HTTPUtils";

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
        let token;
        try{
            //Check data
            UserValidation.validateAuthUser(request.body as IUser);
            //Try authentication
            token = await AuthService.performAuthentication(request.body);
        }catch(e: any){
            return sendCustomError(response, HttpStatus.UNAUTHORIZED, e?.message);
        }

        //Try set cookie
        try{
            //Set cookie
            response = CookieService.setCookie(response, token);
            return sendOkResponse(response, "Authentication successful");
        }catch(e: any){
            return sendCustomError(response, HttpStatus.INTERNAL_SERVER_ERROR, e?.message);
        }
    }
}

export default new LoginHandler().handleRequest;
