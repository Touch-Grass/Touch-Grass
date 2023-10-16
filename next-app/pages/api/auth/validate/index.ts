import {NextApiRequest, NextApiResponse} from "next";
import {RequestHandler} from "@/utils/HTTPHandler/HTTPHandler";
import {AuthService} from "@/services/auth/service";
import { HttpStatus, sendOkResponse, sendCustomError } from "@/utils/HTTPError/HTTPUtils";

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
            await AuthService.performValidation(request.body.token);
            return sendOkResponse(response, "Validation successful");
        }catch(e: any){
            return sendCustomError(response, HttpStatus.UNAUTHORIZED, e?.message);
        }
    }
}

export default new ValidateHandler().handleRequest;
