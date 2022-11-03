import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand">React Hooks</Link>

            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="./login" >Login</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;