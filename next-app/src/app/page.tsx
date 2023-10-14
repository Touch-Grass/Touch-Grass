import React from "react";
import ButtonView from "@/components/view/button/button.view";
import { ButtonType } from "@/components/view/button/button.view";
import "./page.scss";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";

export default function Home() {
    return (
        <>
            <NavbarPresenter fixed={true}/>
            <main className={"hero"}>
                <div className={"hero-column"}>
                    <div className="hero-tagline">
                        You should <a href="https://youtu.be/JSnUF4d9CBk?si=gHwIQvNeDnCqP77d">touch grass</a> today.
                    </div>
                    <div className={"hero-search-container"}>
                        <input type='text'
                               placeholder='Where do you want to go?'
                               className='hero-search-bar'/>
                        <ButtonView text="Search" type={ButtonType.SEARCH}/>
                    </div>
                </div>
                <div className='hero-scroll-tip'>Scroll down to discover</div>
            </main>
        </>
    );
}
