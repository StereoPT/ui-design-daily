import React from 'react';

import Radio from '../inputs/Radio';

const CalculatorHeader = () => {
  return (
    <div>
      <div className="p-4 text-white text-xl bg-[#b95ff6]">Select a Calculation</div>
      <div className="flex justify-evenly p-8 text-lg">
        <Radio id="payment" name="calculation" defaultChecked={true}>Payment</Radio>
        <Radio id="mortgage" name="calculation" defaultChecked={false}>Mortgage Amount</Radio>
      </div>
    </div>
  );
}

export default CalculatorHeader;