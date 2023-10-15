"use client";

import React, {ChangeEvent} from "react";
import dynamic from "next/dynamic";
import {ICompiledGeoTrail} from "@/models/shared/trail/trail.interface";
import "./add-trail-page.view.scss";
import moment from "moment";
import ButtonView, {ButtonType} from "@/components/view/button/button.view";
import Image from "next/image";

interface AddTrailPageViewProps {
    geoTrail: ICompiledGeoTrail;
    name: string;
    location: string;
    description: string;
    terrain: string;
    difficulty: string;
    imageURL: string;
    done: boolean;

    setGeoTrail: (e: ICompiledGeoTrail) => void;
    setName: (e: string) => void;
    setLocation: (e: string) => void;
    setDescription: (e: string) => void;
    setTerrain: (e: string) => void;
    setDifficulty: (e: string) => void;

    onFileChange: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
    send: () => void;
}

const LazyLoadedTrailCreatorView = dynamic(
    () => import("../trail-creator/trail-creator.view"),
    {
        ssr: false,
        loading: () => (<div>loading...</div>), // TODO: Loading spinner
    }
);


const AddTrailPageView: React.FC<AddTrailPageViewProps> = props => {
    const {
        geoTrail,
        name,
        location,
        description,
        terrain,
        difficulty,
        imageURL,
        done,
        setGeoTrail,
        setName,
        setLocation,
        setDescription,
        setTerrain,
        setDifficulty,
        onFileChange,
        send
    } = props;

    const duration = moment.duration(geoTrail.duration, "minutes");
    const length = geoTrail.length.toFixed(1);

    return (
        <div className={"add-trail-page-full-width-container"}>
            <div className={"add-trail-page-boxed-container"}>
                <div className={"add-trail-page-header"}>Add your own trail</div>

                <div className={"add-trail-page-fields"}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Name"
                           value={name} onChange={e => setName(e.target.value)}/>

                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" placeholder="e.g. Stockholm"
                           value={location} onChange={e => setLocation(e.target.value)}/>

                    <label htmlFor="description">Description</label>
                    <textarea name="description" placeholder="Description"
                              value={description} onChange={e => setDescription(e.target.value)}/>

                    <label htmlFor="terrain">Terrain type</label>
                    <select name="terrain" placeholder="Terrain"
                            value={terrain} onChange={e => setTerrain(e.target.value)}>
                        <option disabled value={""}>Select the terrain type</option>
                        <option value={"Forest"}>Forest</option>
                        <option value={"Rocks"}>Rocks</option>
                        <option value={"Swamp"}>Swamp</option>
                        <option value={"Desert"}>Desert</option>
                    </select>

                    <label htmlFor="difficulty">Difficulty</label>
                    <select name="difficulty" placeholder="difficulty"
                            value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                        <option disabled value={""}>Select the difficulty</option>
                        <option value={"Easy"}>Easy</option>
                        <option value={"Medium"}>Medium</option>
                        <option value={"Hard"}>Hard</option>
                        <option value={"Super"}>Super Hard</option>
                        <option value={"Extreme"}>Legendary</option>
                    </select>

                    <label>Image</label>
                    <input
                        type="file"
                        onChange={onFileChange}
                        accept="image/png, image/jpeg"
                    />
                    <div className={"add-trail-page-image-display"}>
                        {!!imageURL ? (<Image src={imageURL} width={1000} height={1000}
                                              alt={"Your image"}></Image>) : (<span>No image selected</span>)}
                    </div>
                </div>
                <div className={"add-trail-page-creator-section"}>
                    <div className={"add-trail-page-creator-section-title"}>Plan your route</div>
                    <div className={"add-trail-page-creator"}>
                        <div className={"add-trail-page-creator-sidebar"}>
                            <div className={"add-trail-page-creator-stats"}>
                                <div className={"add-trail-page-creator-stat"}>
                                    <div>Current Length</div>
                                    <div>{length}km</div>
                                </div>
                                <div className={"add-trail-page-creator-stat"}>
                                    <div>Current Duration</div>
                                    <div>{Math.floor(duration.hours())}h {Math.round(duration.minutes())}m</div>
                                </div>
                            </div>
                            <div className={"add-trail-page-creator-explanations"}>
                                <div><span>Click</span> to add a new waypoint.</div>
                                <div><span>Right-click</span> to remove a waypoint.</div>
                                <div><span>Drag a waypoint</span> to move it around.</div>
                                <div><span>Scroll</span> to zoom.</div>
                                <div><span>Drag the map</span> to move.</div>
                                <div><span>Stay</span> within Sweden.</div>
                            </div>
                        </div>
                        <div className={"add-trail-page-creator-container"}>
                            {<LazyLoadedTrailCreatorView onUpdate={setGeoTrail}></LazyLoadedTrailCreatorView>}
                        </div>
                    </div>
                </div>
                <div className={"add-trail-page-submit-section"}>
                    <ButtonView disabled={!done} text={"Submit"} type={ButtonType.DEFAULT}></ButtonView>
                </div>
            </div>
        </div>
    );
};

export default AddTrailPageView;
