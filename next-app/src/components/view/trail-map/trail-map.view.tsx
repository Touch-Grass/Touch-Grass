"use client";
// CLIENT: Leaflet should only run on client.

import React from "react";
import {MapContainer} from "react-leaflet";
import {ITrail} from "@/models/shared/trail/trail.interface";
import "./trail-map.view.scss";
import TrailMapContentPresenter from "@/components/presenter/trail-map-content/trail-map-content.presenter";

interface TrailMapViewProps {
    trail: ITrail;
}

const TrailMapView: React.FC<TrailMapViewProps> = props => {
    const trail = props.trail;
    return (
        <MapContainer className={"trail-map-view"}>
            <TrailMapContentPresenter trail={trail}></TrailMapContentPresenter>
        </MapContainer>
    );
};

export default TrailMapView;
