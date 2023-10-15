import {IUser} from "@/models/shared/user/user.interface";
import {User} from "@/models/server/user/user";
import { IComment } from "./comment.interface";

export namespace CommentValidation {

    export function validateTitle(title: string) {
        const titlePattern = /^[A-Za-z\s]{2,30}$/;
        if (!titlePattern.test(title))
            throw new Error("Invalid title");
    }

    export function validateText(text: string) {
        const textPattern = /^[A-Za-z\s"-]{2,30}$/;
        if (!textPattern.test(text))
            throw new Error("Invalid text");
    }

    export function validateComment(comment: Partial<IComment>){
        if (!comment.title)
            throw new Error("Nonexistent comment title");
        if (typeof comment.title !== "string")
            throw new Error("Invalid comment title type");
        validateTitle(comment.title);

        if (!comment.text)
            throw new Error("Nonexistent text");
        if (typeof comment.text !== "string")
            throw new Error("Invalid comment textext type");
        validateTitle(comment.text);
    }
}
