import React from "react";
import { ServerTrailWithID } from "@/models/server/trail/trail";
import "./trail-page.view.scss";

interface TrailPageViewProps {
    trail: ServerTrailWithID;
}

const TrailPageView: React.FC<TrailPageViewProps> = async (props) => {
    const trail = props.trail;

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
                        <div className={"trail-page-description"}>
                            {trail.description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="trail-page-comments">
                <h1>Comments</h1>
                {comments.map((comment) => (
                    <CommentComponent key={comment._id.toString()}comment={comment}/>
                ))}
            </div>
        </div>
    );
};
export default TrailPageView;
