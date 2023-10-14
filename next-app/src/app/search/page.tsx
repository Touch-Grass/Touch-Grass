import React from "react";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";
import SearchPagePresenter from "@/components/presenter/search-page/search-page.presenter";
import FooterPresenter from "@/components/presenter/footer/footer.presenter";

interface ServerSideProps {
    searchParams?: {
        l?: string; // Location.
    };
}
export const dynamic = "force-dynamic";
export default async function Search(props: ServerSideProps) {
    const userRequestedLocation = props.searchParams?.l ?? null;

    return (
        <>
            <NavbarPresenter fixed={false}/>
            <SearchPagePresenter location={userRequestedLocation}></SearchPagePresenter>
            <FooterPresenter></FooterPresenter>
        </>
    );
}
