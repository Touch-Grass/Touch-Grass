import React from "react";
import {PopulatedServerTrailWithID} from "@/models/server/trail/trail";
import "./search-page.view.scss";
import TrailComponent from "@/components/view/trail/trail";

interface SearchPageViewProps {
    trails: PopulatedServerTrailWithID[];
    location: string;
}

const TrailPageView: React.FC<SearchPageViewProps> = props => {
    const {trails, location} = props;

    return (
        <div className="search-container">
            <div className="search-title">
                <h1>{trails.length} trails in {location} </h1>
                <div className="search-title-space">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                        <path d="M3 7H15V5H3M0 0V2H18V0M7 12H11V10H7V12Z" fill="black"/>
                    </svg>
                    <input className="search-input" placeholder={location}/>
                </div>
            </div>
            {trails.map((trail) => (
                // FIX
                <TrailComponent key={trail._id.toString()} trail={trail as any}/>
            ))}
        </div>
    );
};

export default TrailPageView;
