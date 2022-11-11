import React from "react";
import {Link} from "react-router-dom";

let Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand">React Redux</Link>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/message">Message</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/counter">Counter</Link>
                </li>
            </ul>
        </nav>
        
    )
}
export default Navbar;