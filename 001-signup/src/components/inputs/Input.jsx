import React from 'react';

const Input = ({ inputIcon, type, name, id, placeholder, value, onChange }) => {
  return (
    <input className={`bg-[url('${inputIcon}')] text-sm border-b border-solid border-[#57ffff] p-2 bg-transparent bg-[length:16px] bg-[right_0.5rem_center] bg-no-repeat pr-8 focus:outline-none`}
      type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={onChange}
    />
  );
}

export default Input;