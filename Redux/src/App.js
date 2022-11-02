import React from "react";
import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./Navbar";

import Message from "./Message";

import {Provider} from "react-redux"
import {store} from "./Redux/store"

import { Counter } from "./Counter";

class App extends React.Component{
  render(){
    return(
      <div>
        <Provider store={store}>
          <Router>
            <Navbar/>
            <Routes>
              <Route path="/message" element={<Message />} />
              <Route path="/counter" element={<Counter />} />
            </Routes>
          </Router>
          {/* <Message />
          <Counter /> */}
        </Provider>
      </div>
    );
  }
}
export default App;