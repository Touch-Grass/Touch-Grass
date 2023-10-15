import React from "react";
import Image from "next/image";
import "./search-result.view.scss";
import {PopulatedServerTrailWithID} from "@/models/server/trail/trail";
import DifficultyMeterView from "@/components/view/difficulty-meter/difficulty-meter.view";
import UserRepresentationView from "@/components/view/user-representation/user-representation.view";
import moment from "moment/moment";

interface SearchResultViewProps {
    trail: PopulatedServerTrailWithID;
}

const SearchResultView: React.FC<SearchResultViewProps> = (props) => {
    const duration = moment.duration(props.trail.duration, "minutes");

    return (
        <div className="search-result-container">
            <div className="search-result-image-container">
                <img
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
                        <span>{props.trail.length.toFixed(1)} km</span>
                    </div>
                    <div className={"search-result-extra"}>
                        <span>Duration</span>
                        <span>{Math.floor(duration.hours())}h {Math.round(duration.minutes())}m</span>
                    </div>
                    <div className={"search-result-extra"}>
                        <span>Terrain</span>
                        <span>{props.trail.terrain}</span>
                    </div>
                </div>
                <div className={"search-result-user"}>
                    <UserRepresentationView userName={props.trail.creator.name + " " + props.trail.creator.surname}></UserRepresentationView>
                </div>
            </div>
        </div>
    );
};

export default SearchResultView;
