import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Company from "./Components/Company";
import Contact from "./Components/Contact";
import Feature from "./Components/Features";
import Home from "./Components/Home";
import Marketplace from "./Components/Marketplace";
import Team from "./Components/Team";
import Navbar from "./Navbar";

class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="company" element={<Company />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="features" element={<Feature />} />
            <Route path="team" element={<Team />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;