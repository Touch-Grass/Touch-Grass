import type {NextApiRequest, NextApiResponse} from "next";
import dbConnect from "@/lib/dbConnection";
import * as ErrorUtils from "@/utils/HTTPError/HTTPErrorUtils";

export class RequestHandler {

    public handleRequest: (request: NextApiRequest, response: NextApiResponse) => Promise<void> = async (request: NextApiRequest, response: NextApiResponse) => {
        await dbConnect();
        switch (request.method) {
            case "GET":
                await this.handleGet(request, response);
                break;
            case "POST":
                await this.handlePost(request, response);
                break;
            case "DELETE":
                await this.handleDelete(request, response);
                break;
            case "PUT":
                await this.handlePut(request, response);
                break;
            case "PATCH":
                await this.handlePatch(request, response);
                break;
            default:
                ErrorUtils.sendError(response, ErrorUtils.HttpStatus.METHOD_NOT_ALLOWED);
        }
    };

    public async handleGet(request: NextApiRequest, response: NextApiResponse): Promise<void> {
        ErrorUtils.sendError(response, ErrorUtils.HttpStatus.METHOD_NOT_ALLOWED);
    }

    public async handlePost(request: NextApiRequest, response: NextApiResponse): Promise<void> {
        ErrorUtils.sendError(response, ErrorUtils.HttpStatus.METHOD_NOT_ALLOWED);
    }

    public async handleDelete(request: NextApiRequest, response: NextApiResponse): Promise<void> {
        ErrorUtils.sendError(response, ErrorUtils.HttpStatus.METHOD_NOT_ALLOWED);
    }

    public async handlePut(request: NextApiRequest, response: NextApiResponse): Promise<void> {
        ErrorUtils.sendError(response, ErrorUtils.HttpStatus.METHOD_NOT_ALLOWED);
    }

    public async handlePatch(request: NextApiRequest, response: NextApiResponse): Promise<void> {
        ErrorUtils.sendError(response, ErrorUtils.HttpStatus.METHOD_NOT_ALLOWED);
    }
}
