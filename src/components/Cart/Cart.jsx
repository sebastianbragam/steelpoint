import { useContext } from "react";
import { cartContext } from "../../context/CartProvider";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

function Cart() {

    const { cartItems, totalCost, clearCart } = useContext(cartContext);

    return (

        <>

            <h2 className="text-center text-2xl font-bold m-8">Carrito</h2>

            {

                cartItems.length === 0

                    ?

                    <div className="flex flex-col flex-grow ms-8 me-8">
                        <h4 className="text-center">{"No hay items en el carrito :("}</h4>
                        <Link className="bg-secondaryColor text-alternateSecondary font-semibold p-4 rounded-md mt-16 w-full text-center text-md sm:text-lg" to="/">Ver productos</Link>
                    </div>

                    :

                    <div className="flex flex-col flex-grow ms-8 me-8">
                        {cartItems.map(item => <CartItem key={item.id} item={item} />)}
                        <p className="w-full text-xl font-semibold text-right pr-4 mt-2 mb-2">Total: ${totalCost().toLocaleString('es-AR')}</p>
                        <Link className="bg-secondaryColor rounded text-center text-lg text-alternateSecondary font-semibold p-4 mt-4 mb-4" to="/checkout">Terminar compra</Link>
                        <Link className="bg-cancel rounded text-center text-lg text-alternateSecondary font-semibold p-4" to="/" onClick={() => clearCart()}>Vaciar carrito</Link>
                    </div>

            }

        </>

    );

}

export default Cart;