"use client";
import Image from "next/image";
import Link from "next/link";
import "./navbar.scss";
import UserMenu from "@/components/view/userMenu/userMenu";
import UserIcon from "@/components/view/userIcon/userIcon";
import Signin from "@/components/view/signin/signin";
import ButtonView from "../button/button";
import { ButtonType } from "../button/button";

interface NavbarProps {
    isUserLogged: boolean;
}

const Navbar: React.FC<NavbarProps> = (
    {
        isUserLogged
    }
) => {
    return (
        <>
            <nav className='navbar'>
                <div className={"navbar-content"}>
                    <Image className='navbar-logo' src='/logo-no-dots.svg' alt='logo' width={0} height={0} ></Image>
                    <Link className={"navbar-title"} href='/'>TouchGrass.</Link>
                    <div className='signin-container'>
                        {isUserLogged ?
                            <UserIcon
                                username='Chris'
                                userProfilePic='/userIcon.png'
                                onUserProfilePicClicked={()=>{}}
                            ></UserIcon>
                            :
                            <div>
                                <Link href='/register'><ButtonView text="Sign in" loading={false} type={ButtonType.SIGNIN}/></Link>
                                <Link href='/login'><ButtonView text="Log in" loading={false} type={ButtonType.LOGIN}/></Link>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
