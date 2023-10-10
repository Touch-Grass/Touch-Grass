import {ITrail} from "@/models/shared/trail/trail.interface";
import {
    PopulatedServerTrail,
    PopulatedServerTrailWithID,
    ServerTrailWithID,
    TrailModel
} from "@/models/server/trail/trail";
import {Nullable, WithID} from "@/models/shared/utility.types";
import mongoose from "mongoose";
import {UserService} from "@/services/users/service";

export class TrailsService {
    /**
     * Gets all trails matching the criteria.
     * @param criteria The criteria to match.
     */
    public static async getAll(criteria: Partial<ITrail>): Promise<ServerTrailWithID[]> {
        return await TrailModel.find(criteria).exec();
    }

    /**
     * Finds one trail matching the criteria.
     * @param criteria The criteria to match.
     */
    public static async findOne(criteria: Partial<ITrail>): Promise<Nullable<ServerTrailWithID>> {
        return await TrailModel.findOne(criteria).exec();
    }

    /**
     * Finds one trail with id.
     * @param id The id to match.
     */
    public static async findById(id: string): Promise<Nullable<ServerTrailWithID>> {
        return await TrailModel.findById(id).exec();
    }

    /**
     * Finds one trail with id.
     * @param id The id to match.
     */
    public static async findPopulatedById(id: string): Promise<Nullable<PopulatedServerTrailWithID>> {
        return await TrailModel.findById(id).populate("creator").exec() as unknown as Nullable<PopulatedServerTrailWithID>;
    }

    public static convertPopulatedToClientModel(record: PopulatedServerTrail): ITrail {
        // TODO: Fix this, this is messed up...
        const copy = {...(record as any)["_doc"], creator: UserService.convertToClientModel((record as any)["_doc"].creator)};
        delete (copy as any)["_id"];
        delete (copy as any)["__v"];
        return copy;
    }
}
