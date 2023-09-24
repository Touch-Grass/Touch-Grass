'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Signin from '@/components/signin/signin';
import UserIcon from '@/components/userIcon/userIcon';
import UserMenu from '@/components/userMenu/userMenu';

export default function Home() {
  const [isSignInVisible, setIsSignInVisible] = useState(false);
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  const [signInStep, setSignInStep] = useState(4);
  const openSignIn = () => {
    // setIsSignInVisible(true);
    setSignInStep(1);
  };
  const closeSignIn = () => {
    // setIsSignInVisible(false);
    setSignInStep(0);
  };
  return (
    <body>
      <nav className='navbar'> 
        <Image src='logo-no-dots.svg' alt='logo' width={45} height={45}></Image>
        <header>TouchGrass</header>
        <div className='menu'>
          {signInStep < 4?
            <button className={styles.signinButton} onClick={openSignIn}>
              Sign in/Sign up
            </button>:
            <UserIcon 
              username='Chris' 
              userProfilePic='/userIcon.png'
              onUserProfilePicClicked={()=>setIsUserMenuVisible(true)}
            ></UserIcon>
          }
        </div>
      </nav>
      <main>
        <input type='text' placeholder='Where is the grass?' id={styles.search}></input>
        {
          isSignInVisible 
          && <Signin 
                isVisible={isSignInVisible} 
                signInStep={signInStep} 
                onUsernameEmail={()=>{setSignInStep(2)}}
                onPassword={()=>{setSignInStep(3)}}
                onSignup={()=>{setSignInStep(4)}}
              />
        }
        <UserMenu 
          isUserMenuVisible={isUserMenuVisible} 
          onMyTrailsClicked={()=>{}}
          onAddTrailClicked={()=>{}}
          onEditAccountClicked={()=>{}}
          onLogOutClicked={()=>{}}
        ></UserMenu>
      </main>
    </body>
  )
}
