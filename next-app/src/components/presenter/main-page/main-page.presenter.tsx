"use client";

import React, {useState} from "react";
import { IUser } from "@/models/shared/user/user.interface";
import { ITrail } from "@/models/shared/trail/trail.interface";
import HeroSearchSection from "@/components/view/heroSearchSection/heroSearchSection.view";
import FeaturedTrailsSection from "@/components/view/featuredTrailsSection/featuredTrailsSection.view";
import StatisticsSection from "@/components/view/statisticsSection/statisticsSection.view";

interface MainPagePresenterProps {}

const userMock: IUser = {
    username: "user1",
    name: "John",
    surname: "Doe",
    email: "user1@example.com",
    password: "password1"
};

const trailsFeaturedMock: ITrail[]  = [
    {
        name: "Trail 1",
        description: "Description 1",
        polyline: [1, 2, 3],
        waypoints: [4, 5, 6],
        difficulty: 1,
        length: 5,
        terrain: "Terrain 1",
        duration: 60,
        location: "Location 1",
        images: ["image1.jpg", "image2.jpg"],
        creator: userMock,
    },
    {
        name: "Trail 2",
        description: "Description 2",
        polyline: [7, 8, 9],
        waypoints: [10, 11, 12],
        difficulty: 2,
        length: 8,
        terrain: "Terrain 2",
        duration: 90,
        location: "Location 2",
        images: ["image3.jpg", "image4.jpg"],
        creator: userMock,
    },
    {
        name: "Trail 3",
        description: "Description 3",
        polyline: [7, 8, 9],
        waypoints: [10, 11, 12],
        difficulty: 2,
        length: 8,
        terrain: "Terrain 3",
        duration: 90,
        location: "Location 3",
        images: ["image5.jpg"],
        creator: userMock,
    }
];

const MainPagePresenter:  React.FC<MainPagePresenterProps> = props => {
    return(
        <>
            <HeroSearchSection/>
            <FeaturedTrailsSection trailsFeatured={trailsFeaturedMock}/>
            <StatisticsSection/>
        </>
    );
};

export default MainPagePresenter;