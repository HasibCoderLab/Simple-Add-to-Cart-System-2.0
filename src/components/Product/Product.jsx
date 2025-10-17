import React from 'react'

const Product = ({product}) => {
 const  {name,price,category} =  product;
    console.log(product);
    
  return (
    <div className='border-2 border-sky-600 p-3'>
    <h2>Name : {name} </h2>
    <p>  Price : {price} </p>
    <h3> Category : {category} </h3>
    <button className='mt-2 bg-green-500'>Add To Cart </button>
    
    
    </div>
  )
}

export default Product