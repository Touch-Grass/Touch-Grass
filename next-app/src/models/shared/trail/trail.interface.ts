import {IUser} from "@/models/shared/user/user.interface";

export interface ITrail<CreatorRef = IUser> {
    readonly name: string;
    readonly description: string;
    readonly polyline: number[];
    readonly waypoints: number[];
    readonly difficulty: number;
    readonly length: number;
    readonly terrain: string;
    readonly duration: number;
    readonly location: string;
    readonly images: string[];
    readonly creator: CreatorRef;
}
