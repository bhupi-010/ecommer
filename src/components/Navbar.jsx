import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function Navbar() {


    return <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a href="" className="navbar-brand">D-Shop</a>
                  <Link className="nav-link" to="/cart">
            <FontAwesomeIcon icon={faShoppingCart}/> Cart
            </Link>
            </div>
        </nav>



}

export default Navbar;