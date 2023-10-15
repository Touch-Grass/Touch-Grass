import {NextApiRequest, NextApiResponse} from "next";
import {RequestHandler} from "@/utils/HTTPHandler/HTTPHandler";
import {AuthService} from "@/services/auth/service";
import { HttpStatus, sendCustomError } from "@/utils/HTTPError/HTTPErrorUtils";

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
            return sendCustomError(response, HttpStatus.BAD_REQUEST, e?.message);;
        }
    }
}

export default new ValidateHandler().handleRequest;
