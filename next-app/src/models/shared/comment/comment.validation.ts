import {IUser} from "@/models/shared/user/user.interface";
import {User} from "@/models/server/user/user";

export namespace CommentValidation {

    export function validatetitle(title: string) {
        const titlePattern = /^[A-Za-z\s]{2,30}$/;
        if (!titlePattern.test(title))
            throw new Error("Invalid title");
    }

    export function validatetext(text: string) {
        const textPattern = /^[A-Za-z\s"-]{2,30}$/;
        if (!textPattern.test(text))
            throw new Error("Invalid text");
    }
}