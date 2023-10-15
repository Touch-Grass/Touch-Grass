import type {Ref} from "@typegoose/typegoose";
import {getModelForClass, prop, ReturnModelType} from "@typegoose/typegoose";
import {IComment} from "@/models/shared/comment/comment.interface";
import {Mutable, WithID} from "@/models/shared/utility.types";
import mongoose, { Document } from "mongoose";
import { Trail } from "../trail/trail";
import { User } from "../user/user";

export type ServerComment = IComment<Ref<User>, Ref<Trail>>;
export type ServerCommentWithID = WithID<ServerComment, mongoose.Types.ObjectId>;
export class Comment implements Mutable<ServerComment>{
    @prop()
    commenter: Ref<User>;
    @prop()
    title: string;
    @prop()
    text: string;
    @prop()
    date: number;
    @prop()
    trail: Ref<Trail>;

    //Constructor based on a user interface
    constructor(comment: IComment) {
        this.title = comment.title;
        this.text = comment.text;
    }
}


type CommentModelType = ReturnModelType<typeof Comment>;
export const CommentModel: CommentModelType = mongoose.models.Comment as CommentModelType ?? getModelForClass(Comment);

