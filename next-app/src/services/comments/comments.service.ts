import {
    ServerCommentWithID,
    CommentModel,
    Comment
} from "@/models/server/comment/comment";
import {Document, Types} from "mongoose";

export class CommentsService {
    /**
     * Gets all comments from the same trail
     * @param trailmodel The trail we're looking for
     */
    public static async findCommentsForTrail(trailID: Types.ObjectId): Promise<ServerCommentWithID[]> {
        return await CommentModel.find({ "trail._id": trailID }).exec();
    }


    public static async addComment(comment: Comment): Promise<Document> {
        try{
            const record = new CommentModel({...comment});
            return await record.save();
        }catch(error:any){
            throw new Error("Invalid");
        }
    }
/*
    public static async addComment(comment: ServerComment): Promise<Document> {
        const record = new CommentModel({...comment});
        return await record.save();
    }*/

}
