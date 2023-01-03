import React from 'react';

type AboutMePropTypes = {
  children: React.ReactNode
}

const AboutMe = ({ children }: AboutMePropTypes) => {
  return (
    <div>
      <div className='font-bold mb-2'>About me</div>
      <div className='text-sm text-[#8a8a8a] max-w-[400px]'>
        { children }
      </div>
    </div>
  );
}

export default AboutMe;