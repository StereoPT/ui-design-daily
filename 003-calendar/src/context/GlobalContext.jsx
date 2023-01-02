import React, { useState, createContext } from 'react';

import moment from 'moment';

const initialState = {
  currentDate: {},
  date: [],
  events: []
};

const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const currentDate = moment();

  const [selectedDate, setSelectedDate] = useState({
    year: currentDate.year(),
    month: currentDate.month(),
    day: currentDate.date()
  });

  const [events, setEvent] = useState([]);

  const getMonthlyEvents = () => {
    return events.filter((event) => (event.date.month === selectedDate.month) && (event.date.year === selectedDate.year));
  }

  const state = {
    date: [selectedDate, setSelectedDate],
    events: [events, setEvent],
    getMonthlyEvents: getMonthlyEvents,
  };

  return (
    <GlobalContext.Provider value={ state }>
      { children }
    </GlobalContext.Provider>
  );
}

export default GlobalContext;