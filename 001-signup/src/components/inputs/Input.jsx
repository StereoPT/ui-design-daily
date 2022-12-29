import React from 'react';

const Input = ({ icon, type, name, id, placeholder, value, onChange }) => {
  const userIcon = "bg-[url('/images/user.svg')]";
  const passIcon = "bg-[url('/images/pass.svg')]";
  const mailIcon = "bg-[url('/images/mail.svg')]";

  let bgIcon;
  if(icon === 'user') {
    bgIcon = userIcon;
  } else if(icon === 'pass') {
    bgIcon = passIcon;
  } else if(icon === 'mail') {
    bgIcon = mailIcon;
  }

  return (
    <input className={`${bgIcon} text-sm border-b border-solid border-[#57ffff] p-2 bg-transparent bg-[length:16px] bg-[right_0.5rem_center] bg-no-repeat pr-8 focus:outline-none`}
      type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={onChange}
    />
  );
}

export default Input;