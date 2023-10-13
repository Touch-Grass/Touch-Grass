import React from "react";
import "./page.scss";
import EditAccountPresenter from "@/components/presenter/edit-account-page/edit-account-page.presenter";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";

export default async function EditAccount() {
  return(
    <>
      <main>
        <NavbarPresenter/>
        <EditAccountPresenter/>
      </main>
    </>
  );
}
