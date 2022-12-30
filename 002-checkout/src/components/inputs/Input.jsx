import React from 'react';

const Input = ({ type, placeholder, id, name, value, onChange, children }) => {
  return (
    <div>
      <label className="text-sm font-bold text-[#707070]" htmlFor={id}>{ children }</label>
      <input className='w-full border p-3 px-6 rounded-md' id={id} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;