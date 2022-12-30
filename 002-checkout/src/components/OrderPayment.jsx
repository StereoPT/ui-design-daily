import React, { useState } from 'react';
import ExpirationDate from './inputs/ExpirationDate.jsx';

import Input from './inputs/Input.jsx';
import Select from './inputs/Select.jsx';

const initialFormState = {
  fullName: '',
  creditCardNumber: '',
  exMonth: '',
  exYear: '',
  cvc: ''
};

const months = Array.from({ length: 12 }, (_, i) => i + 1);
const years = Array.from({ length: 5 }, (_, i) => i + 2022);

const OrderPayment = () => {
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
    <div className='p-8 px-20 justify-center text-center bg-white rounded-r-xl'>
      <h2 className='mt-16 text-2xl font-extrabold mb-4 text-[#707070]'>PAY WITH CREDIT CARD</h2>
      <form className='grid gap-y-7 text-start' onSubmit={handleSubmitForm}>
        <Input id="fullName" name="fullName" type="text" placeholder="Full Name" value={form.fullName} onChange={handleFormInput}>
          Name of Card Holder:
        </Input>
        <Input id="creditCardNumber" name="creditCardNumber" type="text" placeholder="Card Number" value={form.creditCardNumber} onChange={handleFormInput}>
          Credit Card Number:
        </Input>
        <div className="flex gap-x-2">
          <ExpirationDate>
            <Select className='rounded-r-none' id="exMonth" name="exMonth" value={form.exMonth} onChange={handleFormInput}>
              { months.map((month) => <option key={month} value={month}>{ month.toString() }</option>) }
            </Select>
            <Select className='rounded-l-none border-l-0' id="exYear" name="exYear" value={form.exYear} onChange={handleFormInput}>
              { years.map((year) => <option key={year} value={year}>{ year.toString() }</option>) }
            </Select>
          </ExpirationDate>
          <Input id="cvc" name="cvc" type="text" placeholder="CVC" value={form.cvc} onChange={handleFormInput}>
            CVC
          </Input>
        </div>
        <button className='bg-[#e00026] rounded-md text-white font-bold py-4'>PAY SECURELY</button>
      </form>
    </div>
  );
}

export default OrderPayment;