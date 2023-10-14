import React from "react";
import dynamic from "next/dynamic";

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
    return (
        <div className={"add-trail-page-container"}>
            <LazyLoadedTrailCreatorView></LazyLoadedTrailCreatorView>
        </div>
    );
};

export default AddTrailPageView;
