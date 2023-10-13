import { ITrail } from "../trail/trail.interface";
import { IUser } from "../user/user.interface";

export interface IComment<CommenterRef = IUser, TrailRef = ITrail> {
    readonly commenter: CommenterRef;
    readonly text: string;
    readonly date: number;
    readonly trail: TrailRef;
}
