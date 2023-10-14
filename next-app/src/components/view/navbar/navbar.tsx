"use client";
import Image from "next/image";
import Link from "next/link";
import UserIcon from "@/components/view/userIcon/userIcon";
import ButtonView from "../button/button";
import { ButtonType } from "../button/button";
import { IUser } from "@/models/shared/user/user.interface";
import "./navbar.scss";

interface NavbarProps {
    user: IUser | null;
}

const Navbar: React.FC<NavbarProps> = (
    {
        user
    }
) => {
    return (
        <>
            <nav className='navbar'>
                <div className={"navbar-content"}>
                    <Image className='navbar-logo' src='/logo-no-dots.svg' alt='logo' width={0} height={0} ></Image>
                    <Link className={"navbar-title"} href='/'>TouchGrass.</Link>
                    <div className='signin-container'>
                        {user ?
                            <UserIcon
                                username={user.username}
                                userProfilePic='/userIcon.png'
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
