
import './App.css'
import Placement from './components/Placement/Placement'
import Products from './components/Products/Products'

function App() {


  return (
   <div className='flex gap-5'>
    <Products></Products>
    <Placement></Placement>
   </div>
  )
}

export default App
