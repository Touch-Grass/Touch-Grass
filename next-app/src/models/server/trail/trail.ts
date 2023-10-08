import type {Ref} from "@typegoose/typegoose";
import {getModelForClass, prop, ReturnModelType} from "@typegoose/typegoose";
import {Schema} from "mongoose";
import {User} from "@/models/server/user/user";
import {Mutable} from "@/models/shared/utility.types";
import {ITrail} from "@/models/shared/trail/trail.interface";

export class Trail implements Mutable<ITrail<Ref<User>>> {
    @prop()
    public name: string;
    @prop()
    public description: string;
    @prop({type: () => [Schema.Types.Number]})
    public route: number[];
    @prop()
    public difficulty: number;
    @prop()
    public length: number;
    @prop()
    public terrain: string;
    @prop()
    public duration: number;
    @prop()
    public location: string;
    @prop({type: () => [Schema.Types.String]})
    public images: string[];
    @prop()
    public creator: Ref<User>;

    public static findByLocation(this: ReturnModelType<typeof Trail>, location: string) {
        return this.find({location}).exec();
    }
}

export const TrailModel = getModelForClass(Trail);
