'use client'
import React, { useState } from 'react';
import './page.css';
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
      <main>
        <div className="home-command">You should <a href="https://youtu.be/JSnUF4d9CBk?si=gHwIQvNeDnCqP77d" className='home-link'>touch grass</a> today.</div>
        <div className='home-container' id='home-search-width'><input type='text' placeholder='Where do you want to go?' className='search-bar' id='home-search-bar'/>
        <button className='home-search-button'>Search</button></div>

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
