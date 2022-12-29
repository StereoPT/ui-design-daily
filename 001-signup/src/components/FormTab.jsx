import React from 'react';

const FormTab = ({ children, isActive, handleTabClick }) => {

  let classes = ['flex-1', 'py-4', 'font-semibold'];
  const activeClasses = ['text-white'];
  const inactiveClasses = ['bg-white', 'text-[#4ad9d9]'];
  
  if(isActive) {
    classes.push(...activeClasses);
  } else {
    classes.push(...inactiveClasses);
  }

  return (
    <div className={classes.join(' ')} onClick={handleTabClick}>
      { children }
    </div>
  );
}

export default FormTab;