"use client";

import React, {ChangeEvent, useState} from "react";
import AddTrailPageView from "@/components/view/add-trail-page/add-trail-page.view";
import {ICompiledGeoTrail} from "@/models/shared/trail/trail.interface";

const AddTrailPagePresenter: React.FC = props => {
    const [imageURL, setImageURL] = useState<string>("");

    const [geoTrail, setGeoTrail] = useState<ICompiledGeoTrail>({
        waypoints: [], polyline: [], length: 0, duration: 0
    });

    const [name, setName] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [terrain, setTerrain] = useState<string>("");
    const [difficulty, setDifficulty] = useState<string>("");

    const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const fileInput = e.target;

        if (!fileInput.files || fileInput.files.length === 0) {
            return;
        }

        const [file] = fileInput.files;

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("/api/image-upload", {
                method: "POST",
                body: formData,
            });

            const data: {url: string} = await res.json();
            setImageURL(data.url);
        } catch (error) {
            console.error("something went wrong, check your console.");
        }
    };

    const done = !!name.trim() &&
        !!location.trim() &&
        !!description.trim() && !!terrain.trim() && !!difficulty.trim() &&
        geoTrail.waypoints.length >= 4 && !!imageURL.trim();

    return (
        <AddTrailPageView onFileChange={onFileChange}
                          name={name}
                          location={location}
                          description={description}
                          geoTrail={geoTrail}
                          terrain={terrain}
                          difficulty={difficulty}
                          done={done}
                          setName={setName}
                          setLocation={setLocation}
                          setDescription={setDescription}
                          setTerrain={setTerrain}
                          setDifficulty={setDifficulty}
                          setGeoTrail={setGeoTrail}
                          send={() => {}}
                          imageURL={imageURL}></AddTrailPageView>
    );
};

export default AddTrailPagePresenter;
