import {getModelForClass, prop} from "@typegoose/typegoose";
import {nanoid} from "nanoid";

export class User {
    @prop({default: () => nanoid(9)})
    _id: string;
    @prop()
    name: string;
    @prop()
    surname: string;
    @prop()
    email: string;
    @prop()
    password: string;
}

export type UserInterface = {
    [K in keyof User]: User[K];
};

export const UserModel = getModelForClass(User);
