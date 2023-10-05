'use client'
import React, { useState } from 'react';
import Navbar from '@/components/navbar/navbar';
import SearchResult from '@/components/searchResults/searchResults';
import { UserModel, type UserInterface } from "@/models/users";
import { TrailModel, type TrailInterface } from "@/models/trails";
import './page.css';

export default function Home() {
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  const [signInStep, setSignInStep] = useState(0);
  
  const userExample= new UserModel;
  userExample._id='2';
  userExample.name='users name',
  userExample.surname='surname',
  userExample.email='ait@mailö.com',
  userExample.password='password';
  
  const example = new TrailModel;
  example._id='1'; 
  example.name= 'test trail';
  example.description= ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum mauris at eros tempor tristique. In molestie mauris neque. Sed lacinia, tellus in consectetur efficitur, tortor neque tincidunt risus, dignissim gravida ex metus commodo urna. Duis volutpat, velit id accumsan mollis, magna lacus euismod risus, nec dapibus sapien nulla eu metus.',
  example.length= 10;
  example.difficulty= 50;
  example.terrain= 'stone';
  example.rating= 1.3;
  example.image= '@/public/lukasz-szmigiel-jFCViYFYcus-unsplash.jpg';
  example.user= userExample;

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
        <SearchResult search="example" finds={38548} trail1={example} trail2={example} trail3={example}
        />
      </main>
    </body>
  )
}
