import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
function Navbar() {


    return <nav className="navbar navbar-expand sticky-top bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand font-bold" to="/">D-Shop</Link>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/user">
                        <FontAwesomeIcon icon={faUser}/> User
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart}/> Cart
                    </Link>
                </li>

            </ul>
        </div>
    </nav>


}

export default Navbar;