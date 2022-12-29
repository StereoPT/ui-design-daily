import React, { useState } from 'react';

import Input from './inputs/Input';
import Checkbox from './inputs/Checkbox';
import PrimaryButton from './inputs/PrimaryButton';
import SocialButton from './inputs/SocialButton';

const initialFormState = {
  username: '',
  password: '',
  remember: false
};

const SignIn = () => {
  const [form, setForm] = useState(initialFormState);

  const handleSubmitForm = (event) => {
    event.preventDefault();

    console.log(form);

    setForm(initialFormState);
  }

  const handleFormInput = ({ target: input }) => {
    console.log(input.value);

    setForm((prevUser) => {
      return {
        ...prevUser,
        [input.name]: input.value
      }
    });
  }

  return (
    <form className='grid gap-y-8' onSubmit={handleSubmitForm}>
      <Input inputIcon='/images/user.svg' type='text' name='username' id='username' placeholder='Username' value={form.username} onChange={handleFormInput} />
      <Input inputIcon='/images/pass.svg' type='password' name='password' id='password' placeholder='Password' value={form.password} onChange={handleFormInput} />
      <div className='flex justify-between px-2'>
        <div className='text-xs'>
          <Checkbox id="remember" name="remember" defaultChecked={form.remember} onChange={handleFormInput}>Remember me</Checkbox>
        </div>
        <a className='text-xs underline cursor-pointer'>Forgot password</a>
      </div>
      <PrimaryButton>LOG IN</PrimaryButton>
      <span className="before:inline-block before:content-[''] before:align-middle before:border-t before:border-solid before:border-[#57ffff] before:w-10 before:my-0 before:mx-3 after:inline-block after:content-[''] after:align-middle after:border-t after:border-solid after:border-[#57ffff] after:w-10 after:my-0 after:mx-3">or</span>
      <SocialButton>Log In with Facebook</SocialButton>
    </form>
  );
}

export default SignIn;