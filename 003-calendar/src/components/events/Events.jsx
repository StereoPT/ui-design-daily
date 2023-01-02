import React, { useContext, useEffect } from 'react';
import GlobalContext from '../../context/GlobalContext';

import { getRandomEvent } from '../../utils/eventMockup';
import moment from 'moment';

import EventItem from './EventItem';

const Events = () => {
  const state = useContext(GlobalContext);
  const [selectedDate] = state.date;
  const [, setEvent] = state.events;
  const events = state.getMonthlyEvents();

  const handleAddEvent = () => {
    const newEvent = {
      ...getRandomEvent(),
      date: selectedDate,
      hour: moment().format('kk:mm')
    };

    setEvent((prevEvents) => {
      return [newEvent, ...prevEvents];
    });
  }

  const handleEditEvent = (e, eventID) => {
    setEvent((prevEvents) => {
      const index = prevEvents.findIndex((pe) => pe.id === eventID);
      if(index !== -1) {
        prevEvents[index].name = e.target.value;
      }
      
      return [...prevEvents];
    });
  }

  const handleDeleteEvent = (eventID) => {
    setEvent((prevEvents) => {
      return prevEvents.filter((e) => e.id !== eventID);
    });
  }

  return (
    <div className="bg-[#ec7263] h-[635px] flex flex-col pb-4">
      <div className="bg-[#febe7e] p-10 px-24">
        <h2 className="text-xl font-semibold text-[#374140]">EVENTS OF THE MONTH</h2>
      </div>
      <div className="pt-4 h-full">
        <div className='overflow-scroll max-h-[420px]'>
          <div className='px-4'>
            {
              events.length > 0 && (
                events.map((event) => {
                  return (
                    <EventItem key={event.id} event={event} handleEditEvent={handleEditEvent} handleDeleteEvent={handleDeleteEvent} />
                  );
                })
              )
            }
            {
              events.length <= 0 && (
                <div className='text-2xl font-bold text-[#ffedbc] mt-8 text-center'>No Events Found</div>
              )
            }
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <button className='bg-[#374140] text-white flex justify-center items-center py-4 px-6 text-sm font-bold' onClick={handleAddEvent}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
          ADD EVENT
        </button>
      </div>
    </div>
  );
}

export default Events;