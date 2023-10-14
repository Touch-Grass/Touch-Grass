import React from "react";
import TrailPagePresenter from "@/components/presenter/trail-page/trail-page.presenter";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";

interface ServerSideProps {
    params?: {
        slug?: string;
    }
}

export default async function TrailPage(props: ServerSideProps) {
    const slug = props?.params?.slug ?? null;

    return (
        <>
            <NavbarPresenter fixed={false}/>
            <TrailPagePresenter trailId={slug}/>
        </>
    );
}
