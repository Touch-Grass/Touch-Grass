import React from "react";
import Image from "next/image";
import "./trail.scss";
import { IUser } from "@/models/shared/user/user.interface";
import { ITrail } from "@/models/shared/trail/trail.interface";
import { ServerTrailWithID } from "@/models/server/trail/trail";

interface Trailprops {
    trail:ServerTrailWithID;
}

const TrailComponent: React.FC<Trailprops> = (props) => {
    return (
      <>
        <div className="trail-container">
            <div className="trail-image-text-placement">
              <div className="trail-image-container">
                <Image
                    src={props.trail.images[0]}
                    alt="image of the trail"
                    className="trail-image"
                    width={100}
                    height={100}
                />
                <button className="trail-heart"><Image src="/Heart.svg" alt="heart" width={25}height={25}/></button>
                </div>
                <div className="trail-text">
                    <h2>{props.trail.name}</h2>
                    <div className="trail-description">{props.trail.description}</div>
                    <div className="trail-difficulty">
                        Difficulty{" "}
                        <div className="trail-difficulty-container">
                            <div className="trail-difficulty-meter" />
                            <div
                                className="trail-difficulty-white"
                                style={{ width: (47.5 * props.trail.difficulty) }}
                            />
                        </div>
                    </div>
                    <div className="trail-extras">
                        <div><strong>Length</strong> {props.trail.length}</div>
                        <div><strong>Terrain</strong> {props.trail.terrain}</div>
                        <div className="trail-user"> </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default TrailComponent;
