import React from "react";
import "./page.scss";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";
import AddTrailPagePresenter from "@/components/presenter/add-trail-page/add-trail-page.presenter";

export const dynamic = "force-dynamic";
export default function AddTrail() {
    return (
        <div className={"register-page-wrapper"}>
            <NavbarPresenter fixed={false}/>
            <main>
                <AddTrailPagePresenter></AddTrailPagePresenter>
            </main>
        </div>
    );
}
