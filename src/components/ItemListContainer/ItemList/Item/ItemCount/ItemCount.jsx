import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {

    const [quantity, setQuantity] = useState(initial);

    function increment() {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    function decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (

        <div className="counter">

            <div className="controls">

                <p className="qty">Cantidad: {quantity}</p>
                <button className="increment" onClick={increment}>+</button>
                <button className="decrement" onClick={decrement}>-</button>

            </div>

            <button className="add-to-cart" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>

        </div>

    );

}

export default ItemCount;