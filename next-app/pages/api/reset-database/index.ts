import {NextApiRequest, NextApiResponse} from "next";
import {RequestHandler} from "@/utils/HTTPHandler/HTTPHandler";
import dbConnect from "@/lib/dbConnection";
import {UserModel} from "@/models/server/user/user";
import {TrailModel} from "@/models/server/trail/trail";
import {seed} from "@/seed/seed";
import { HttpStatus, sendCustomError } from "@/utils/HTTPError/HTTPUtils";

class ResetHandler extends RequestHandler {
    constructor() {
        super(); // Call the constructor of the parent class
    }

    /**
     * Handles reset of database.
     * DEVELOPER ENDPOINT: We need this for the presentation.
     * Obviously, we wouldn't include this in a real product...
     *
     * @param {NextApiRequest} request - The incoming HTTP request.
     * @param {NextApiResponse} response - The HTTP response object.
     */
    public async handleGet(request: NextApiRequest, response: NextApiResponse): Promise<void> {
        try {
            await dbConnect();

            await UserModel.deleteMany({});
            await TrailModel.deleteMany({});

            await seed();
            return response.status(200).json({message: "Database reset"});
        } catch (e: any) {
            return sendCustomError(response, HttpStatus.BAD_REQUEST, e?.message);
        }
    }
}

export default new ResetHandler().handleRequest;
