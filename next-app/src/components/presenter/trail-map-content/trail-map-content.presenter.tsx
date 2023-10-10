"use client";
// CLIENT: Leaflet should only run on client.

import React from "react";
import {ITrail} from "@/models/shared/trail/trail.interface";
import {useMap} from "react-leaflet";
import TrailMapContentView from "@/components/view/trail-map-content/trail-map-content.view";
import L, {polyline} from "leaflet";

interface TrailMapContentPresenterProps {
    trail: ITrail;
}

const TrailMapContentPresenter: React.FC<TrailMapContentPresenterProps> = props => {
    const map = useMap();
    const trail = props.trail;

    const points: any[] = [];

    for (let i = 0; i < trail.polyline.length; i+= 2) {
        points.push(new L.LatLng (trail.polyline[i], trail.polyline[i + 1]));
    }

    const markers: [number, number][] = [];

    for (let i = 0; i < trail.waypoints.length; i+= 2) {
        markers.push([trail.waypoints[i], trail.waypoints[i + 1]]);
    }

    const pline = polyline(points, {
        color: "red",
        weight: 3,
        opacity: 0.5,
        smoothFactor: 1
    }) as any;
    map.fitBounds(pline.getBounds());

    return (
        <TrailMapContentView polyline={points} waypoints={markers}></TrailMapContentView>
    );
};

export default TrailMapContentPresenter;
