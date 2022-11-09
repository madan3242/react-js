import React from "react";
import {Link} from "react-router-dom";

let Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand">Redux Thunk</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="user">User</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;