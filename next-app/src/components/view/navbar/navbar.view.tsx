import Image from "next/image";
import Link from "next/link";
import "./navbar.view.scss";
import UserMenu from "@/components/view/userMenu/userMenu.view";
import UserIcon from "@/components/view/userIcon/userIcon.view";
import Signin from "@/components/view/signin/signin.view";

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
                            <button className='signin-button' onClick={onOpenSignIn}><Link href='/register'>Sign in/Sign up</Link></button> :
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
