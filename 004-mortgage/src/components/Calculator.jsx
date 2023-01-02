import React from 'react';
import CalculatorBody from './CalculatorBody';
import CalculatorHeader from './CalculatorHeader';

const Calculator = () => {
  return (
    <div className="bg-[#fff7e5] drop-shadow-lg max-w-[400px]">
      <CalculatorHeader />
      <CalculatorBody />
    </div>
  );
}

export default Calculator;