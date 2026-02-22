import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/product'

const App = () => {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>



      
    </Routes>
   </div>
  )
}

export default App