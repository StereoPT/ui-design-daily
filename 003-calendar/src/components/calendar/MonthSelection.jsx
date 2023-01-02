import React from 'react';

import { mod } from '../../utils/helperFunctions';

const MonthSelection = ({ months, selectedMonth, handleDateChange }) => {
  return (
    <>
      <div className="cursor-pointer" onClick={() => handleDateChange({ month: -1 })}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>
      <div className="flex-grow flex justify-between items-center px-6">
        <div className='text-xl text-[#7d8281] uppercase cursor-pointer' onClick={() => handleDateChange({ month: -2 })}>
          { months[mod(selectedMonth - 2, months.length)] }
        </div>
        <div className='text-xl text-[#7d8281] uppercase cursor-pointer' onClick={() => handleDateChange({ month: -1 })}>
          { months[mod(selectedMonth - 1, months.length)] }
        </div>
        <div className="text-xl font-bold text-[#c2c2c2] uppercase">
          { months[selectedMonth] }
        </div>
        <div className='text-xl text-[#7d8281] uppercase cursor-pointer' onClick={() => handleDateChange({ month: 1 })}>
          { months[mod(selectedMonth + 1, months.length)] }
        </div>
        <div className='text-xl text-[#7d8281] uppercase cursor-pointer' onClick={() => handleDateChange({ month: 2 })}>
          { months[mod(selectedMonth + 2, months.length)] }
        </div>
      </div>
      <div className="cursor-pointer" onClick={() => handleDateChange({ month: 1 })}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div> 
    </>
  );
}

export default MonthSelection;