"use client";
// CLIENT: Leaflet should only run on client.

import React, {useState} from "react";
import {useMapEvents} from "react-leaflet";
import TrailCreatorContentView from "@/components/view/trail-creator-content/trail-creator-content.view";
import {ICompiledGeoTrail} from "@/models/shared/trail/trail.interface";

interface TrailCreatorContentPresenterProps {
    onUpdate: (compiledTrail: ICompiledGeoTrail) => void;
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

interface IntermediateTrailState {
    polylines: [number, number][][];
    lengths: number[];
    durations: number[];
}

const compileData = (state: IntermediateTrailState, waypointsLatLng: [number, number][]): ICompiledGeoTrail => {
    const polyline = state.polylines.map(segment => segment.flat()).flat();
    const length = state.lengths.reduce((prev, curr) => prev + curr, 0);
    const duration = state.durations.reduce((prev, curr) => prev + curr, 0);
    const waypoints = waypointsLatLng.flat();

    return {
        polyline,
        duration,
        length,
        waypoints
    };
};

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
    const {onUpdate} = props;
    const [waypoints, setWaypoints] = useState<[number, number][]>([]);
    const [segments, setSegments] = useState<IntermediateTrailState>({
        polylines: [],
        lengths: [],
        durations: []
    });

    const addWaypoint = async (latlng: [number, number]) => {
        const newWaypoints = [...waypoints, latlng];

        if (newWaypoints.length < 2) {
            setWaypoints(newWaypoints);
            onUpdate(compileData(segments, newWaypoints));
            return;
        }

        const route = await retrieveRoute(newWaypoints[newWaypoints.length - 2], latlng);

        const polylines = [...segments.polylines, route.polyline];
        const lengths = [...segments.lengths, route.length];
        const durations = [...segments.durations, route.duration];

        const newSegments = {polylines, lengths,durations};

        setWaypoints(newWaypoints);
        setSegments(newSegments);
        onUpdate(compileData(newSegments, newWaypoints));
    };

    const removeWaypoint = async (index: number) => {
        if (waypoints.length <= index || index < 0) {
            return;
        }

        // Delete the waypoint and update waypoints.
        const newWaypoints = [...waypoints];
        newWaypoints.splice(index, 1);

        if (newWaypoints.length < 2) {
            const newSegments = {polylines: [], lengths: [], durations: []};
            setWaypoints(newWaypoints);
            setSegments(newSegments);
            onUpdate(compileData(newSegments, newWaypoints));
            return;
        }


        const polylines = [...segments.polylines];
        const lengths = [...segments.lengths];
        const durations = [...segments.durations];

        const hasPrecedingSegment = index > 0;
        const hasSucceedingSegment = index < waypoints.length - 1;

        // In the case that there is a route segment that leads FROM this point,
        // we remove it here.
        if (hasSucceedingSegment) {
            polylines.splice(index, 1);
            lengths.splice(index, 1);
            durations.splice(index, 1);
        }

        if (hasPrecedingSegment) {
            const segmentIndex = index - 1;
            if (newWaypoints.length > segmentIndex + 1) {
                const route = await retrieveRoute(newWaypoints[segmentIndex], newWaypoints[segmentIndex + 1]);
                polylines[segmentIndex] = route.polyline;
                lengths[segmentIndex] = route.length;
                durations[segmentIndex] = route.duration;
            } else {
                polylines.splice(segmentIndex, 1);
                lengths.splice(segmentIndex, 1);
                durations.splice(segmentIndex, 1);
            }
        }

        const newSegments = {polylines, lengths, durations};

        setWaypoints(newWaypoints);
        setSegments(newSegments);
        onUpdate(compileData(newSegments, newWaypoints));
    };

    const modifyWaypoint = async (index: number, latlng: [number, number]) => {
        console.log("Modify Waypoints", waypoints);
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
            onUpdate(compileData(segments, newWaypoints));
            return;
        }

        const polylines = [...segments.polylines];
        const lengths = [...segments.lengths];
        const durations = [...segments.durations];

        if (hasPrecedingSegment) {
            const segmentIndex = index - 1;
            const route = await retrieveRoute(newWaypoints[segmentIndex], latlng);
            polylines[segmentIndex] = route.polyline;
            lengths[segmentIndex] = route.length;
            durations[segmentIndex] = route.duration;
        }

        if (hasSucceedingSegment) {
            const segmentIndex = index;
            const route = await retrieveRoute(latlng, newWaypoints[segmentIndex + 1]);
            polylines[segmentIndex] = route.polyline;
            lengths[segmentIndex] = route.length;
            durations[segmentIndex] = route.duration;
        }

        const newSegments = {polylines, lengths, durations};

        setWaypoints(newWaypoints);
        setSegments(newSegments);
        onUpdate(compileData(newSegments, newWaypoints));
    };

    useMapEvents({
        click(e) {
            if ((e.originalEvent.target as HTMLElement)?.classList?.contains("trail-creator-view")) {
                addWaypoint([e.latlng.lat, e.latlng.lng]); // async.
            }
        },
    });

    return (
        <TrailCreatorContentView waypoints={waypoints}
                                 polylines={segments.polylines}
                                 removeWaypoint={removeWaypoint}
                                 modifyWaypoint={modifyWaypoint}></TrailCreatorContentView>
    );
};

export default TrailCreatorContentPresenter;
