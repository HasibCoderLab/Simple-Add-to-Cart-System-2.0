import React from 'react'

const Product = ({product}) => {
 const  {name,price,category} =  product;
    console.log(product);
    
  return (
    <div className='border-2 border-sky-600 p-3'>
    <h2>Name : {name} </h2>
    <p>  Price : {price} </p>
    <small> Category : {category} </small>
    
    
    </div>
  )
}

export default Product