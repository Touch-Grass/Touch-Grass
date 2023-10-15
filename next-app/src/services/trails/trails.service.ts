import {ITrail} from "@/models/shared/trail/trail.interface";
import {
    PopulatedServerTrail,
    PopulatedServerTrailWithID,
    ServerTrailWithID,
    TrailModel,
    ServerTrail
} from "@/models/server/trail/trail";
import {Nullable, WithID} from "@/models/shared/utility.types";
import {Document} from "mongoose";
import {UserService} from "@/services/users/service";
import {ReturnModelType} from "@typegoose/typegoose";

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

    public static async findByLocation(
        location: string,
        withCreator: boolean = false
    ): Promise<PopulatedServerTrailWithID[]> {
        let query = TrailModel.find({searchLocation: location.toLowerCase()});
        if (withCreator) {
            query = query.populate("creator");
        }

        // TODO: I guess types need more fixing
        return await query.exec() as unknown as PopulatedServerTrailWithID[];
    }

    public static async countTrails(): Promise<number> {
        return await TrailModel.count().exec();
    }

    public static async countLocations(): Promise<number> {
        const results = await TrailModel.find({}).distinct("searchLocation").exec();
        return results.length;
    }

    public static async findRandomFeatured(): Promise<ServerTrailWithID[]> {
        return await TrailModel.aggregate([
            {$match: {featured: true}},
            {$sample: {size: 3}}
        ]).exec();
    }

    public static convertPopulatedToClientModel(record: PopulatedServerTrail): ITrail {
        // TODO: Fix this, this is messed up...
        const copy = {...(record as any)["_doc"], creator: UserService.convertToClientModel((record as any)["_doc"].creator)};
        delete (copy as any)["_id"];
        delete (copy as any)["__v"];
        return copy;
    }

    public static async insertOne(trail: ServerTrail): Promise<Document> {
        const record = new TrailModel({...trail});
        // TODO: Perform validation. Especially type matching and check for additional/missing props. Can typegoose handle parts of this?
        return await record.save();
    }
}
