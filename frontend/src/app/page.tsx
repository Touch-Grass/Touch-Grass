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
        <input type='text' placeholder='Where is the grass?' id='search'></input>
      </main>
    </body>
  )
}
