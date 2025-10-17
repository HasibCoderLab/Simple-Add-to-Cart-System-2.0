import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';

const Products = () => {
  const [products , setProducts] =   useState([]);
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5 '>
            {
              products.map(product =>  <Product
                key = {product.id}
                product = {product}
                ></Product>)
            }
        </div>
    )
}

export default Products