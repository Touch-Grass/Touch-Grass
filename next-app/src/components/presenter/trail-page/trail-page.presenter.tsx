import React from "react";
import {notFound} from "next/navigation";
import dbConnect from "@/lib/dbConnection";
import {TrailsService} from "@/services/trails/trails.service";
import {Nullable} from "@/models/shared/utility.types";
import {PopulatedServerTrailWithID} from "@/models/server/trail/trail";
import TrailPageView from "@/components/view/trail-page/trail-page.view";
import { ServerCommentWithID } from "@/models/server/comment/comment";
import { CommentsService } from "@/services/comments/comments.service";

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
    let trail: Nullable<PopulatedServerTrailWithID> = null;

    try {
        trail = await TrailsService.findPopulatedById(trailId);
    } catch (e) {}

    // GUARD: If the trail shows to be non-existent, we bail out to 404.
    if (!trail) {
        notFound();
    }

    // We need to supply a separate variant of the trail.
    // Some features are rendered client-side and need an appropriate variant,
    // while other features need, for example, the ID.
    // TODO: Maybe we can do better here? WithId<ITrail, string>?
    const clientTrail = TrailsService.convertPopulatedToClientModel(trail);

    //try to find the comments on that trail
    let comments: Nullable<ServerCommentWithID[]>=null;

    try{
        comments= await CommentsService.findCommentsForTrail(clientTrail);
    }catch (e) {}

    return (
        <TrailPageView trail={trail} clientTrail={clientTrail} comments={comments}></TrailPageView>
    );
};

export default TrailPagePresenter;
