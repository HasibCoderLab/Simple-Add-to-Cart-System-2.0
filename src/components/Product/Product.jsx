import React from 'react'

const Product = ({ product, addToCart }) => {
  const { name, price, category } = product;
  // console.log(product);

  return (
    <div className='border-2 border-sky-600 p-3'>
      <h2>Name : {name} </h2>
      <p>  Price : {price} </p>
      <h3> Category : {category} </h3>
      <button onClick={() => addToCart(product)}
        className='mt-2 bg-green-500 p-2 rounded-2xl cursor-pointer'
      >Add To Cart </button>


    </div>
  )
}

export default Product