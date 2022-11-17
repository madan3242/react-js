import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand">React Search</Link>
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="searchlist">Search List</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="searchaxios">Search API</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar