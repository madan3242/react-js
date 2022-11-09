import React from 'react'
import { Provider } from 'react-redux'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './Navbar/Navbar'
import { store } from './redux/store'
import User from './Users/User'


let App = () => {
  return (
    <div>
      <Provider store={ store }>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path='/user' element={<User />} />
              </Routes>
          </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App