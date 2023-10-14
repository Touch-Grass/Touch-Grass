import React from "react";
import {IUser} from "@/models/shared/user/user.interface";
import {ITrail} from "@/models/shared/trail/trail.interface";
import MainPageView from "@/components/view/main-page/main-page.view";
import {TrailsService} from "@/services/trails/trails.service";
import {PopulatedServerTrailWithID, ServerTrailWithID, Trail} from "@/models/server/trail/trail";
import {UserService} from "@/services/users/service";
import dbConnect from "@/lib/dbConnection";

interface MainPagePresenterProps {}

const userMock: IUser = {
    username: "user1",
    name: "John",
    surname: "Doe",
    email: "user1@example.com",
    password: "password1"
};

const MainPagePresenter: React.FC<MainPagePresenterProps> = async (props) => {
    await dbConnect();

    // TODO: We might want to move this into a StatisticsPresenter, however, that means that we need to move the animations
    //  away from main page view, because this stuff cannot happen as a child of a client component.
    const users = await UserService.countUsers();
    const locations = await TrailsService.countLocations();
    const trails = await TrailsService.countTrails();
    const stats = {users, locations, trails};

    const featuredTrails: ServerTrailWithID[] = await TrailsService.findRandomFeatured();

    return (
        <MainPageView featuredTrails={featuredTrails} statistics={stats}></MainPageView>
    );
};

export default MainPagePresenter;
