"use client";
// CLIENT: Leaflet should only run on client.

import React from "react";
import {Marker, Polyline, TileLayer} from "react-leaflet";
import {icon} from "leaflet";
import {FullscreenControl} from "react-leaflet-fullscreen";

interface TrailMapContentViewProps {
    polyline: [number, number][];
    waypoints: [number, number][];
}

const TrailMapContentView: React.FC<TrailMapContentViewProps> = props => {
    const {polyline, waypoints} = props;

    const markerIcon = icon({
        iconUrl: "/img/trail/marker-icon.png",
        iconSize: [32, 32]
    });

    return (
        <>
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                       attribution={"&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>"}/>
            <Polyline positions={polyline} color={"#FF0000"} weight={3} smoothFactor={1}></Polyline>
            {waypoints.map((waypoint, i) => (<Marker key={i} icon={markerIcon} position={waypoint}></Marker>))}
            <FullscreenControl />
        </>
    );
};

export default TrailMapContentView;
