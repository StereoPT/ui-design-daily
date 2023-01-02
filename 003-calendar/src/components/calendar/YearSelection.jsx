import React from 'react';

const YearSelection = ({ months, selectedDate, handleDateChange }) => {
  return (
    <div className="flex justify-evenly items-center p-4 px-8">
      <div className="text-[#7d8281] text-md cursor-pointer" onClick={() => handleDateChange({ year: -1})}>{ selectedDate.year - 1 }</div>
      <div className="text-[#c2c2c2] text-xl mx-8 uppercase">{ months[selectedDate.month] }. { selectedDate.year }</div>
      <div className="text-[#7d8281] text-md cursor-pointer" onClick={() => handleDateChange({ year: 1 })}>{ selectedDate.year + 1 }</div>
    </div>
  );
}

export default YearSelection;