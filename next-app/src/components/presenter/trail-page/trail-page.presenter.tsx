import React from "react";
import {notFound, redirect} from "next/navigation";
import dbConnect from "@/lib/dbConnection";
import {TrailsService} from "@/services/trails/trails.service";
import {Nullable} from "@/models/shared/utility.types";
import {ServerTrailWithID} from "@/models/server/trail/trail";
import TrailPageView from "@/components/view/trail-page/trail-page.view";

interface TrailPagePresenterProps {
    trailId?: Nullable<string>;
}

const TrailPagePresenter: React.FC<TrailPagePresenterProps> = async props => {
    // GUARD: If the user does not supply a trail to search for, we bail out to 404.
    const trailId = props?.trailId;
    if (!trailId) {
        notFound();
    }

    // Ensure that the database connection is available.
    await dbConnect();

    // Query the trail from the database.
    let trail: Nullable<ServerTrailWithID> = null;
    try {
        trail = await TrailsService.findById(trailId);
    } catch (e) {}

    // GUARD: If the trail shows to be non-existent, we bail out to 404.
    if (!trail) {
        notFound();
    }

    return (
        <TrailPageView trail={trail}></TrailPageView>
    );
};

export default TrailPagePresenter;
