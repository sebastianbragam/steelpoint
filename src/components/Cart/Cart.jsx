import { useContext } from "react";
import { cartContext } from "../../context/CartProvider";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

function Cart() {

    const { cartItems, totalCost, clearCart } = useContext(cartContext);

    return (

        <>

            {

                cartItems.length === 0

                    ?

                    <div className="no-cart"> 
                        <h4>{"No hay items en el carrito :("}</h4>
                        <Link to="/" className="back-home">Ver productos</Link>
                    </div>

                    :

                    <div className="cart">
                        {cartItems.map(item => <CartItem key={item.id} item={item} />)}
                        <p className="total">Total: ${totalCost()}</p>
                        <button className="buy">Terminar compra</button>
                        <Link className="remove-all" to="/" onClick={() => clearCart()}>Vaciar carrito</Link>
                    </div>

            }

        </>

    );

}

export default Cart;