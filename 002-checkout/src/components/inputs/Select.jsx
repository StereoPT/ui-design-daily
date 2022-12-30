import React from 'react';

const Select = ({ className, id, name, value, onChange, children }) => {
  return (
    <select className={`w-full border p-3 px-2 rounded-md ${className}`} id={id} name={name} value={value} onChange={onChange}>
      { children }
    </select>
  );
}

export default Select;