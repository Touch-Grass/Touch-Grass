import type {Ref} from "@typegoose/typegoose";
import {getModelForClass, prop, ReturnModelType} from "@typegoose/typegoose";
import {IComment} from "@/models/shared/comment/comment.interface";
import {Mutable, WithID} from "@/models/shared/utility.types";
import mongoose from "mongoose";
import { Trail } from "../trail/trail";
import { User } from "../user/user";

export type ServerComment = IComment<Ref<User>, Ref<Trail>>;
export type ServerCommentWithID = WithID<ServerComment, mongoose.Types.ObjectId>;
export class Comment implements Mutable<ServerComment>{
    @prop()
    commenter: Ref<User>;
    @prop()
    public text: string;
    @prop()
    date: number;
    @prop()
    trail: Ref<Trail>;
/*                      TODO: solve return error
    public static async addComment(comment: ServerComment): Promise<Document> {
        const record = new CommentModel({...comment});
        return await record.save();
    }*/
}

type CommentModelType = ReturnModelType<typeof Comment>;
export const CommentModel = mongoose.models.Comment as CommentModelType ?? getModelForClass(Comment);

