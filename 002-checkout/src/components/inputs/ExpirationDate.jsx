import React from 'react';

const ExpirationDate = ({ id, children }) => {
  return (
    <div className='w-full'>
      <label className="text-sm font-bold text-[#707070]" htmlFor={id}>Expiration Date</label>
      <div className='flex' id={id}>
        { children }
      </div>
    </div>
  );
}

export default ExpirationDate;