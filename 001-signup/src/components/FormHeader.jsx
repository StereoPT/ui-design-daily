import React from 'react';
import FormTab from './FormTab';

const FormHeader = ({ isSignIn, handleTabClick }) => {
  return (
    <div className='flex text-center cursor-pointer'>
      <FormTab isActive={isSignIn} handleTabClick={() => handleTabClick(true) }>
        Sign In
      </FormTab>
      <FormTab isActive={!isSignIn} handleTabClick={() => handleTabClick(false) }>
        Sign Up
      </FormTab>
    </div>
  );
}

export default FormHeader;