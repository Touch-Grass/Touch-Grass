"use client";

import React, {ChangeEvent, useState} from "react";
import AddTrailPageView from "@/components/view/add-trail-page/add-trail-page.view";
import { ITrail, ICompiledGeoTrail } from "@/models/shared/trail/trail.interface";
import { TrailValidation } from "@/models/shared/trail/trail.validation";
import { useRouter } from "next/navigation";
import { HttpStatus } from "@/utils/HTTPError/HTTPErrorUtils";

const AddTrailPagePresenter: React.FC = props => {

    const router = useRouter();
    const [errorString, setErrorString] = useState<string>("");
    const [ValidatingState, setValidatingState] = useState<boolean>(false);

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
            setImageURL(data.url ?? "");
        } catch (error) {
            console.error("something went wrong, check your console.");
        }
    };

    const refactorDifficulty = () => {
        if(difficulty == "Easy")
            return 0.2;
        if(difficulty == "Medium")
            return 0.4;
        if(difficulty == "Hard")
            return 0.6;
        if(difficulty == "Super")
            return 0.8;
        if(difficulty == "Extreme")
            return 1.0;

        return -1;
    };

    const formHandler = async () => {

        //Build Trail object
        const newDifficulty = refactorDifficulty();
        const imageArray = [imageURL];
        const trail : Partial<ITrail> = {
            name: name,
            description: description,
            difficulty: newDifficulty,
            terrain: terrain,
            location: location,
            searchLocation: location,
            images: imageArray,
            waypoints: geoTrail.waypoints,
            polyline: geoTrail.polyline,
            length: geoTrail.length,
            duration: geoTrail.duration
        };

        setValidatingState(true);
        try {
            //Validate trail
            TrailValidation.validateTrail(trail);

            //Send it to server
            const response = await fetch("/api/trails", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(trail),
            });

            if (!response.ok) {
                if(response.status == HttpStatus.UNAUTHORIZED){
                    router.push("/login");
                }
                const errorData = await response.json();
                setErrorString(errorData.error);
            } else {
                //Refresh components and push main page
                const data = await response.json();
                router.push("/trail/"+data.insertedTrailId);
            }
        } catch (error: any) {
            const errorString = error.toString();
            setErrorString(errorString);
        } finally {
            setValidatingState(false);
        }

    };

    const done = !!name.trim() &&
        !!location.trim() &&
        !!description.trim() && !!terrain.trim() && !!difficulty.trim() &&
        geoTrail.waypoints.length >= 4 && !!imageURL.trim();

    return (
        <AddTrailPageView errorString={errorString}
                          validatingState={ValidatingState}
                          onFileChange={onFileChange}
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
                          send={formHandler}
                          imageURL={imageURL}></AddTrailPageView>
    );
};

export default AddTrailPagePresenter;
