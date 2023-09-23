'use client'
import React, { useState } from 'react';
import styles from './page.module.css';
import Signin from '../components/signin/signin';

export default function Home() {
  const [isSignInVisible, setIsSignInVisible] = useState(true);
  const [signInStep, setSignInStep] = useState(0);
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
        <img src='../../public/logo-no-dots.svg'></img>
        <header>TouchGrass</header>
        <div className='menu'>
          <button className={styles.signinButton} onClick={openSignIn}>Sign in/Sign up</button>
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
                onSignup={()=>{setSignInStep(0)}}
              />
        }
      </main>
    </body>
  )
}
