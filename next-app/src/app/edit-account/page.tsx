"use client";
import React, {useState} from "react";
import Navbar from "@/components/navbar/navbar";

export default function EditAccount() {
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
            <main>
                <div className='trail-container'>
                    <div className='trail-list-heading'><h1>My Trails</h1></div>
                </div>
            </main>
        </>
    );
}
