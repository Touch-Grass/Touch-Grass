import React from "react";
import "./page.scss";
import EditAccountPresenter from "@/components/presenter/edit-account-page/edit-account-page.presenter";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";
export const dynamic = "force-dynamic";
export default async function EditAccount() {
  return(
    <>
      <main>
        <NavbarPresenter fixed={false}/>
        <EditAccountPresenter/>
      </main>
    </>
  );
}
