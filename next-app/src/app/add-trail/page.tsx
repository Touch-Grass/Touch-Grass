import React from "react";
import "./page.scss";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";
import AddTrailPagePresenter from "@/components/presenter/add-trail-page/add-trail-page.presenter";
import FooterView from "@/components/view/footer/footer.view";

export const dynamic = "force-dynamic";
export default function AddTrail() {
    return (
        <div className={"register-page-wrapper"}>
            <NavbarPresenter fixed={false}/>
            <main>
                <AddTrailPagePresenter></AddTrailPagePresenter>
            </main>
            <FooterView/>
        </div>
    );
}
