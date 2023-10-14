import {NextApiRequest, NextApiResponse} from "next";
import {RequestHandler} from "@/utils/HTTPHandler/HTTPHandler";
import {AuthService} from "@/services/auth/service";
import {IUser} from "@/models/shared/user/user.interface";
import {UserValidation} from "@/models/shared/user/user.validation";

class ValidateHandler extends RequestHandler {
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
        //Try validating
        try{
            if(await AuthService.performValidation(request.body.token))
                return response.status(200).json({ message: "Validation successful" });
        }catch(e: any){
            return response.status(400).json({error: e?.message});
        }
    }
}

export default new ValidateHandler().handleRequest;
