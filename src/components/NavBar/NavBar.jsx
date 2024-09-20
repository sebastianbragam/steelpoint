import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import logo from "/steelpoint.png";

function NavBar() {

    return (

        <nav className="navbar">

            <div className="bar-items">

                <Link className="logo" to={"/"}>
                    <img src={logo} alt="logo" />
                </Link>

                <div className="categories">
                    <Link to="/category/placas">Placas</Link>
                    <Link to="/category/perfiles">Perfiles</Link>
                    <Link to="/category/accesorios">Accesorios</Link>
                </div>

                <Link className="cart-widget" to="/cart">
                    <CartWidget />
                </Link>

            </div>

        </nav>


    );

}

export default NavBar;