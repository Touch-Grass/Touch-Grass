"use client";

import React, {useState} from "react";
import dynamic from "next/dynamic";
import {ICompiledGeoTrail} from "@/models/shared/trail/trail.interface";
import "./add-trail-page.view.scss";

const LazyLoadedTrailCreatorView = dynamic(
    () => import("../trail-creator/trail-creator.view"),
    {
        ssr: false,
        loading: () => (<div>loading...</div>), // TODO: Loading spinner
    }
);


const AddTrailPageView: React.FC = props => {
    // ## FORM FIELDS
    // Name
    // Description
    // Terrain -> Dropdown?
    // Location
    // ## SPECIAL CONTROLS
    // Difficulty Radio Buttons
    // Image Upload
    // Map
    // ## Automatically generated
    // Perhaps Location? Nearest city!
    // Polyline
    // Waypoints
    // SearchLocation
    // Creator
    // Duration
    // Lenth

    const [geoTrail, setGeoTrail] = useState<ICompiledGeoTrail>({
        waypoints: [], polyline: [], length: 0, duration: 0
    });

    const [name, setName] = useState<string>("");


    return (
        <div className={"add-trail-page-full-width-container"}>

            <div className={"add-trail-page-boxed-container"}>
                <input type={"text"} value={name} onChange={e => setName(e.target.value)}/>
                <div className={"info"}>
                    Length: {geoTrail.length.toFixed(1)}km
                </div>
                <LazyLoadedTrailCreatorView onUpdate={setGeoTrail}></LazyLoadedTrailCreatorView>
            </div>
        </div>
    );
};

export default AddTrailPageView;
