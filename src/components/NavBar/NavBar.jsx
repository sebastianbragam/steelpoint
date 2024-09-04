import CartWidget from "./CartWidget/CartWidget";
import logo from "/steelpoint.png";

function NavBar() {

    return (

        <nav className="navbar">

            <div className="bar-items">

                <div className="logo">
                    <img src={logo} alt="logo"></img>
                </div>

                <div className="categories">
                    <button>Perfiles</button>
                    <button>Placas</button>
                    <button>Accesorios</button>
                </div>

                <div className="cart">
                    <CartWidget />
                </div>

            </div>

        </nav>


    );

}

export default NavBar;