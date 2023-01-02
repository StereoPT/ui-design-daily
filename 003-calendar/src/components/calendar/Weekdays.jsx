import React from 'react';

const Weekdays = ({ weekDays }) => {
  return weekDays.map((weekDay) => {
    return (
      <div key={weekDay} className="text-[#a49a87] text-sm uppercase p-1">{ weekDay }</div>
    );
  });
}

export default Weekdays;