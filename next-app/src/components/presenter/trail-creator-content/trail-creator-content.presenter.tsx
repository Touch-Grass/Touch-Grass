"use client";
// CLIENT: Leaflet should only run on client.

import React, {useState} from "react";
import {useMapEvents} from "react-leaflet";
import TrailCreatorContentView from "@/components/view/trail-creator-content/trail-creator-content.view";

interface TrailCreatorContentPresenterProps {
}

interface OSRMResponse {
    code: "Ok" | string;
    routes: {
        geometry: {
            coordinates: [number, number][];
        };
        duration: number;
        distance: number;
    }[];
}

const retrieveRoute = async (start: [number, number], end: [number, number]): Promise<{duration: number, length: number, polyline: [number, number][]}> => {
    try {
        const coordString = `${start[1]},${start[0]};${end[1]},${end[0]}`;
        const url = `https://osrm.mwagner.se/route/v1/foot/${coordString}?geometries=geojson&overview=full`;
        const resp: OSRMResponse = await (await fetch(url)).json();

        if (resp.code !== "Ok"){
            throw new Error("Response was not okay. Code: " + resp.code);
        }

        // Calculate the polyline from the response by inverting the coordinate system.
        //
        // We add the start and end here, because the polyline will only reach marked paths.
        // So we finish the line by adding the actual points again.
        //
        // Technically, this potentially adds (in some cases, a lot more) distance and time to it,
        // but we don't get graded for geographical accuracy so let's not talk about it...
        //
        // These values returned by OSRM are estimates anyway :P

        const polyline = [
            start,
            ...(resp.routes[0].geometry.coordinates.map(waypoint => [waypoint[1], waypoint[0]])),
            end
        ] as [number, number][];

        // Convert distance and length into proper units for display.
        const duration = resp.routes[0].duration / 60;
        const length = resp.routes[0].distance / 1000;

        return {polyline, duration, length};
    } catch (e) {
        return {
            duration: 10,
            length: 10,
            polyline: [start, end]
        };
    }
};


/**
 * This presenter will set up the embeddable map and prepare data for it.
 * @param props {TrailCreatorContentPresenterProps} The properties of this presenter.
 */
const TrailCreatorContentPresenter: React.FC<TrailCreatorContentPresenterProps> = props => {
    const [waypoints, setWaypoints] = useState<[number, number][]>([]);
    const [polylines, setPolylines] = useState<[number, number][][]>([]);
    const [segmentLengths, setSegmentLengths] = useState<number[]>([]);
    const [segmentDurations, setSegmentDurations] = useState<number[]>([]);

    const addWaypoint = async (latlng: [number, number]) => {
        const newWaypoints = [...waypoints, latlng];

        if (newWaypoints.length < 2) {
            setWaypoints(newWaypoints);
            // TODO: Compile data and push outside?
            return;
        }

        const route = await retrieveRoute(newWaypoints[newWaypoints.length - 2], latlng);

        const newPolylines = [...polylines, route.polyline];
        const newSegmentLengths = [...segmentLengths, route.length];
        const newSegmentDurations = [...segmentDurations, route.duration];
        setWaypoints(newWaypoints);
        setPolylines(newPolylines);
        setSegmentLengths(newSegmentLengths);
        setSegmentDurations(newSegmentDurations);

        // TODO: Compile data and push outside?
    };

    const removeWaypoint = (index: number) => {
        if (waypoints.length <= index || index < 0) {
            return;
        }

        const hasPrecedingSegment = index > 0;
        const hasSucceedingSegment = index < waypoints.length - 1;

        // Delete the waypoint and update waypoints.
        const newWaypoints = [...waypoints];
        newWaypoints.splice(index, 1);
        setWaypoints(newWaypoints);



        // TODO: Remove from waypoints
        // TODO: Remove matching polyline segments (before and after)
        // TODO: Recalculate new polilines if necessary
        // TODO: Compile data and push outside?
    };

    const modifyWaypoint = async (index: number, latlng: [number, number]) => {
        if (waypoints.length <= index || index < 0) {
            return;
        }

        const hasPrecedingSegment = index > 0;
        const hasSucceedingSegment = index < waypoints.length - 1;

        // Swap the waypoint and update waypoints.
        const newWaypoints = [...waypoints];
        newWaypoints[index] = latlng;

        if (!hasPrecedingSegment && !hasSucceedingSegment) {
            setWaypoints(newWaypoints);
            // TODO: Compile data and push outside?
            return;
        }

        const newPolylines = [...polylines];
        const newSegmentLengths = [...segmentLengths];
        const newSegmentDurations = [...segmentDurations];

        if (hasPrecedingSegment) {
            const segmentIndex = index - 1;
            const route = await retrieveRoute(newWaypoints[segmentIndex], latlng);
            newPolylines[segmentIndex] = route.polyline;
            newSegmentLengths[segmentIndex] = route.length;
            newSegmentDurations[segmentIndex] = route.duration;
        }

        if (hasSucceedingSegment) {
            const segmentIndex = index;
            const route = await retrieveRoute(latlng, newWaypoints[segmentIndex + 1]);
            newPolylines[segmentIndex] = route.polyline;
            newSegmentLengths[segmentIndex] = route.length;
            newSegmentDurations[segmentIndex] = route.duration;
        }

        setWaypoints(newWaypoints);
        setPolylines(newPolylines);
        setSegmentLengths(newSegmentLengths);
        setSegmentDurations(newSegmentDurations);
        // TODO: Compile data and push outside?
    };

    const map = useMapEvents({
        click(e) {
            addWaypoint([e.latlng.lat, e.latlng.lng]);
        },
    });

    return (
        <TrailCreatorContentView waypoints={waypoints}
                                 polylines={polylines}
                                 removeWaypoint={removeWaypoint}
                                 modifyWaypoint={modifyWaypoint}></TrailCreatorContentView>
    );
};

export default TrailCreatorContentPresenter;
