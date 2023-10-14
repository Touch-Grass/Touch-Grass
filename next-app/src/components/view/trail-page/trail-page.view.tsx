import React from "react";
import {PopulatedServerTrailWithID} from "@/models/server/trail/trail";
import "./trail-page.view.scss";
import {ITrail} from "@/models/shared/trail/trail.interface";
import dynamic from "next/dynamic";
import DifficultyMeterView from "@/components/view/difficulty-meter/difficulty-meter.view";
import CommentComponent from "@/components/view/comment/comment";
import { ServerCommentWithID } from "@/models/server/comment/comment";
import { Nullable } from "@/models/shared/utility.types";

interface TrailPageViewProps {
    trail: PopulatedServerTrailWithID;
    clientTrail: ITrail;
    comments: Nullable<ServerCommentWithID[]>;
}

const LazyLoadedTrailMapView = dynamic(
    () => import("../trail-map/trail-map.view"),
    {
        ssr: false,
        loading: () => (<div>loading...</div>), // TODO: Loading spinner
    }
);

const TrailPageView: React.FC<TrailPageViewProps> = props => {
    const {trail, clientTrail} = props;

    return (
        <div className={"trail-page-full-width-container"}>
            <div className={"trail-page-boxed-container"}>
                {/* TODO: Put trail-header into seperate component*/}
                <div className={"trail-header"}>
                    <div className={"trail-header-label"}>{trail.name}</div>
                </div>
                <div className={"trail-page-split"}>
                    <div className={"trail-page-left"}>
                        <div className={"trail-page-basic-properties"}>
                            <div className={"trail-page-prop"}>
                                <div className={"trail-page-prop-label"}>
                                    Length
                                </div>
                                <div className={"trail-page-prop-value"}>
                                    {trail.length.toFixed(1)} km
                                </div>
                            </div>
                            <div className={"trail-page-prop"}>
                                <div className={"trail-page-prop-label"}>
                                    Terrain
                                </div>
                                <div className={"trail-page-prop-value"}>
                                    {trail.terrain}
                                </div>
                            </div>
                        </div>
                        <div className={"trail-page-difficulty"}>
                            <div className={"trail-page-difficulty-label"}>Difficulty</div>
                            <div className={"trail-page-difficulty-meter-container"}>
                                <DifficultyMeterView difficulty={trail.difficulty}></DifficultyMeterView>
                            </div>
                        </div>
                        <div className={"trail-page-description"}>{trail.description}</div>
                    </div>
                    <div className={"trail-page-right"}>
                        <LazyLoadedTrailMapView trail={clientTrail}></LazyLoadedTrailMapView>
                    </div>
                </div>
            </div>
            <div className="trail-page-comments">
                <h1>Comments</h1>
                    {
                        /*mismatch between user type and comment type 
                        props.comments?.map((comment) => (
                        <CommentComponent key={comment._id.toString()}comment={comment}user={comment}/>))*/
                    }
            </div>
        </div>
    );
};
export default TrailPageView;
