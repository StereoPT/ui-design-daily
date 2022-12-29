import React, { useState } from 'react';

import Input from './inputs/Input';
import Radio from './inputs/Radio';
import PrimaryButton from './inputs/PrimaryButton';
import SocialButton from './inputs/SocialButton';

const initialFormState = {
  username: '',
  email: '',
  password: '',
  gender: ''
};

const SignUp = () => {
  const [form, setForm] = useState(initialFormState);

  const handleSubmitForm = (event) => {
    event.preventDefault();

    console.log(form);

    setForm(initialFormState);
  }

  const handleFormInput = ({ target: input }) => {
    setForm((prevUser) => {
      return {
        ...prevUser,
        [input.name]: input.value
      }
    });
  }

  return (
    <form className='grid gap-y-8' onSubmit={handleSubmitForm}>
      <Input icon='user' type='text' name='username' id='username' placeholder='Username' value={form.username} onChange={handleFormInput} />
      <Input icon='mail' type='email' name='email' id='email' placeholder='Email' value={form.email} onChange={handleFormInput} />
      <Input icon='pass' type='password' name='password' id='password' placeholder='Password' value={form.password} onChange={handleFormInput} />
      <div className='flex justify-evenly px-4'>
        <div className='text-sm'>
          <Radio id='male' name='gender' value="M" defaultChecked={form.gender} onChange={handleFormInput}>Male</Radio>
        </div>
        <div className='text-sm'>
          <Radio id='female' name='gender' value="F" defaultChecked={form.gender} onChange={handleFormInput}>Female</Radio>
        </div>
      </div>
      <PrimaryButton>SIGN UP</PrimaryButton>
      <span className="before:inline-block before:content-[''] before:align-middle before:border-t before:border-solid before:border-[#57ffff] before:w-10 before:my-0 before:mx-3 after:inline-block after:content-[''] after:align-middle after:border-t after:border-solid after:border-[#57ffff] after:w-10 after:my-0 after:mx-3">or</span>
      <SocialButton>Sign Up with Facebook</SocialButton>
    </form>
  );
}

export default SignUp;