import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import ProductList from './Products/ProductList'
import ViewProduct from './Products/ViewProduct'

let App = () => {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
              <Route path='/products' element={<ProductList />} />
              <Route path="/view/:id" element={<ViewProduct />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App