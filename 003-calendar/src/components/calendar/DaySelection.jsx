import React, { useEffect, useState } from 'react';
import moment from 'moment';

const eventDayClasses = ['bg-[#febe7e]', 'rounded-full', 'text-[#374140]', 'shadow-[0_0_0_2px_#374140,0_0_0_4px_#febe7e]'];
const selectedDayClasses = ['bg-[#bedb39]', 'rounded-full', 'text-[#374140]', 'shadow-[0_0_0_2px_#374140,0_0_0_4px_#bedb39]'];

const createArray = (n, increment) => {
  return Array.from({ length: n }, (_, i) => increment ? i + 1 : -1);
}

const DaySelection = ({ selectedDate, handleDateChange, events }) => {
  const [daysInMonth, setDaysInMonth] = useState([]);

  useEffect(() => {
    setDaysInMonth((prevDays) => {
      const date = moment([selectedDate.year, selectedDate.month, 1])
      const dayAmountArray = createArray(date.daysInMonth(), true);
      const weekDayStartArray = createArray(date.day(), false);
      return [...weekDayStartArray, ...dayAmountArray];
    });
  }, [selectedDate.month, selectedDate.year]);

  return (
    daysInMonth.map((day, index) => {
      let classes;
      
      if(day === -1) return <div key={`${day}-${index}`}></div>;

      const foundEvent = events.find((e) => e.date.day === day);
      if(foundEvent) {
        classes = eventDayClasses.join(' ');
      }

      if(selectedDate.day === day) {
        classes = selectedDayClasses.join(' ');
      }

      return (
        <div className={`${classes} cursor-pointer p-1`} key={`${selectedDate.year}-${selectedDate.month}-${day}`} onClick={() => handleDateChange({ day })}>
          { day }
        </div>
      );
    })
  );
}

export default DaySelection;