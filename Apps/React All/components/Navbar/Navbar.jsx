import { Link } from "react-router-dom";

const { Fragment } = require("react")

const Navbar = () => {
    return( <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand">React</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/forms">Form Handling</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/lifecycle">LifeCycle</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contactlist">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/expense">Expense Tracker</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/search">Search</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/redux">Redux</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/user">User - Redux</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register - Redux</Link>
                </li>
            </ul>
        </nav>
    </Fragment>)
}

export default Navbar;