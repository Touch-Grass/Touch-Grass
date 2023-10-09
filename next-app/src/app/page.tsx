"use client";
import React, {useState} from "react";
import Navbar from "@/components/navbar/navbar";
import "./page.scss";
import {IUser} from "@/models/shared/user/user.interface";
import {Mutable} from "@/models/shared/utility.types";
import {ITrail} from "@/models/shared/trail/trail.interface";
import SearchResult from "@/components/searchResults/searchResults";

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

    const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
    const [signInStep, setSignInStep] = useState(0);
    return (
        <>
            <Navbar
                signInStep={signInStep}
                isUserMenuVisible={isUserMenuVisible}
                onOpenSignIn={() => setSignInStep(1)}
                onOpenUserMenu={() => setIsUserMenuVisible(true)}
                onLogOut={() => {
                    setSignInStep(0);
                    setIsUserMenuVisible(false);
                }}
                onInputUsernameEmail={() => setSignInStep(2)}
                onInputPassword={() => setSignInStep(3)}
                onSignup={() => setSignInStep(4)}
            />
            <main className={"hero"}>
                <div className={"hero-column"}>
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
                <div className='hero-scroll-tip'>Scroll down to discover</div>
                { /* <SearchResult search="example" finds={38548} trail1={example} trail2={example} trail3={example}/> */}
            </main>
        </>
    );
}
