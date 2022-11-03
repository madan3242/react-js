import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg rounded-pill navbar-dark bg-dark px-4">
            <Link className="navbar-brand">React Hooks</Link>

            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="./digital" >Digital</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;