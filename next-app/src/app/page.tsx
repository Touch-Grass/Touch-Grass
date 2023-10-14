import React from "react";
import ButtonView from "@/components/view/button/button.view";
import { ButtonType } from "@/components/view/button/button.view";
import "./page.scss";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";
import FooterPresenter from "@/components/presenter/footer/footer.presenter";
import MainPagePresenter from "@/components/presenter/main-page/main-page.presenter";

export default function Home() {
    return (
        <>
            <NavbarPresenter fixed={true}/>
            <main className={"hero"}>
                <MainPagePresenter/>
                <FooterPresenter/>
            </main>
        </>
    );
}
