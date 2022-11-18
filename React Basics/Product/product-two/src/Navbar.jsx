import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bavbar-expand-lg  navbar-dark bg-primary">
        <Link className="navbar-brand">Product Basket</Link>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link" to="products">Products</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar