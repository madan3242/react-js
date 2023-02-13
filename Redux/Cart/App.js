import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './cart/Cart'
import Products from './cart/Products'
import Navbar from './navbar/Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App