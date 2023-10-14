import React from "react";
import dbConnect from "@/lib/dbConnection";
import {ServerTrailWithID, TrailModel} from "@/models/server/trail/trail";
import {redirect} from "next/navigation";
import "./page.scss";
import TrailComponent from "@/components/view/trail/trail";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";

interface ServerSideProps {
    searchParams?: {
        l?: string; // Location.
    };
}

export default async function Search(props: ServerSideProps) {
    // GUARD: If the user does not supply a location to search for, we bail to the home page!
    const userRequestedLocation = props.searchParams?.l;
    if (!userRequestedLocation) {
        redirect("/");
    }

    // Ensure that the database connection is available.
    await dbConnect();

    // Query the resulting trails from our database.
    let trails: ServerTrailWithID[] = [];
    try {
        trails = await TrailModel.findByLocation(userRequestedLocation, true);
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return (
        <>
            <NavbarPresenter fixed={false}/>
            <div className="search-container">
                <div className="search-title">
                    <h1>{trails.length} trails in {userRequestedLocation} </h1>
                    <div className="search-title-space">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                            <path d="M3 7H15V5H3M0 0V2H18V0M7 12H11V10H7V12Z" fill="black"/>
                        </svg>
                        <input className="search-input" placeholder={userRequestedLocation}/>
                    </div>
                </div>
                {trails.map((trail) => (
                    <TrailComponent key={trail._id.toString()} trail={trail}/>
                ))}
            </div>
        </>
    );
}
