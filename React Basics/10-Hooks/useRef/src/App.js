import React from "react";
import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./Form/Login";
import Navbar from "./Navbar";

class App extends React.Component{
  render(){
    return(
      <div>
          <Router>
            <Navbar/>
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
      </div>
    );
  }
}
export default App;