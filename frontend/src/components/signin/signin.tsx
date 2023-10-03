import React from 'react';
import './signin.css';

interface SigninProps {
  signInStep: number;
  onUsernameEmail: () => void;
  onPassword: () => void;
  onSignup: () => void;
}

const Signin: React.FC<SigninProps> = ({signInStep, onUsernameEmail, onPassword, onSignup}) => {
  switch(signInStep){
    // enter username/password
    case 1: {
      return (
        <div className='top-right-popup-container signin-form-username'>
            <input type='text' className='input-username-email' placeholder='username/email'></input>
            <button className='button-next' onClick={onUsernameEmail}>Next</button>
        </div>
      );
    }
    // already registered
    case 2:{
      return (
        <div className='top-right-popup-container signin-form-password'>
            <input type='password' className='input-password' placeholder='password'></input>
            <button className='button-signin' onClick={onPassword}>Go</button>
        </div>
      );
    }
    // not yet registered
    case 3:{
      return (
        <div className='top-right-popup-container signup-form'>
            <input type='text' className='input-username-email' placeholder='username'></input>
            <input type='email' className='input-username-email' placeholder='email'></input>
            <input type='password' className='input-password' placeholder='password'></input>
            <input type='password' className='input-password' placeholder='password again'></input>
            <button className='button-signup' onClick={onSignup}>Join</button>
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