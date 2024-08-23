import CartWidget from "./CartWidget/CartWidget";

function NavBar() {

    return (

        <nav className="navbar">

            <div className="bar-items">

                <div className="logo">
                    <img src="/steelpoint.png" alt="logo"></img>
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