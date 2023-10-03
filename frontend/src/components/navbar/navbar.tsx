import Image from "next/image";
import Link from "next/link";
import UserIcon from "../userIcon/userIcon";
import UserMenu from '@/components/userMenu/userMenu';
import Signin from '@/components/signin/signin';
import './navbar.css';

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
        <Image className='navbar-logo' src='/logo-no-dots.svg' alt='logo' width={45} height={45}></Image>
        <header><Link href='/'>TouchGrass.</Link></header>
        <div className='signin-container'>
          {signInStep < 4?
            <button className='signin-button' onClick={onOpenSignIn}>Sign in/Sign up</button>:
            <UserIcon 
              username='Chris' 
              userProfilePic='/userIcon.png'
              onUserProfilePicClicked={onOpenUserMenu}
            ></UserIcon>
          }
        </div>
      </nav>
      <UserMenu 
        isUserMenuVisible={isUserMenuVisible} 
        onMyTrailsClicked={()=>{}}
        onSavedTrailsClicked={()=>{}}
        onAddTrailClicked={()=>{}}
        onEditAccountClicked={()=>{}}
        onLogOutClicked={onLogOut}
      ></UserMenu>
      {
        signInStep>0 
        && <Signin 
              signInStep={signInStep}
              onUsernameEmail={onInputUsernameEmail}
              onPassword={onInputPassword}
              onSignup={onSignup}
            />
      }
    </>
  );
}

export default Navbar;