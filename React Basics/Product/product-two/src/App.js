import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import CreateProduct from './Products/CreateProduct'
import ProductAdmin from './Products/ProductAdmin'
import ProductList from './Products/ProductList'

let App = () => {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
              <Route path='/products' element={<ProductList />} />
              <Route path='/createproduct' element={<CreateProduct />} />
              <Route path='/admin' element={<ProductAdmin />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App