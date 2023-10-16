import {NextApiRequest, NextApiResponse} from "next";
import {RequestHandler} from "@/utils/HTTPHandler/HTTPHandler";
import { TrailsService } from "@/services/trails/trails.service";
import { Trail } from "@/models/server/trail/trail";
import { ITrail } from "@/models/shared/trail/trail.interface";
import { UserService } from "@/services/users/service";
import { AuthService } from "@/services/auth/service";
import { HttpStatus, sendCustomError } from "@/utils/HTTPError/HTTPUtils";

export const config = {
    api: {
        bodyParser: {
            // Yea that's a bit much for this but right now we don't have a good estimate for what users can produce
            sizeLimit: "20mb",
        },
    },
};

class TrailHandler extends RequestHandler {
    constructor() {
        super(); // Call the constructor of the parent class
    }

    public async handlePost(request: NextApiRequest, response: NextApiResponse): Promise<void> {

        const token = request.cookies["TouchGrass-token"];
        try{
            try{
                //If user is not authenticated
                if(!token)
                    throw new Error("Not authenticated");
                await AuthService.performValidation(token);
            }catch(error:any){
                return sendCustomError(response, HttpStatus.UNAUTHORIZED,"");
            }

            let trail = new Trail(request.body as ITrail);

            //Set creation date
            trail.createdDate = Date.now();

            //Find user creator reference based on provided token
            const user = await AuthService.getUserInfoFromToken(token!);
            if(!user || !user.username)
                throw new Error("Could not find user in database");
            const ref = await UserService.findOneReference(user.username);
            trail.creator = ref;
            //Insert user
            const document = await TrailsService.insertOne(trail);
            const insertedTrailId = document._id;

            return response.status(200).json({ insertedTrailId });
        }catch(e: any){
            return sendCustomError(response, HttpStatus.INTERNAL_SERVER_ERROR, e?.message);
        }
    };

}
export default new TrailHandler().handleRequest;
