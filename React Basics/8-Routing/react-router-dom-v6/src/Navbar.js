import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
              
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/Home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/About">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Services">Services</Link>
                  </li>
                </ul>
            </div>
          </nav>
      </div>
    )
  }
}

export default Navbar