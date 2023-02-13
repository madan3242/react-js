import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <Link className="navbar-brand" >Ecart</Link>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
            </li>
        </ul>
        <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
    </nav>
  )
}

export default Navbar