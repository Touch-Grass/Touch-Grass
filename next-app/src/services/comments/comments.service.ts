import {IComment} from "@/models/shared/comment/comment.interface";
import {
    ServerCommentWithID,
    CommentModel,
    Comment
} from "@/models/server/comment/comment";
import { Trail } from "@/models/server/trail/trail";
import {Nullable, WithID} from "@/models/shared/utility.types";
import mongoose from "mongoose";
import { ITrail } from "@/models/shared/trail/trail.interface";
import { TrailValidation } from "@/models/shared/trail/trail.validation";
import {Document} from "mongoose";

export class CommentsService {
    /**
     * Gets all comments from the same trail
     * @param trailmodel The trail we're looking for
     */
    public static async findCommentsForTrail(trail: ITrail): Promise<ServerCommentWithID[]> {
        return await CommentModel.find(trail).exec();
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
