"use client";
import React, {useState} from "react";
import "./page.scss";
import ImageUpload from "@/components/view/imageUpload/imageUpload";
import Navbar from "@/components/view/navbar/navbar";

interface EditAccountProps {
  onProfilePicClicked: () => void;
}

// TODO: FIX PROPS THIS IS NOT GONNA WORK!
export default function EditAccount(props: any) {
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  const [signInStep, setSignInStep] = useState(0);
    return (
      <body>
        <main className="profile-page-container">
            <div className='profile-pic-container' onClick={props.onProfilePicClicked}>
              <ImageUpload imageUrl='/userIcon.png'></ImageUpload>
            </div>
            <div className='profile-info-container'>
              <div className='profile-entry-container'>
                  <div className='profile-text'>Username</div>
                  <input className='profile-input' type='text' placeholder="Chris"></input>
              </div>
              <div className='profile-entry-container'>
                <div className='profile-text'>Email address</div>
                <input className='profile-input' type='text'  placeholder="chris@mail.com"></input>
              </div>
              <div className='profile-entry-container'>
                <div className='profile-text'>Password</div>
                <input className='profile-input' type='password'></input>
              </div>
              <div className='profile-entry-container'>
                <div className='profile-text'>Password confirmation</div>
                <input className='profile-input' type='password'></input>
              </div>
              <div className='profile-button-container'>
                <button className='profile-button' id='profile-save-button'>Save</button>
                <button className='profile-button' id='profile-delete-button'>Delete account</button>
              </div>
            </div>
        </main>
      </body>
    );
  }
