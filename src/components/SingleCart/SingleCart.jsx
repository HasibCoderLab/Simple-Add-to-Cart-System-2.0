import React from 'react'

const SingleCart = ({singleCart}) => {
    const {name , price, category } = singleCart;
    console.log(singleCart);
    
  return (
    <div>
        <h2>Name :{name}</h2>
        <h2>Name :{name}</h2>
        <h2>Name :{name}</h2>
        <h2>Name :{name}</h2>
    </div>
  )
}

export default SingleCart