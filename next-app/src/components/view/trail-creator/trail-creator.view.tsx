"use client";
// CLIENT: Leaflet should only run on client.

import React from "react";
import {MapContainer} from "react-leaflet";
import "./trail-creator.view.scss";
import TrailCreatorContentPresenter from "@/components/presenter/trail-creator-content/trail-creator-content.presenter";

interface TrailCreatorViewProps {
}

const TrailCreatorView: React.FC<TrailCreatorViewProps> = props => {
    return (
        <MapContainer zoom={13} center={[59.2, 18.1]} className={"trail-creator-view"}>
            <TrailCreatorContentPresenter></TrailCreatorContentPresenter>
        </MapContainer>
    );
};

export default TrailCreatorView;
