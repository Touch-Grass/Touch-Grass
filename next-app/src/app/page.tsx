import React from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import "./page.scss";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";
import HeroSearchSection from "@/components/view/heroSearchSection/heroSearchSection";
import FeaturedTrailsSection from "@/components/view/featuredTrailsSection/featuredTrailsSection";
import StatisticsSection from "@/components/view/statisticsSection/statisticsSection";

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
                <HeroSearchSection/>
                <FeaturedTrailsSection/>
                <StatisticsSection/>
                {/* <div className={"hero-column"}>
                    <div className="hero-tagline">
                        You should <a href="https://youtu.be/JSnUF4d9CBk?si=gHwIQvNeDnCqP77d">touch grass</a> today.
                    </div>
                    <div className={"hero-search-container"}>
                        <input type='text'
                               placeholder='Where do you want to go?'
                               className='hero-search-bar'/>
                        <button className='hero-search-button'>Search</button>
                    </div>
                </div>
                <div className='hero-scroll-tip'>Scroll down to discover</div> */}
                { /* <SearchResult search="example" finds={38548} trail1={example} trail2={example} trail3={example}/> */}
            </main>
        </>
    );
}
