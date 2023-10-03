'use client'
import React, { useState } from 'react';
import Navbar from '@/components/navbar/navbar';
import './page.css';

export default function Home() {
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  const [signInStep, setSignInStep] = useState(0);
  return (
    <body>
      <Navbar 
        signInStep={signInStep}
        isUserMenuVisible={isUserMenuVisible}
        onOpenSignIn={()=>setSignInStep(1)}
        onOpenUserMenu={()=>setIsUserMenuVisible(true)}
        onLogOut={()=>{setSignInStep(0);setIsUserMenuVisible(false);}}
        onInputUsernameEmail={()=>setSignInStep(2)}
        onInputPassword={()=>setSignInStep(3)}
        onSignup={()=>setSignInStep(4)}
      />
      <main>
        <div className="home-command">You should <a href="https://youtu.be/JSnUF4d9CBk?si=gHwIQvNeDnCqP77d" className='home-link'>touch grass</a> today.</div>
        <div className='home-container'><input type='text' placeholder='Where do you want to go?' className='search-bar' id='home-search-bar'></input>
        <button className='home-search-button'>Search</button></div>
        <div className='home-command-bottom'>Scroll down to discover</div>
      </main>
    </body>
  )
}
