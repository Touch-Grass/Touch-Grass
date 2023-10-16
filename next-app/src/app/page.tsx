import React from "react";
import "./page.scss";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";
import MainPagePresenter from "@/components/presenter/main-page/main-page.presenter";
import FooterView from "@/components/view/footer/footer.view";
import LoadingLayoutPresenter from "@/components/presenter/loading-layout/loading-layout.presenter";

// Unfortunately, since we display dynamic data in the statistics section,
// we cannot have the home page render statically.
// This would break our build with a mongo db timeout.
export const dynamic = "force-dynamic";

export default async function Home() {
    return (
        <>
            <NavbarPresenter fixed={true}/>
            <main className={"hero"}>
                <MainPagePresenter/>
                <FooterView/>
            </main>
        </>
    );
}
