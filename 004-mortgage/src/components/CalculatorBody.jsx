import React from 'react';

const CalculatorBody = () => {
  return (
    <div className="text-md">
      <div className="p-4 text-white text-xl bg-[#b95ff6]"> Enter Your Information</div>
      <div className="flex flex-col p-8 gap-y-2">
        <div className="flex flex-col">
          <label className="font-light" htmlFor="amount">Mortgage Amount</label>
          <input className="p-2 text-[#b95ff6] text-lg text-end outline-[#b95ff6] border-[#e7e6e5] border-2" type="number" id="amount" placeholder='100,000' />
        </div>
        <div className="flex justify-between gap-x-2">
          <div className="flex flex-col flex-1">
            <label className="font-light" htmlFor="amortization">Amortization</label>
            <div className='flex w-full'>
              <input className="p-2 text-[#b95ff6] text-lg text-end outline-[#b95ff6] border-[#e7e6e5] border-2 w-full" type="number" id="amortization" placeholder='25'/>
              <select className="p-2 text-[#b95ff6] text-lg outline-[#b95ff6] border-[#e7e6e5] border-2 border-l-0">
                <option value="">yrs</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <label className="font-light text-end" htmlFor="interest">Interest Rate</label>
            <div className='flex w-full'>
              <input className="p-2 text-[#b95ff6] text-lg text-end outline-[#b95ff6] border-[#e7e6e5] border-2 w-full" type="number" id="interest" placeholder='4.19' />
              <select className="p-2 text-[#b95ff6] text-lg outline-[#b95ff6] border-[#e7e6e5] border-2 border-l-0">
                <option value="">%</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-x-2">
          <div className="flex flex-col flex-1">
            <label className="font-light" htmlFor="freqency">Payment Frequency</label>
            <select className="p-2 text-[#b95ff6] text-lg text-end outline-[#b95ff6] border-[#e7e6e5] border-2 w-full" id="freqency">
              <option value="">Monthly</option>
            </select>
          </div>
          <div className="flex flex-col flex-1">
            <label className="font-light text-end" htmlFor="product">Product</label>
            <select className="p-2 text-[#b95ff6] text-lg text-end outline-[#b95ff6] border-[#e7e6e5] border-2 w-full" id="product">
              <option value="">5 yr closed</option>
            </select>
          </div>
        </div>
        <div className='text-end underline font-light cursor-pointer'>
          Additional Lump Sum Payments
        </div>
        <div className="flex justify-center gap-x-2">
          <button className="p-2 bg-[#b95ff6] text-white text-2xl flex-1">Calculate</button>
          <button className="p-2 text-[#b95ff6] text-2xl flex-1 border-[#b95ff6] border-2">Save</button>
        </div>
      </div>
    </div>
  );
}

export default CalculatorBody;