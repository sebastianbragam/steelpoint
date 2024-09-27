import { useContext } from "react";
import { cartContext } from "../../context/CartProvider";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { Link } from "react-router-dom";

function Checkout() {

    const { cartItems } = useContext(cartContext);

    return (

        <>

            <h2 className="checkout">Checkout</h2>

            {

                cartItems.length === 0

                    ?

                    <div className="no-cart"> 
                        <h4>{"No hay items en el carrito, no es posible realizar el checkout :("}</h4>
                        <Link to="/" className="back-home">Ver productos</Link>
                    </div>

                    :

                    <div className="checkout">
                        <CheckoutForm onConfirm={(datos) => console.log(datos)} />
                        <Link className="back" to="/cart">Volver al carrito</Link>
                    </div>

            }

        </>

    );

}

export default Checkout;