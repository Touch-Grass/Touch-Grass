import LoginPresenter from "@/components/presenter/login/login.presenter";
import "./page.scss";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";
import React from "react";
export const dynamic = "force-dynamic";
export default async function Login() {
    return(
        <div className={"login-page-wrapper"}>
            <NavbarPresenter fixed={true}/>
            <main className='process-form'>
                <LoginPresenter/>
            </main>
        </div>
    );
}
