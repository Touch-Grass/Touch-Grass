import mongoose, {Connection} from "mongoose";
import {seed} from "@/seed/seed";

let cachedConnection: Connection | null = null;

export default async function dbConnect(): Promise<Connection> {
    if (cachedConnection) {
        return cachedConnection;
    }

    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
        throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
    }

    try {
        const opts: mongoose.ConnectOptions = {
        };

        const connection = await mongoose.connect(MONGODB_URI, opts);
        cachedConnection = connection.connection;

        try {
            console.log("Seeding database...");
            await seed();
            console.log("Seeded database...");
        } catch (e) {
            console.error("Error during data seeding:\n", e);
        }

        return cachedConnection;
    } catch (error) {
        throw error;
    }
}
