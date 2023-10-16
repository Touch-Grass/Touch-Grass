"use client";
import React from "react";
import {PopulatedServerTrailWithID} from "@/models/server/trail/trail";
import "./trail-page.view.scss";
import {ITrail} from "@/models/shared/trail/trail.interface";
import dynamic from "next/dynamic";
import DifficultyMeterView from "@/components/view/difficulty-meter/difficulty-meter.view";
import CommentComponent from "@/components/view/comment/comment";
import {ServerCommentWithID} from "@/models/server/comment/comment";
import {Nullable} from "@/models/shared/utility.types";
import AddCommentPresenter from "@/components/presenter/add-comment/add-comment.presenter";
import TrailPageHeaderView from "@/components/view/trail-page-header/trail-page-header.view";
import UserRepresentationView from "@/components/view/user-representation/user-representation.view";
import moment from "moment";
import LoadingSpinnerView from "@/components/view/loading-spinner/loading-spinner.view";
import { User } from "@/models/server/user/user";

interface TrailPageViewProps {
    trail: PopulatedServerTrailWithID;
    clientTrail: ITrail;
    comments: Nullable<ServerCommentWithID[]>;
}

const LazyLoadedTrailMapView = dynamic(
    () => import("../trail-map/trail-map.view"),
    {
        ssr: false,
        loading: () => (
            <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <LoadingSpinnerView></LoadingSpinnerView>
            </div>
        ),
    }
);

const TrailPageView: React.FC<TrailPageViewProps> = props => {
    const {trail, clientTrail} = props;

    // TODO: We REALLY should put this in some utils file...
    const duration = moment.duration(props.trail.duration, "minutes");

    return (
        <div className={"trail-page-full-width-container"}>
            <div className={"trail-page-boxed-container"}>
                <TrailPageHeaderView name={trail.name} imageURL={trail.images[0]}></TrailPageHeaderView>
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
                                    Duration
                                </div>
                                <div className={"trail-page-prop-value"}>
                                    {Math.floor(duration.hours())}h {Math.round(duration.minutes())}m
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
                        <div className={"trail-page-date"}><span>Submitted</span>: {moment(trail.createdDate).format("DD/MM/YYYY")}</div>
                        <div className={"trail-page-user"}>
                            <UserRepresentationView userName={trail.creator.name + " " + trail.creator.surname}></UserRepresentationView>
                        </div>
                    </div>
                    <div className={"trail-page-right"}>
                        <LazyLoadedTrailMapView trail={clientTrail}></LazyLoadedTrailMapView>
                    </div>
                </div>

                <div className="trail-page-comments">
                <h1>Comments</h1>

                    <div className="trail-page-comment-editor">
                        <AddCommentPresenter trail={trail}/>
                    </div>

                    {

                        props.comments?.map((comment) => (
                        <CommentComponent key={comment._id.toString()}comment={comment}user={comment.commenter as User}/>))
                    }
                </div>
            </div>
        </div>
    );
};
export default TrailPageView;
