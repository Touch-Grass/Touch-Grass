import React from "react";
import {IUser} from "@/models/shared/user/user.interface";
import {ITrail} from "@/models/shared/trail/trail.interface";
import MainPageView from "@/components/view/main-page/main-page.view";
import {TrailsService} from "@/services/trails/trails.service";
import {Trail} from "@/models/server/trail/trail";
import {UserService} from "@/services/users/service";

interface MainPagePresenterProps {}

const userMock: IUser = {
    username: "user1",
    name: "John",
    surname: "Doe",
    email: "user1@example.com",
    password: "password1"
};

const trailsFeaturedMock: [ITrail, ITrail, ITrail]  = [
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
        featured: true,
        createdDate: 0,
        searchLocation: "location 1"
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
        featured: true,
        createdDate: 0,
        searchLocation: "location 2"
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
        featured: true,
        createdDate: 0,
        searchLocation: "location 3"
    }
];

const MainPagePresenter: React.FC<MainPagePresenterProps> = async (props) => {

    // TODO: We might want to move this into a StatisticsPresenter, however, that means that we need to move the animations
    //  away from main page view, because this stuff cannot happen as a child of a client component.
    const users = await UserService.countUsers();
    const locations = await TrailsService.countLocations();
    const trails = await TrailsService.countTrails();
    const stats = {users, locations, trails};

    return (
        <MainPageView featuredTrails={trailsFeaturedMock} statistics={stats}></MainPageView>
    );
};

export default MainPagePresenter;
