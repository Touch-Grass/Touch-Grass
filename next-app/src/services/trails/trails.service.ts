import {ITrail} from "@/models/shared/trail/trail.interface";
import type {Ref} from "@typegoose/typegoose";
import {
    PopulatedServerTrail,
    PopulatedServerTrailWithID,
    ServerTrailWithID,
    TrailModel,
    ServerTrail,
    Trail
} from "@/models/server/trail/trail";
import {Nullable} from "@/models/shared/utility.types";
import {Document} from "mongoose";
import {UserService} from "@/services/users/service";
import { TrailValidation } from "@/models/shared/trail/trail.validation";

export class TrailsService {
    /**
     * Finds one trail with id.
     * @param id The id to match.
     */
    public static async findById(id: string): Promise<Nullable<ServerTrailWithID>> {
        const result =await TrailModel.findById(id).exec();

        if (result) {
            delete (result as any).creator["password"];
            delete (result as any).creator["email"];
        }

        return result;
    }

    /**
     * Finds one trail with id.
     * @param id The id to match.
     */
    public static async findPopulatedById(id: string): Promise<Nullable<PopulatedServerTrailWithID>> {
        const trail = await TrailModel.findById(id).populate("creator").exec();
        if (trail) {
            delete (trail as any).creator["password"];
            delete (trail as any).creator["email"];
        }

        return trail as unknown as Nullable<PopulatedServerTrailWithID>;
    }

    public static async findByLocation(
        location: string,
        withCreator: boolean = false
    ): Promise<PopulatedServerTrailWithID[]> {
        let query = TrailModel.find({searchLocation: location.toLowerCase()});
        if (withCreator) {
            query = query.populate("creator");
        }

        const results =  await query.exec();
        for (const result of results) {
            delete (result as any).creator["password"];
            delete (result as any).creator["email"];
        }

        return results as unknown as PopulatedServerTrailWithID[];
    }

    public static async findByUserName(
        userName: string
    ): Promise<PopulatedServerTrailWithID[]> {
        const results: Ref<Trail>[] = await TrailModel.find({
            "creator.username": userName
        }).exec();

        for (const result of results) {
            delete (result as any).creator["password"];
            delete (result as any).creator["email"];
        }

        return results as unknown as PopulatedServerTrailWithID[];
    }


    public static async countTrails(): Promise<number> {
        return await TrailModel.count().exec();
    }

    public static async countLocations(): Promise<number> {
        const results = await TrailModel.find({}).distinct("searchLocation").exec();
        return results.length;
    }

    public static async findRandomFeatured(): Promise<ServerTrailWithID[]> {
        const results = await TrailModel.aggregate([
            {$match: {featured: true}},
            {$sample: {size: 3}}
        ]).exec();

        for (const result of results) {
            delete (result as any).creator["password"];
            delete (result as any).creator["email"];
        }

        return results;
    }

    public static convertPopulatedToClientModel(record: PopulatedServerTrail): ITrail {
        const copy = {...(record as any)["_doc"], creator: UserService.convertToClientModel((record as any)["_doc"].creator)};
        delete (copy as any)["_id"];
        delete (copy as any)["__v"];
        return copy;
    }

    public static async insertOne(trail: Trail): Promise<Document> {
        try{
            TrailValidation.validateTrail(trail);
            const record = new TrailModel({...trail});
            return await record.save();
        }catch(error:any){
            throw new Error("Invalid trail");
        }
    }

    //Returns a document reference from the DB
    public static async findOneReference(name: string): Promise<Ref<Trail>> {
        const result = await TrailModel.findOne({ name: name}).exec();
        if(result == null)
            throw new Error("User not found");
        return result;
    }
}
