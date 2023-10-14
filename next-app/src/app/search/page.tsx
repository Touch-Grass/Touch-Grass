import React from "react";
import "./page.scss";
import TrailComponent from "@/components/view/trail/trail.view";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";
import SearchPagePresenter from "@/components/presenter/search-page/search-page.presenter";

interface ServerSideProps {
    searchParams?: {
        l?: string; // Location.
    };
}

export default async function Search(props: ServerSideProps) {
    const userRequestedLocation = props.searchParams?.l ?? null;

    return (
        <>
            <NavbarPresenter fixed={false}/>
            <SearchPagePresenter location={userRequestedLocation}></SearchPagePresenter>
        </>
    );
}
