import React from 'react';

const Radio = ({ id, name, value, defaultChecked, onChange, children }) => {
  return (
    <>
      <input className='hidden peer mr-2' type='radio' id={id} name={name} value={value} defaultChecked={defaultChecked} onChange={onChange} />
      <label className="inline-block before:mb-1 before:content-[''] before:cursor-pointer before:align-middle before:text-black before:leading-[1.1em] before:font-bold before:text-center before:text-[9px] before:h-[12px] before:w-[12px] before:mr-1 before:inline-block before:border before:border-solid before:border-[#57ffff] before:box-border before:peer-checked:content-['\2713'] before:peer-checked:text-[#57ffff]"
        htmlFor={id}>
        { children }
      </label>
    </>
  );
}

export default Radio;