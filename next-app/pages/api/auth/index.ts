import {NextApiRequest, NextApiResponse} from "next";
import {RequestHandler} from "@/utils/HTTPHandler/HTTPHandler";
import {AuthService} from "@/services/auth/service";
import {IUser} from "@/models/shared/user/user.interface";
import {UserValidation} from "@/models/shared/user/user.validation";

class AuthHandler extends RequestHandler {
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
            const parsedBody = JSON.parse(request.body);
            UserValidation.validateAuthUser(parsedBody as IUser);
            //Try authentication
            const token = await AuthService.performAuthentication(parsedBody);
            //Set token
            response.setHeader("Set-Cookie", "token=${token}; HttpOnly; Path=/; Max-Age=3600");
            return response.status(200).json({ message: "Authentication successful" });
        }catch(e: any){
            return response.status(200).json({error: e?.message});
        }
    }
}

export default new AuthHandler().handleRequest;
