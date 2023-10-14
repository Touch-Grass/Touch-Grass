import React from "react";
import {PopulatedServerTrailWithID} from "@/models/server/trail/trail";
import "./search-page.view.scss";
import SearchResultView from "@/components/view/search-result/search-result.view";

interface SearchPageViewProps {
    trails: PopulatedServerTrailWithID[];
    location: string;
}

const TrailPageView: React.FC<SearchPageViewProps> = props => {
    const {trails, location} = props;

    return (
        <div className={"search-page-wrapper"}>
            <div className="search-page-container">
                <div className={"search-page-title-row"}>
                    <div className={"search-page-title"}>{trails.length} trails in {location} </div>
                    <div className={"search-page-auxilliary-title-content"}>
                        <input className="search-page-input" value={location}/>
                    </div>
                </div>
                {trails.map((trail) => (
                    // FIX
                    <SearchResultView key={trail._id.toString()} trail={trail as any}/>
                ))}
            </div>
        </div>
    );
};

export default TrailPageView;
