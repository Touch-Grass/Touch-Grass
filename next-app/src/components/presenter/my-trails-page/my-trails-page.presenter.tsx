import React from "react";
import {redirect} from "next/navigation";
import dbConnect from "@/lib/dbConnection";
import {Nullable} from "@/models/shared/utility.types";
import {PopulatedServerTrailWithID} from "@/models/server/trail/trail";
import {TrailsService} from "@/services/trails/trails.service";
import {CookieService} from "@/services/cookies/service";
import {AuthService} from "@/services/auth/service";
import {IUser} from "@/models/shared/user/user.interface";
import MyTrailsPageView from "@/components/view/my-trails-page/my-trails-page.view";


const MyTrailsPagePresenter: React.FC = async props => {
    await dbConnect();

    // GUARD: Only allow logged-in users.
    let userInfo: Nullable<IUser> = null;

    try {
        const token = CookieService.getCookie();
        await AuthService.performValidation(token);
        userInfo = await AuthService.getUserInfoFromToken(token);

        if (userInfo == null) {
            redirect("/");
        }
    } catch (error: any) {
        redirect("/login");
    }

    // Query the resulting trails from our database.
    let trails: PopulatedServerTrailWithID[] = [];
    try {
        trails = await TrailsService.findByUserName(userInfo.username);
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return (
        <MyTrailsPageView trails={trails}></MyTrailsPageView>
    );
};

export default MyTrailsPagePresenter;
