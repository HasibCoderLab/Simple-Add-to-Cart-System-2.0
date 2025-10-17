import React from 'react'

const SingleCart = ({singleCart}) => {
    const {name , price, category,img } = singleCart;
    console.log(singleCart);
    
  return (
    <div>
        <h2>Name :{name}</h2>
        <p>Price :{price}</p>
        <h4>Category :{category}</h4>
        <img src={img} alt="" />
    </div>
  )
}

export default SingleCart