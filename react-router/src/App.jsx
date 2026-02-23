import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/product'
import { Link } from 'react-router-dom'
import Contact from './pages/Contact'
import Service from './pages/Service'

const App = () => {
  return (

   <div>
       <nav className="navbar">
         {/* Logo / Brand */}
         <div className="navbar__logo">
           <Link to="/">MyApp</Link>
         </div>
   
         {/* Navigation Links */}
         <ul className="navbar__links">
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/about">About</Link>
           </li>
           <li>
             <Link to="/service">Service</Link>
           </li>
           <li>
             <Link to="/contact">Contact</Link>
           </li>
           <li>
             <Link to="/product">Product</Link>
           </li>
         </ul>
       </nav>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>





      
    </Routes>
   </div>
  )
}

export default App