import React from "react";
import {Link} from "react-router-dom";

let Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand">Product CRUD Example</Link>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/createproducts">Create Product</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;