import { ITrail } from "./trail.interface";
import { Trail } from "@/models/server/trail/trail";

export namespace TrailValidation {
    export function validateName(name: string) {
        const namePattern = /^[A-Za-z0-9\s\-',.äöåÄÖÅ]{2,30}$/;
        if (!namePattern.test(name))
            throw new Error("Invalid trail name");
    }

    export function validateDescription(description: string) {
        const descriptionPattern = /^[A-Za-z0-9\s!@#$%^&*()-_+=,.;:'"<>?/\\[\]{}`~äöåÄÖÅ]*$/;
        if (!descriptionPattern.test(description))
            throw new Error("Invalid trail description");
    }

    export function validateWaypoints(waypoints: number[]) {
        if (waypoints.length < 4)
            throw new Error("Not enough waypoints");
    }

    export function validatePolylines(polylines: number[]) {
        if (polylines.length < 4)
            throw new Error("Invalid polylines");
    }

    export function validateDifficulty(difficulty: number) {
        if (difficulty < 0 || difficulty > 1)
            throw new Error("Invalid trail difficulty");
    }

    export function validateLength(length: number) {
        if (length < 0)
            throw new Error("Invalid trail length");
    }

    export function validateTerrain(terrain: string) {
        const terrainPattern = /^[A-Za-z0-9\s\-',.äöåÄÖÅ]{2,30}$/;
        if (!terrainPattern.test(terrain))
            throw new Error("Invalid trail terrain");
    }

    export function validateDuration(duration: number) {
        if (duration < 0)
            throw new Error("Invalid trail duration");
    }

    export function validateLocation(location: string) {
        const locationPattern = /^[A-Za-z0-9\s\-',.äöåÄÖÅ]{2,30}$/;
        if (!locationPattern.test(location))
            throw new Error("Invalid trail location");
    }

    export function validateImages(images: string[]) {
        const validExtensions = [".jpg", ".jpeg", ".png", ".gif,", ".bmp"];

        images.map((image : string) => {
            if (typeof image !== "string")
                throw new Error("Invalid image type");
            if (image.length < 1)
                throw new Error("Image can't be an empty string");
            if(!image.includes("."))
                throw new Error("Image lacks extension");

            const fileExtension = image.toLowerCase().slice(image.lastIndexOf("."));
            if (!validExtensions.includes(fileExtension)) {
                throw new Error("Invalid image extension");
            }
        });
    }

    export function validateSearchLocation(searchLocation: string) {
        const searchLocationPattern = /^[A-Za-z0-9\s\-',.äöåÄÖÅ]{2,30}$/;
        if (!searchLocationPattern.test(searchLocation))
            throw new Error("Invalid trail search location");
    }


    export function validateTrail(trail: Partial<ITrail> | Trail){
        if (!trail.name)
            throw new Error("Unexistent trail name");
        if (typeof trail.name !== "string")
            throw new Error("Invalid trail name type");
        validateName(trail.name);

        if (!trail.description)
            throw new Error("Unexistent trail description");
        if (typeof trail.description !== "string")
            throw new Error("Invalid trail description type");
        validateDescription(trail.description);

        if (!trail.waypoints)
            throw new Error("Unexistent trail waypoints");
        if (!Array.isArray(trail.waypoints) || !trail.waypoints.every(item => typeof item === "number")) {
            throw new Error("Invalid trail waypoints type");
        }
        validateWaypoints(trail.waypoints);

        if (!trail.polyline)
            throw new Error("Unexistent trail polylines");
        if (!Array.isArray(trail.polyline) || !trail.polyline.every(item => typeof item === "number")) {
            throw new Error("Invalid trail polyline type");
        }
        validatePolylines(trail.polyline);

        if (!trail.difficulty)
            throw new Error("Unexistent trail difficulty");
        if (typeof trail.difficulty !== "number")
            throw new Error("Invalid trail difficulty type");
        validateDifficulty(trail.difficulty);

        if (!trail.terrain)
            throw new Error("Unexistent trail terrain");
        if (typeof trail.terrain !== "string")
            throw new Error("Invalid trail terrain type");
        validateTerrain(trail.terrain);

        if (!trail.location)
            throw new Error("Unexistent trail location");
        if (typeof trail.location !== "string")
            throw new Error("Invalid trail location type");
        validateLocation(trail.location);

        if (!trail.images)
            throw new Error("Unexistent trail images");
        if (!Array.isArray(trail.images) || !trail.images.every(item => typeof item === "string")) {
            throw new Error("Invalid trail image type");
        }
        validateImages(trail.images);

        if (!trail.searchLocation)
            throw new Error("Unexistent trail search location");
        if (typeof trail.searchLocation !== "string")
            throw new Error("Invalid trail search location type");
        validateSearchLocation(trail.searchLocation);
    }
}
