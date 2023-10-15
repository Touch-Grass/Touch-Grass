import {NextApiRequest, NextApiResponse} from "next";
import {RequestHandler} from "@/utils/HTTPHandler/HTTPHandler";
import { TrailsService } from "@/services/trails/trails.service";
import { Trail } from "@/models/server/trail/trail";
import { ITrail } from "@/models/shared/trail/trail.interface";
import { TrailValidation } from "@/models/shared/trail/trail.validation";
class TrailHandler extends RequestHandler {
    constructor() {
        super(); // Call the constructor of the parent class
    }


    public async handlePost(request: NextApiRequest, response: NextApiResponse): Promise<void> {
        try{
            const trail = new Trail(request.body as ITrail);
            //Insert user
            await TrailsService.insertOne(trail);
            response.status(200).end();
        }catch(e: any){
            console.log(e?.message);
            return response.status(400).json({ error: e?.message });
        }
    };

}
export default new TrailHandler().handleRequest;
