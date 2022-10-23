import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/Home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Services">Services</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Register">Register</Link>
                </li>
                
            </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar;
