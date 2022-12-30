import React, { useState } from 'react';
import OrderPayment from './OrderPayment';
import YourOrder from './YourOrder';

const DUMMY_ORDER = [
  {
    id: '1114969003',
    name: 'Sweatshirt with Hood Relaxed Fit',
    color: 'Dark Brown',
    image: '/images/1114969003.png',
    price: 29.99
  },
  {
    id: '1106034001',
    name: 'Sneakers Boots',
    color: 'Black',
    image: '/images/1106034001.png',
    price: 39.99
  },
  {
    id: '1024256003',
    name: 'Slim Jeans',
    color: 'Light Blue Denim',
    image: '/images/1024256003.png',
    price: 19.99
  },
  {
    id: '1118203001',
    name: 'Flannel Pajamas',
    color: 'Creme',
    image: '/images/1118203001.png',
    price: 34.99
  },
  {
    id: '1108201002',
    name: 'Relaxed Fit Twisted Knit Vest',
    color: 'Dark Green / White',
    image: '/images/1108201002.png',
    price: 29.99
  }
]

const FormContainer = () => {
  const [order, setOrder] = useState(DUMMY_ORDER);
  // USER

  return (
    <div className='max-w-[750px] min-h-[570px] bg-[#f7eee8] drop-shadow-[0_10px_25px_rgba(0,0,0,0.125)] rounded-xl'>
      <div className='flex justify-end min-h-[570px]'>
        <YourOrder order={order} setOrder={setOrder}/>
        <OrderPayment />
      </div>
    </div>
  );
}

export default FormContainer;