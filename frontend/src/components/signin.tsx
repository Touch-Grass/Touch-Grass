import React, { useState } from 'react';
import styles from '../app/page.module.css';

interface SigninProps {
  isVisible: boolean;
  signInStep: number;
  onUsernameEmail: () => void;
  onPassword: () => void;
  onSignup: () => void;
}

const Signin: React.FC<SigninProps> = ({isVisible, signInStep, onUsernameEmail, onPassword, onSignup}) => {
  switch(signInStep){
    // enter username/password
    case 1: {
      return (
        <div className={`top-right-popup-container ${styles.signinUsername}`}>
            <input type='text' placeholder='username/email' className={`${styles.inputUsernameEmail} input`}></input>
            <button className={`button ${styles.buttonNext}`} onClick={onUsernameEmail}>Next</button>
        </div>
      );
    }
    // already registered
    case 2:{
      return (
        <div className={`top-right-popup-container ${styles.signinPassword}`}>
            <input type='password' placeholder='password' className={`${styles.inputPassword} input`}></input>
            <button className={`button ${styles.buttonSignin}`} onClick={onPassword}>Go</button>
        </div>
      );
    }
    // not yet registered
    case 3:{
      return (
        <div className={`top-right-popup-container ${styles.signup}`}>
            <input type='text' placeholder='username' className={`${styles.inputUsernameEmail} input`}></input>
            <input type='email' placeholder='email' className={`${styles.inputUsernameEmail} input`}></input>
            <input type='password' placeholder='password' className={`${styles.inputPassword} input`}></input>
            <input type='password' placeholder='password again' className={`${styles.inputPassword} input`}></input>
            <button className={`button ${styles.buttonSignup}`} onClick={onSignup}>Join</button>
        </div>
      );
    }
    // nothing
    default:{
      return (
        <></>
      );
    }
  }
}

export default Signin;