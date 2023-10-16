import React from "react";
import TrailPagePresenter from "@/components/presenter/trail-page/trail-page.presenter";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";
import FooterView from "@/components/view/footer/footer.view";

interface ServerSideProps {
    params?: {
        slug?: string;
    }
}
export const dynamic = "force-dynamic";
export default async function TrailPage(props: ServerSideProps) {
    const slug = props?.params?.slug ?? null;

    return (
        <>
            <NavbarPresenter fixed={false}/>
            <TrailPagePresenter trailId={slug}/>
            <FooterView></FooterView>
        </>
    );
}
