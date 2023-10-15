import {UserModel} from "@/models/server/user/user";
import {UserService} from "@/services/users/service";
import {TrailModel} from "@/models/server/trail/trail";
import { TrailsService } from "@/services/trails/trails.service";
import {TRAIL_ONE, TRAIL_THREE, TRAIL_TWO, USER_ONE} from "@/seed/data";
import { CommentModel } from "@/models/server/comment/comment";
import { CommentsService } from "@/services/comments/comments.service";
import { COMMENT_ONE, COMMENT_TWO, COMMENT_THREE } from "./data/comments";
import { ITrail } from "@/models/shared/trail/trail.interface";

export const dynamic = "force-dynamic";
async function seedUsers() {
    // GUARD: If we already have users in the database, we assume that this step has been done already.
    const existingUser = await UserModel.findOne({}).exec();
    if (!!existingUser) {
        console.log("Skipping user creation, users exist.");
        return;
    }

    console.log("Creating users...");

    await UserService.insertOne(USER_ONE());

    console.log("Created users.");
}
async function seedTrails() {
    // GUARD: If we already have users in the database, we assume that this step has been done already.
    const existingTrail = await TrailModel.findOne({}).exec();
    if (!!existingTrail) {
        console.log("Skipping trail creation.");
        return;
    }

    const existingUser = await UserService.findOneReference(USER_ONE().username);

    // GUARD: If we do not have a user, we cannot attach a creator to the trails.
    if (!existingUser) {
        console.error("Bailing out because no user could be found.");
        return;
    }

    console.log("Creating trails...");

    await TrailsService.insertOne(TRAIL_ONE(existingUser));
    await TrailsService.insertOne(TRAIL_TWO(existingUser));
    await TrailsService.insertOne(TRAIL_THREE(existingUser));

    console.log("Created trails.");
}
async function seedComments() {
    // GUARD: If we already have users in the database, we assume that this step has been done already.
    const existingComment = await CommentModel.findOne({}).exec();
    if (!!existingComment) {
        console.log("Skipping comment creation, comment exist.");
        return;
    }

    console.log("Creating comment...");

    const existingUser = await UserService.findOneReference(USER_ONE().username);
    const existingTrail = await TrailsService.findOneReference(TRAIL_ONE(existingUser).name);


    await CommentsService.addComment(COMMENT_ONE(existingUser, existingTrail));
    await CommentsService.addComment(COMMENT_TWO(existingUser, existingTrail));
    await CommentsService.addComment(COMMENT_THREE(existingUser, existingTrail));

    console.log("Created comments.");
}
export async function seed() {
    const SEED_FUNCTIONS: (() => Promise<void>)[] = [
        seedUsers,
        seedTrails,
        seedComments,
    ];

    // We seed these sequentially because there might be dependencies between entities.
    for (const fn of SEED_FUNCTIONS) {
        try {
            console.log(`## Seed step: "${fn.name}"`);
            await fn();
        } catch (e) {
            console.error(`Error in seed routine "${fn.name}":\n`, e);
        }
    }
}
