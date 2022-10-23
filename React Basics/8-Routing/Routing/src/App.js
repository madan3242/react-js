import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Register from "./Components/Register";
import Login from "./Components/Login";

class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;