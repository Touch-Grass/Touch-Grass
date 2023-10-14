"use client";
// CLIENT: Leaflet should only run on client.

import React from "react";
import {ITrail} from "@/models/shared/trail/trail.interface";
import {useMap} from "react-leaflet";
import TrailMapContentView from "@/components/view/trail-map-content/trail-map-content.view";
import {polyline} from "leaflet";

interface TrailMapContentPresenterProps {
    trail: ITrail;
}

/**
 * This presenter will set up the embeddable map and prepare data for it.
 * @param props {TrailMapContentPresenterProps} The properties of this presenter.
 */
const TrailMapContentPresenter: React.FC<TrailMapContentPresenterProps> = (props: TrailMapContentPresenterProps) => {
    const map = useMap();
    const trail = props.trail;

    // Here we need to convert the one-dimensional arrays to two-dimensional ones
    // for the interaction with leaflet.
    const points: [number, number][] = [];
    const markers: [number, number][] = [];

    for (let i = 0; i < trail.polyline.length; i+= 2) {
        points.push([trail.polyline[i], trail.polyline[i + 1]]);
    }

    for (let i = 0; i < trail.waypoints.length; i+= 2) {
        markers.push([trail.waypoints[i], trail.waypoints[i + 1]]);
    }

    // We make sure that the map initially displays the right area at the right zoom-level.
    map.fitBounds(polyline(points).getBounds());

    return (
        <TrailMapContentView polyline={points} waypoints={markers}></TrailMapContentView>
    );
};

export default TrailMapContentPresenter;
