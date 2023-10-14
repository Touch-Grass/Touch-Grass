import React from "react";
import "./page.scss";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";
import FooterPresenter from "@/components/presenter/footer/footer.presenter";
import MainPagePresenter from "@/components/presenter/main-page/main-page.presenter";

export default async function Home() {
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
