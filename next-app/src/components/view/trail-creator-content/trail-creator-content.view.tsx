"use client";
// CLIENT: Leaflet should only run on client.

import React, {useMemo} from "react";
import {Marker, Polyline, TileLayer} from "react-leaflet";
import {DragEndEvent, icon, LeafletMouseEvent} from "leaflet";

interface TrailCreatorContentViewProps {
    waypoints: [number, number][];
    polylines: [number, number][][];
    removeWaypoint: (index: number) => void;
    modifyWaypoint: (index: number, latlng: [number, number]) => void;
}

const TrailCreatorContentView: React.FC<TrailCreatorContentViewProps> = props => {
    const {
        polylines,
        waypoints,
        removeWaypoint,
        modifyWaypoint
    } = props;

    const markerIcon = icon({
        iconUrl: "/img/trail/marker-icon.png",
        iconSize: [32, 32]
    });

    const markerIconStart = icon({
        iconUrl: "/img/trail/logo-green.png",
        iconSize: [32, 32]
    });

    const markerIconEnd = icon({
        iconUrl: "/img/trail/logo-red.png",
        iconSize: [32, 32]
    });

    const decideIcon = (index: number) => {
        if (index === 0) {
            return markerIconStart;
        }

        if (index === waypoints.length -1) {
            return markerIconEnd;
        }

        return markerIcon;
    };


    const eventListenerMemo = useMemo(() => ({
        dragend(e: DragEndEvent) {
            const index = e.target.options["data-index"];
            const newPos = e.target.getLatLng();
            modifyWaypoint(index, [newPos.lat, newPos.lng]);
        },
        mouseup(e: LeafletMouseEvent) {
            if (e.originalEvent.button === 2) {
                e.originalEvent.preventDefault();
                e.originalEvent.stopPropagation();
                const index = e.target.options["data-index"];
                setTimeout(() => {
                    removeWaypoint(index);
                });
            }
        },
        contextmenu(e: LeafletMouseEvent) {
            e.originalEvent.preventDefault();
            e.originalEvent.stopPropagation();
        }
    }), [removeWaypoint, modifyWaypoint]);

    return (
        <>
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" attribution={"&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>"}/>

            {polylines.map((polyline, i) => (
                <Polyline key={"polyline-" + i} positions={polyline} color={"#FF0000"} weight={3} smoothFactor={1}></Polyline>
            ))}
            {waypoints.map((waypoint, i) => (
                <Marker key={"marker-" + i}
                        data-index={i}
                        draggable={true}
                        eventHandlers={eventListenerMemo}
                        icon={decideIcon(i)}
                        position={waypoint}></Marker>
            ))}
        </>
    );
};

export default TrailCreatorContentView;
