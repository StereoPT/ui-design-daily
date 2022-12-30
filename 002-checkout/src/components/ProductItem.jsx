import React from 'react';

const ProductItem = ({ selectedProduct, removeProduct }) => {
  return (
    <div className='flex flex-col min-w-[250px] bg-white rounded-md drop-shadow-md p-2 mb-2'>
      <div className='ml-auto cursor-pointer' onClick={removeProduct}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[#9f9f9f]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <img className='max-h-[125px] object-contain pointer-events-none' src={ selectedProduct.image } alt="Product Image" />
      <div className='text-sm'>
        <div>{ selectedProduct.name }</div>
        <div>Color: { selectedProduct.color }</div>
        <div className='font-bold'>Price: { selectedProduct.price.toFixed(2) }€</div>
      </div>
    </div>
  );
}

export default ProductItem;