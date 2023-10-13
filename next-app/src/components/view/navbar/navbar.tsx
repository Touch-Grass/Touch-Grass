import Image from "next/image";
import Link from "next/link";
import "./navbar.scss";
import UserMenu from "@/components/view/userMenu/userMenu";
import UserIcon from "@/components/view/userIcon/userIcon";
import Signin from "@/components/view/signin/signin";
import ButtonView from "../button/button";
import { ButtonType } from "../button/button";

interface NavbarProps {
    signInStep: number;
    isUserMenuVisible: boolean;
    onOpenSignIn: () => void;
    onOpenUserMenu: () => void;
    onLogOut: () => void;
    onInputUsernameEmail: () => void;
    onInputPassword: () => void;
    onSignup: () => void;
}

const Navbar: React.FC<NavbarProps> = (
    {
        signInStep,
        isUserMenuVisible,
        onOpenSignIn,
        onOpenUserMenu,
        onLogOut,
        onInputUsernameEmail,
        onInputPassword,
        onSignup
    }
) => {
    return (
        <>
            <nav className='navbar'>
                <div className={"navbar-content"}>
                    <Image className='navbar-logo' src='/logo-no-dots.svg' alt='logo' width={0} height={0} ></Image>
                    <Link className={"navbar-title"} href='/'>TouchGrass.</Link>
                    <div className='signin-container'>
                        {signInStep < 4 ?
                            <div>
                                <ButtonView text="Sign in" loading={false} type={ButtonType.SIGNIN}/>
                                <ButtonView text="Log in" loading={false} type={ButtonType.LOGIN}/>
                            </div>
                            :
                            <UserIcon
                                username='Chris'
                                userProfilePic='/userIcon.png'
                                onUserProfilePicClicked={onOpenUserMenu}
                            ></UserIcon>
                        }
                    </div>
                </div>
            </nav>
            <UserMenu
                isUserMenuVisible={isUserMenuVisible}
                onMyTrailsClicked={() => {
                }}
                onSavedTrailsClicked={() => {
                }}
                onAddTrailClicked={() => {
                }}
                onEditAccountClicked={() => {
                }}
                onLogOutClicked={onLogOut}
            ></UserMenu>
            {
                signInStep > 0
                && <Signin
                    signInStep={signInStep}
                    onUsernameEmail={onInputUsernameEmail}
                    onPassword={onInputPassword}
                    onSignup={onSignup}
                />
            }
        </>
    );
};

export default Navbar;
