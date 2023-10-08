import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";
import { getModelForClass } from "@typegoose/typegoose";
import type { UserInterface } from "./users";

export class Trail {
    @prop({ default: () => nanoid(9) })
    _id: string;
    @prop()
    name:string;
    @prop()
    description:string;
    @prop()
    length:number;
    @prop()
    difficulty:number;
    @prop()
    terrain:string;
    @prop()
    rating:number;
    @prop()
    image:string;
    @prop()
    user: UserInterface;         //IDK if this is correct check
}

export type TrailInterface = {
    [K in keyof Trail]: Trail[K];
  };

export const TrailModel = getModelForClass(Trail);