import React from "react";
import "./page.scss";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";
import FooterPresenter from "@/components/presenter/footer/footer.presenter";
import MainPagePresenter from "@/components/presenter/main-page/main-page.presenter";

export default function Home() {
    /*const userExample = {} as Mutable<IUser>;
    userExample.name = "users name";
    userExample.surname = "surname";
    userExample.email = "ait@mailö.com";
    userExample.password = "password";

    const example = {} as Mutable<ITrail>;
    example.name = "test trail";
    example.description = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum mauris at eros tempor tristique. In molestie mauris neque. Sed lacinia, tellus in consectetur efficitur, tortor neque tincidunt risus, dignissim gravida ex metus commodo urna. Duis volutpat, velit id accumsan mollis, magna lacus euismod risus, nec dapibus sapien nulla eu metus.",
        example.length = 10;
    example.difficulty = 50;
    example.terrain = "stone";
    example.images = ["/lukasz-szmigiel-jFCViYFYcus-unsplash.jpg"];
    example.creator = userExample;*/
    return (
        <>
            <NavbarPresenter/>
            <main className={"hero"}>
                <MainPagePresenter/>
                <FooterPresenter/>
            </main>
        </>
    );
}
