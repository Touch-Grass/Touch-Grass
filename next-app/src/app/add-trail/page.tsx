import React from "react";
import "./page.scss";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";
import FooterView from "@/components/view/footer/footer.view";
import AddTrailServerPresenter from "@/components/presenter/add-trail-page/add-trail-page.server-presenter";

export const dynamic = "force-dynamic";
export default function AddTrail() {
    return (
        <div className={"register-page-wrapper"}>
            <NavbarPresenter fixed={false}/>
            <main>
                <AddTrailServerPresenter/>
            </main>
            <FooterView/>
        </div>
    );
}
