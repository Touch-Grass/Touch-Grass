import {getModelForClass, prop} from "@typegoose/typegoose";
import {IUser} from "@/models/shared/user/user.interface";
import {Mutable} from "@/models/shared/utility.types";

export class User implements Mutable<IUser> {
    @prop({ type: () => String })
    username: string;
    @prop()
    name: string;
    @prop()
    surname: string;
    @prop()
    email: string;
    @prop()
    password: string;

    //Constructor based on a user interface
    constructor(user: IUser){
        this.username = user.username;
        this.name = user.name;
        this.surname = user.surname;
        this.email = user.email;
        this.password = user.password;
    }
}

export const UserModel = getModelForClass(User);

