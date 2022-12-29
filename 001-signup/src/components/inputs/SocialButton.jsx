import React from 'react';

const SocialButton = ({ children }) => {
  return (
    <button className="py-4 text-base pl-6 my-0 mx-4 bg-[url('/images/facebook.svg')] bg-[#2e78be] bg-[length:16px] bg-[left_1.5rem_center] bg-no-repeat">
      { children }
    </button>
  );
}

export default SocialButton;