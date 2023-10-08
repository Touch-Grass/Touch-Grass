import dbConnect from "@/lib/dbConnection";
import {UserModel} from "@/models/server/user/user";
import {TrailModel} from "@/models/server/trail/trail";
import {UserService} from "@/services/users/service";
import {TRAIL_ONE, TRAIL_TWO, USER_ONE} from "@/seed-data";

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

    const existingUser = await UserModel.findOne({}).exec();

    // GUARD: If we do not have a user, we cannot attach a creator to the trails.
    if (!existingUser) {
        console.error("Bailing out because no user could be found.");
        return;
    }

    console.log("Creating trails...");

    await TrailModel.insertOne(TRAIL_ONE(existingUser));
    await TrailModel.insertOne(TRAIL_TWO(existingUser));

    console.log("Created trails.");
}

async function seed() {
    const SEED_FUNCTIONS: (() => Promise<void>)[] = [
        seedUsers,
        seedTrails,
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

/**
 * This function will be called on startup of the application.
 */
export async function register() {
    try {
        console.log(`# Instrumentation for env: ${process.env.NEXT_RUNTIME}`);

        console.log("# Connecting to database...");
        await dbConnect();
        console.log("# Connected to database.");

        console.log("# Seeding database...");
        await seed();
        console.log("# Seeding completed.");
    } catch (e) {
        console.error("CRITICAL: STARTUP FAILED TO RUN.\n", e);
    }
}
