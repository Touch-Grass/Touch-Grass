import {NextApiRequest, NextApiResponse} from "next";
import {RequestHandler} from "@/utils/HTTPHandler/HTTPHandler";
import { UserService } from "@/services/users/service";
import { AuthService } from "@/services/auth/service";
import { HttpStatus, sendCustomError } from "@/utils/HTTPError/HTTPErrorUtils";
import { IComment } from "@/models/shared/comment/comment.interface";
import { CommentsService } from "@/services/comments/comments.service";
import { Comment } from "@/models/server/comment/comment";
import { TrailsService } from "@/services/trails/trails.service";
import { Ref } from "@typegoose/typegoose";
import { Trail } from "@/models/server/trail/trail";
class CommentHandler extends RequestHandler {
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

            if(!request.body.comment)
                throw new Error("No comment content");
            if(!request.body.trail)
                throw new Error("No trail content");

            let comment = new Comment(request.body.comment as IComment);
            //Set creation date
            comment.date = Date.now();

            //const trail = TrailsService.findById()
            const trail = await TrailsService.findById(request.body.trail._id);
            comment.trail= trail as Ref<Trail>;

            //Find comment creator reference based on provided token
            const user = await AuthService.getUserInfoFromToken(token);
            if(!user)
                throw new Error("No user found through token");
            const ref = await UserService.findOneReference(user?.username);
            comment.commenter = ref;

            //Insert comment
            const document = await CommentsService.addComment(comment);
            const insertedTrailId = document._id;

            return response.status(200).json({ insertedTrailId });

        }catch(e: any){
            return sendCustomError(response, HttpStatus.BAD_REQUEST, e?.message);;
        }
    }
}

export default new CommentHandler().handlePost;
