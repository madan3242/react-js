import React from "react";
import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./Navbar";
import Digital from "./Digital/Digital";

class App extends React.Component{
  render(){
    return(
      <div>
          <Router>
            <Navbar/>
            <Routes>
              <Route path="/digital" element={<Digital />} />
            </Routes>
          </Router>
      </div>
    );
  }
}
export default App;