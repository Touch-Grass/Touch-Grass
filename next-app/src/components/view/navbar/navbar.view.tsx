"use client";
import Image from "next/image";
import Link from "next/link";
import UserIcon from "@/components/view/user-icon/user-icon.view";
import ButtonView from "../button/button.view";
import { ButtonType } from "../button/button.view";
import { IUser } from "@/models/shared/user/user.interface";
import "./navbar.view.scss";

interface NavbarProps {
    fixed: boolean;
    user: IUser | null;
}

const Navbar: React.FC<NavbarProps> = (
    {
        fixed,
        user
    }
) => {
    return (
        <>
            <nav className={`navbar${fixed ? " fixed" : ""}`} >
                <div className={"navbar-content"}>
                    <Link className={"navbar-logo"} href='/'>
                        <Image src='/logo-no-dots.svg' alt='logo' width={0} height={0} ></Image>
                    </Link>
                    <Link className={"navbar-title"} href='/'>TouchGrass.</Link>
                    <div className='signin-container'>
                        {user ?
                            <UserIcon
                                username={user.name + " " + user.surname}
                                userProfilePic='/userIcon.png'
                            ></UserIcon>
                            :
                            <div>
                                <Link href='/register'><ButtonView text="Register" loading={false} type={ButtonType.SIGNIN}/></Link>
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
