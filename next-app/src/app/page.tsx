"use client";
import React, {useState} from "react";
import Navbar from "@/components/navbar/navbar";
import "./page.scss";

export default function Home() {
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
                               className='hero-search-bar' />
                        <button className='hero-search-button'>Search</button>
                    </div>
                </div>
                <div className='hero-scroll-tip'>Scroll down to discover</div>
            </main>
        </>
    );
}
