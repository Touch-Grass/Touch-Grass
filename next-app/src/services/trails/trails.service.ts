import {ITrail} from "@/models/shared/trail/trail.interface";
import {ServerTrailWithID, TrailModel} from "@/models/server/trail/trail";
import {Nullable} from "@/models/shared/utility.types";

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
}
