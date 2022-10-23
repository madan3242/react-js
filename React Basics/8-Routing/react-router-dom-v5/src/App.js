import React from "react";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";

class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <Navbar />
          <Switch>
              <Route path="/Home" component={Home} />
              <Route path="/About">
                <About />
              </Route>
              <Route path="/Services" component={Services} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;