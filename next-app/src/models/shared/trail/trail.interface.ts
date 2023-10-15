import {IUser} from "@/models/shared/user/user.interface";

export interface ICompiledGeoTrail {
    readonly polyline: number[];
    readonly waypoints: number[];
    readonly length: number;
    readonly duration: number;
}

export interface ITrail<CreatorRef = IUser> extends ICompiledGeoTrail {
    readonly name: string;
    readonly description: string;
    readonly difficulty: number;
    readonly terrain: string;
    readonly location: string;
    readonly searchLocation: string;
    readonly images: string[];
    readonly featured: boolean;
    readonly createdDate: number;
    readonly creator: CreatorRef;
}
