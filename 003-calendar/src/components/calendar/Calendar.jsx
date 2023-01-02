import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import moment from 'moment';

import { mod } from '../../utils/helperFunctions';

import Weekdays from './Weekdays';
import MonthSelection from './MonthSelection';
import YearSelection from './YearSelection';
import DaySelection from './DaySelection';

const weekDays = moment.weekdaysShort();
const months = moment.monthsShort();

const Calendar = () => {
  const state = useContext(GlobalContext);

  const [selectedDate, setSelectedDate] = state.date

  const events = state.getMonthlyEvents();

  const handleDateChange = ({ day, month, year }) => {
    setSelectedDate((prevDate) => {
      return {
        year: year ? (prevDate.year + year) : prevDate.year,
        month: month ? mod(month + prevDate.month, months.length) : prevDate.month,
        day: day ? day : 1
      }
    });
  }

  return (
    <div className="bg-[#374140] px-8 py-8 text-white flex flex-col justify-between h-[555px]">
      <YearSelection months={months} selectedDate={selectedDate} handleDateChange={handleDateChange} />
      <div className="p-8 py-2 grid gap-4 grid-cols-7 grid-rows-5 text-center text-lg text-[#c2c2c2]">
          <Weekdays weekDays={weekDays} />
          <DaySelection selectedDate={selectedDate} handleDateChange={handleDateChange} events={events} />
      </div>
      <div className="flex justify-between items-center mt-8">
        <MonthSelection months={months} selectedMonth={selectedDate.month} handleDateChange={handleDateChange}/>
      </div>
    </div>
  );
}

export default Calendar;