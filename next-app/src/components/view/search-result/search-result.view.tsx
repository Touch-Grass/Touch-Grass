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
            <div className="search-result-image-text-placement">
                <div className="search-result-image-container">
                    <Image
                        src={props.trail.images[0]}
                        alt="image of the trail"
                        className={"search-result-image"}
                        width={100}
                        height={100}
                    />
                    <button className="search-result-heart"><Image src="/Heart.svg" alt="heart" width={25} height={25}/>
                    </button>
                </div>
                <div className="search-result-text">
                    <h2>{props.trail.name}</h2>
                    <div className="search-result-description">{props.trail.description}</div>
                    <div className="search-result-difficulty">
                        Difficulty{" "}
                        <DifficultyMeterView difficulty={props.trail.difficulty}></DifficultyMeterView>
                    </div>
                    <div className="search-result-extras">
                        <div><strong>Length</strong> {props.trail.length}</div>
                        <div><strong>Terrain</strong> {props.trail.terrain}</div>
                        <div className="search-result-user"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultView;
