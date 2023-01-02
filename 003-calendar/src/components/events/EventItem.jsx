import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

const EventItem = ({ event, handleEditEvent, handleDeleteEvent }) => {
  const date = moment(event.date);
  const [edit, setEdit] = useState(false);

  const toggleEditMode = () => {
    setEdit((prevEdit) => !prevEdit);
  }

  return (
    <div className='flex justify-center items-center text-[#ffedbc] pb-4 pt-2 border-b border-[#e65360]'>
      <div className='p-2'>
        <FontAwesomeIcon className="text-3xl" icon={ event.icon } />
      </div>
      <div className='flex-1 ml-4'>
        {
          !edit && (
            <h3 className='uppercase text-lg'>{ event.name }</h3>
          )
        }
        {
          edit && (
            <input className='bg-transparent text-lg uppercase border-b-2 border-[#e65360] px-2' type="text" value={event.name} onChange={(e) => handleEditEvent(e, event.id)} />
          )
        }
        <p className='text-[#374140] text-sm'>{ date.format('ddd D') } { event.hour }</p>
      </div>
      <div className='flex justify-between p-2 gap-x-6'>
        <FontAwesomeIcon className="text-xl text-[#374140] cursor-pointer" icon={faPencilAlt} onClick={toggleEditMode}/>
        <FontAwesomeIcon className="text-xl text-[#374140] cursor-pointer" icon={faTrashAlt} onClick={() => handleDeleteEvent(event.id)} />
      </div>
    </div>
  );
}

export default EventItem;