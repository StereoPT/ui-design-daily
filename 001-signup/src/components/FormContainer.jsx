import React, { useState } from 'react';
import FormHeader from './FormHeader';
import SignIn from './SignIn';
import SignUp from './SignUp';

const FormContainer = () => {
  const [isSignIn, setSignIn] = useState(true);

  const handleTabClick = (signIn) => {
    setSignIn(signIn);
  }

  return (
    <div className="min-w-[380px] min-h-[640px]" style={{ backgroundColor: 'rgba(35, 56, 62, 0.85)' }}>
      <FormHeader isSignIn={isSignIn} handleTabClick={handleTabClick}/>
      <div className='text-center text-white p-14'>
        { isSignIn && <SignIn /> }
        { !isSignIn && <SignUp /> }
      </div>
    </div>
  );
}

export default FormContainer;