import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Message from './Message/Message'
import Counter from './Counter/Counter'
import Navbar from './Navbar/Navbar'

import { Provider } from "react-redux"
import { store } from "./redux/store"

let App = () => {
  return (
    <div>
      <Provider store={store}>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path='message' element={<Message />} />
                  <Route path='counter' element={<Counter />} />
              </Routes>
          </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App