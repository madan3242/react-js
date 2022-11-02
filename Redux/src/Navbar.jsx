import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand">React Redux</Link>

            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="./message" >Message</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="./counter" >Counter</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;