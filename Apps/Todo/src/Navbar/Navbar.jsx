import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
        <Link className="navbar-brand">Todo List</Link>
    </nav>
  )
}

export default Navbar