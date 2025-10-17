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
        <div>
            {
                map.products(product =>  <Product
                key = {product.id}
                product = {product}
                ></Product>)
            }
        </div>
    )
}

export default Products