import {NextApiRequest, NextApiResponse} from "next";
import {RequestHandler} from "@/utils/HTTPHandler/HTTPHandler";
import { TrailsService } from "@/services/trails/trails.service";
import { Trail } from "@/models/server/trail/trail";
import { ITrail } from "@/models/shared/trail/trail.interface";
import { UserService } from "@/services/users/service";
import { AuthService } from "@/services/auth/service";
import { CookieService } from "@/services/cookies/service";


class TrailHandler extends RequestHandler {
    constructor() {
        super(); // Call the constructor of the parent class
    }


    public async handlePost(request: NextApiRequest, response: NextApiResponse): Promise<void> {
        try{
            //If user is not authenticated
            const token = CookieService.getCookie();
            if(!AuthService.performValidation(token)){
                response.writeHead(302, { Location: "/login" });
                throw new Error("Not authenticated");
            }

            let trail = new Trail(request.body as ITrail);

            //Set creation date
            trail.createdDate = Date.now();

            //Find user creator reference based on provided token
            const user = await AuthService.getUserInfoFromToken(token);
            if(!user || !user.username)
                throw new Error("Could not find user in database");
            const ref = await UserService.findOneReference(user.username);
            trail.creator = ref;

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
