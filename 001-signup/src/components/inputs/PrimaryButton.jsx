import React from 'react';

const PrimaryButton = ({ children }) => {
  return (
    <button className='py-4 text-base font-extrabold bg-[#fca842] my-0 mx-4'>
      { children }
    </button>
  );
}

export default PrimaryButton;