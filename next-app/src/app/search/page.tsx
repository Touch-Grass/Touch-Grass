import React from "react";
import dbConnect from "@/lib/dbConnection";
import {ServerTrailWithID, TrailModel} from "@/models/server/trail/trail";
import {redirect} from "next/navigation";
import "./page.scss";

interface ServerSideProps {
    searchParams?: {
        l?: string; // Location.
    }
}

export default async function Search(props: ServerSideProps) {
    // GUARD: If the user does not supply a location to search for, we bail to the home page!
    const userRequestedLocation = props.searchParams?.l;
    if (!userRequestedLocation) {
        redirect("/");
    }

    // Ensure that the database connection is available.
    await dbConnect();

    // Query the resulting trails from our database.
    let trails: ServerTrailWithID[] = [];
    try {
        trails = await TrailModel.findByLocation("Stockholm", true);
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return (
        <>
            {
                trails.map(trail => (<div key={trail._id.toString()}>{trail.name}</div>))
            }
        </>
    );
}
