import { useContext } from "react";
import { cartContext } from "../../../context/CartProvider";


function CartWidget () {

    const { cartItems } = useContext(cartContext);

    return(

        <div className="cart-icon">
            <i className="fa-solid fa-cart-shopping"></i>
            <p className={cartItems.length === 0 ? "hidden" : "count" }>{cartItems.length}</p>
        </div>

    );

}

export default CartWidget;