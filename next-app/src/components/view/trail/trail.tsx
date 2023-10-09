import React from "react";
import Image from "next/image";
import "./trail.scss";
import { IUser } from "@/models/shared/user/user.interface";
import { ITrail } from "@/models/shared/trail/trail.interface";

interface Trailprops {
    name: string;
    description: string;
    polyline: number[];
    waypoints: number[];
    difficulty: number;
    length: number;
    terrain: string;
    duration: number;
    location: string;
    images: string[];
    creator: IUser;
}

const Trail: React.FC<Trailprops> = (props) => {
    return (
      <>
        <div className="trail-container">
            <div>
              <div>
                <Image
                    src={props.images[0]}
                    alt="image of the trail"
                    className="trail-image"
                    width={10}
                    height={10}
                />
                <button className="trail-heart"><Image src="../../../public/Heart.svg" alt="heart"/></button>
                </div>
                <div className="trail-text">
                    <h2>{props.name}</h2>
                    <div className="trail-description">{props.description}</div>
                    <div className="trail-difficulty">
                        Difficulty{" "}
                        <div className="trail-difficulty-container">
                            <div className="trail-difficulty-meter" />
                            <div
                                className="trail-difficulty-white"
                                style={{ width: (47.5 * props.difficulty) }}
                            />
                        </div>
                    </div>
                    <div className="trail-extras">
                        {" "}
                        <strong>Length</strong> {length}{" "}
                        <strong>Terrain</strong> {props.terrain}
                        <div className="trail-user"> </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Trail;
