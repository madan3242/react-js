import React from "react";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";

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
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;