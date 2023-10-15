import type {Ref} from "@typegoose/typegoose";
import {getModelForClass, prop, ReturnModelType} from "@typegoose/typegoose";
import mongoose, {Document, Schema} from "mongoose";
import {User} from "@/models/server/user/user";
import {Mutable, WithID} from "@/models/shared/utility.types";
import {ITrail} from "@/models/shared/trail/trail.interface";

export type ServerTrail = ITrail<Ref<User>>;
export type ServerTrailWithID = WithID<ServerTrail, mongoose.Types.ObjectId>;
export type PopulatedServerTrail = ITrail<User>;
export type PopulatedServerTrailWithID = WithID<PopulatedServerTrail, mongoose.Types.ObjectId>

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
    @prop()
    public createdDate: number;
    @prop()
    public searchLocation: string;
    @prop()
    public featured: boolean;

    //Constructor based on a user interface
    constructor(trail: ITrail) {
        this.name = trail.name;
        this.description = trail.description;
        this.waypoints = trail.waypoints;
        this.polyline = trail.polyline;
        this.difficulty = trail.difficulty;
        this.length = trail.length;
        this.terrain = trail.terrain;
        this.duration = trail.duration;
        this.location = trail.location;
        this.images = trail.images;
        this.searchLocation = trail.searchLocation;
        this.featured = trail.featured;
    }
}

type TrailModelType = ReturnModelType<typeof Trail>;
export const TrailModel: TrailModelType = mongoose.models.Trail as TrailModelType ?? getModelForClass(Trail);
