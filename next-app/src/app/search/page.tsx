import React from "react";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";
import SearchPagePresenter from "@/components/presenter/search-page/search-page.presenter";
import FooterView from "@/components/view/footer/footer.view";

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
            <FooterView></FooterView>
        </>
    );
}
