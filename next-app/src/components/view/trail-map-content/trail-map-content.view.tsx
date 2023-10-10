"use client";
// CLIENT: Leaflet should only run on client.

import React from "react";
import {ITrail} from "@/models/shared/trail/trail.interface";
import {Marker, Polyline, TileLayer} from "react-leaflet";

interface TrailMapContentViewProps {
    polyline: [number, number][];
    waypoints: [number, number][];
}

const TrailMapContentView: React.FC<TrailMapContentViewProps> = props => {
    const {trail, polyline, waypoints} = props;

    return (
        <>
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" attribution={"&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>"}/>
            <Polyline positions={polyline} color={"#FF0000"} weight={3} smoothFactor={1}></Polyline>
            {waypoints.map((waypoint, i) => (<Marker key={i} position={waypoint}></Marker>))}
        </>
    );
};

export default TrailMapContentView;
