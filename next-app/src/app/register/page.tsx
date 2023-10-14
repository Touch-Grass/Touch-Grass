import RegisterPresenter from "@/components/presenter/register/register.presenter";
import "./page.scss";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";
import React from "react";
export const dynamic = "force-dynamic";
export default async function Register() {
    return(
        <div className={"register-page-wrapper"}>
            <NavbarPresenter fixed={true}/>
            <main>
                <RegisterPresenter/>
            </main>
        </div>
    );
}
