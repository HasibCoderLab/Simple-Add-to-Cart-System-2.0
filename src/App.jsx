
import { useState } from 'react'
import './App.css'
import Placement from './components/Placement/Placement'
import Products from './components/Products/Products'

function App() {
  // useState
  const [cart, setCart] = useState([])
  // Function
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <div className='flex gap-5'>
      <Products addToCart={addToCart}></Products>
      <Placement></Placement>
    </div>
  )
}

export default App
