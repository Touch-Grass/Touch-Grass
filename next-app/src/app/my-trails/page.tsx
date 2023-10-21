import React from "react";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";
import FooterView from "@/components/view/footer/footer.view";
import MyTrailsPagePresenter from "@/components/presenter/my-trails-page/my-trails-page.presenter";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function MyTrails() {
    return (
        <>
            <NavbarPresenter fixed={false}/>
            <MyTrailsPagePresenter></MyTrailsPagePresenter>
            <FooterView></FooterView>
        </>
    );
}
