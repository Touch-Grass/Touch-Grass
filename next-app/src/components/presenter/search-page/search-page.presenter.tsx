import React from "react";
import {redirect} from "next/navigation";
import dbConnect from "@/lib/dbConnection";
import {Nullable} from "@/models/shared/utility.types";
import {PopulatedServerTrailWithID} from "@/models/server/trail/trail";
import SearchPageView from "@/components/view/search-page/search-page.view";
import {TrailsService} from "@/services/trails/trails.service";

interface SearchPagePresenterProps {
    location: Nullable<string>;
}

const SearchPagePresenter: React.FC<SearchPagePresenterProps> = async props => {
    // GUARD: If the user does not supply a location to search for, we bail out to the main page.
    const location = props.location;
    if (!location) {
        redirect("/");
    }

    // Ensure that the database connection is available.
    await dbConnect();

    // Query the resulting trails from our database.
    let trails: PopulatedServerTrailWithID[] = [];
    try {
        trails = await TrailsService.findByLocation(location, true);
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return (
        <SearchPageView location={location} trails={trails}></SearchPageView>
    );
};

export default SearchPagePresenter;
