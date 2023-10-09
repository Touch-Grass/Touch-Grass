import type {Ref} from "@typegoose/typegoose";
import {getModelForClass, prop, ReturnModelType} from "@typegoose/typegoose";
import {Document, Schema} from "mongoose";
import {User} from "@/models/server/user/user";
import {Mutable} from "@/models/shared/utility.types";
import {ITrail} from "@/models/shared/trail/trail.interface";

export type ServerTrail = ITrail<Ref<User>>;

export class Trail implements Mutable<ServerTrail> {
    @prop()
    public name: string;
    @prop()
    public description: string;
    @prop({type: () => [Schema.Types.Number]})
    public waypoints: number[];
    @prop({type: () => [Schema.Types.Number]})
    public polyline: number[];
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

    public static async insertOne(trail: ServerTrail): Promise<Document> {
        const record = new TrailModel({...trail});
        // TODO: Perform validation. Especially type matching and check for additional/missing props. Can typegoose handle parts of this?
        return await record.save();
    }
}

export const TrailModel = getModelForClass(Trail);
