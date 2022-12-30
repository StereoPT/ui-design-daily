import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const YourOrder = ({ order, setOrder }) => {
  const [selectedProduct, setSelectedProduct] = useState(order[0]);

  const orderTotal = order.reduce((acc, product) => acc + product.price, 0);

  const handleSelectedProductChange = (product) => {
    setSelectedProduct(product);
  }

  useEffect(() => {
    setSelectedProduct((prevSelected) => order[0]);
  }, [order]);

  const removeProductHandler = () => {
    if(order.length > 1) {
      setOrder((prevOrder) => {
        return prevOrder.filter((product) => product.id !== selectedProduct.id);
      });
    }
  }

  return (
    <div className='flex-1 p-4 justify-center text-center'>
      <div className='my-4'>
        <img className="max-w-[75px] mx-auto pointer-events-none" src="/images/logo.png" alt="Store Logo" />
      </div>
      <h2 className='text-2xl font-extrabold mb-4 text-[#707070]'>YOUR ORDER</h2>
      <ProductItem selectedProduct={selectedProduct} removeProduct={removeProductHandler}/>
      <div className='flex justify-center mb-8'>
        {
          order.map((product) => {
            return (
              <div key={product.id} onClick={() => handleSelectedProductChange(product)}
                className={`${product.id === selectedProduct.id ? 'text-[#e42847]' : 'text-[#c0c0c0]'} mx-1 text-lg cursor-pointer`}>•</div>
            );
          })
        }
      </div>
      <div>
        <h2 className='text-2xl text-[#707070]'>TOTAL</h2>
        <h2 className='text-3xl font-extrabold text-[#707070]'>{ orderTotal.toFixed(2) }€</h2>
      </div>
    </div>
  );
}

export default YourOrder;