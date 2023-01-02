import React from 'react';

const Radio = ({ id, name, defaultChecked, children }) => {
  return (
    <div>
      <input className="mr-2 accent-[#b95ff6] peer" type='radio' id={id} name={name} defaultChecked={defaultChecked}/>
      <label className='checked:text-[#b95ff6] peer-checked:text-[#b95ff6]' htmlFor={id}>
        { children }
      </label>
    </div>
  );
}

export default Radio;