import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './Navbar/Navbar'
import CreateProduct from './Products/CreateProduct'
import ProductAdmin from './Products/ProductAdmin'
import ProductList from './Products/ProductList'
import UpdateProduct from './Products/UpdateProduct'

let App = () => {
  return (
    <div>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path='/products' element={<ProductList />} />
                  <Route path='/createproducts' element={<CreateProduct />} />
                  <Route path='/productadmin' element={<ProductAdmin />} />
                  <Route path='/update/:id' element={<UpdateProduct />} />
              </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App