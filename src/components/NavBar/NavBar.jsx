import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import logo from "/steelpoint.png";

function NavBar() {

    return (

        <nav className="h-20 bg-main w-full">

            <div className="flex flex-row justify-between max-w-screen-xl h-full ps-4 pe-4 m-auto">

                <Link to={"/"}>
                    <img className="h-full w-auto pt-2 pb-2 cursor-pointer" src={logo} alt="logo" />
                </Link>

                <div className="hidden sm:flex sm:justify-around sm:items-center sm:w-1/2">
                    <Link className="text-alternateSecondary font-semibold" to="/category/placas">Placas</Link>
                    <Link className="text-alternateSecondary font-semibold" to="/category/perfiles">Perfiles</Link>
                    <Link className="text-alternateSecondary font-semibold" to="/category/accesorios">Accesorios</Link>
                </div>

                <Link className="flex text-alternateSecondary justify-center items-center ml-auto sm:ml-0" to="/cart">
                    <CartWidget />
                </Link>

                <div className="sm:hidden flex text-alternateSecondary justify-center items-center ml-4">
                    <i class="fas fa-bars cursor-pointer text-2xl"></i>
                </div>

            </div>

        </nav>


    );

}

export default NavBar;