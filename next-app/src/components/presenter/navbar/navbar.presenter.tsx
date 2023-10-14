"use client";

import React, {useState} from "react";
import Navbar from "@/components/view/navbar/navbar";

interface NavbarPresenterProps {
    fixed: boolean;
}

const NavbarPresenter: React.FC<NavbarPresenterProps> = props => {
    const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
    const [signInStep, setSignInStep] = useState(0);

    return (
        <Navbar fixed={props.fixed}
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
                onSignup={() => setSignInStep(4)}/>
    );
};

export default NavbarPresenter;
