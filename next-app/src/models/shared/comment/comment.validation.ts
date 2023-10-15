import {IUser} from "@/models/shared/user/user.interface";
import {User} from "@/models/server/user/user";
import { IComment } from "./comment.interface";

export namespace CommentValidation {


    export function validateComment(comment: Partial<IComment>){
        if (!comment.title)
            throw new Error("Nonexistent comment title");
        if (typeof comment.title !== "string")
            throw new Error("Invalid comment title type");
        

        if (!comment.text)
            throw new Error("Nonexistent text");
        if (typeof comment.text !== "string")
            throw new Error("Invalid comment textext type");
    }
}
