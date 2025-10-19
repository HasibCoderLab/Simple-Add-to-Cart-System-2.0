import React from 'react'

const SingleCart = ({singleCart}) => {
    const {name , price, category,img } = singleCart;
    
    
  return (
    <div>
      <hr />
        <h2>Name :{name}</h2>
       
        <p>Price :{price}</p>
        <h4>Category :{category}</h4>
        <img src={img} alt="product" />
         <hr />
    </div>
  )
}

export default SingleCart