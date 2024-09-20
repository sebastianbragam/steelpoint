import { useContext } from "react";
import { cartContext } from "../../../context/CartProvider";

function CartItem({ item }) {

    const { removeFromCart, addOne, removeOne } = useContext(cartContext);

    return (

        <div className="cart-item">

            <h4>{item.name}</h4>
            <p className="quantity">Cantidad: {item.quantity}</p>

            <div className="quantity">
                <button className="add" onClick={() => addOne(item)}>+</button>
                <button className="remove" onClick={() => removeOne(item)}>-</button>
            </div>

            <p className="price">Precio: ${item.price}</p>
            <p className="price">Subtotal: ${item.price * item.quantity}</p>
            <button className="remove-from-cart" onClick={() => removeFromCart(item)}>X</button>

        </div >

    );

}

export default CartItem;