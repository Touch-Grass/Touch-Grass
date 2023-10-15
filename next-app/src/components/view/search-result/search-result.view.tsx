import React from "react";
import Image from "next/image";
import "./search-result.view.scss";
import {ServerTrailWithID} from "@/models/server/trail/trail";
import DifficultyMeterView from "@/components/view/difficulty-meter/difficulty-meter.view";

interface SearchResultViewProps {
    trail: ServerTrailWithID;
}

const SearchResultView: React.FC<SearchResultViewProps> = (props) => {
    return (
        <div className="search-result-container">
            <div className="search-result-image-container">
                <Image
                    src={props.trail.images[0]}
                    alt="image of the trail"
                    className={"search-result-image"}
                    width={1000}
                    height={1000}
                />
            </div>
            <div className="search-result-content">
                <div className={"search-result-title"}>{props.trail.name}</div>
                <div className="search-result-description">{props.trail.description}</div>
                <div className="search-result-difficulty">
                    <span>Difficulty</span>
                    <div className={"search-result-difficulty-wrapper"}>
                        <DifficultyMeterView difficulty={props.trail.difficulty}></DifficultyMeterView>
                    </div>
                </div>
                <div className="search-result-extras">
                    <div className={"search-result-extra"}>
                        <span>Length</span>
                        <span>{props.trail.length} km</span>
                    </div>
                    <div className={"search-result-extra"}>
                        <span>Terrain</span>
                        <span>{props.trail.terrain}</span>
                    </div>
                    <div className="search-result-user"></div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultView;
