import {IComment} from "@/models/shared/comment/comment.interface";
import {
    ServerCommentWithID,
    CommentModel
} from "@/models/server/comment/comment";
import { Trail } from "@/models/server/trail/trail";
import {Nullable, WithID} from "@/models/shared/utility.types";
import mongoose from "mongoose";
import { ITrail } from "@/models/shared/trail/trail.interface";


export class CommentsService {
    /**
     * Gets all comments from the same trail
     * @param trailmodel The trail we're looking for
     */
    public static async findCommentsForTrail(trail: ITrail): Promise<ServerCommentWithID[]> {
        return await CommentModel.find(trail).exec();
    }

}
