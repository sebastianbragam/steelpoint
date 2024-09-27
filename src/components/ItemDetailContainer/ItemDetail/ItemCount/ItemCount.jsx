import { useContext, useState } from "react";

function ItemCount({ product, initial, onAdd }) {

    const [quantity, setQuantity] = useState(initial);

    function increment() {
        if (quantity  < product.stock) {
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

            <button className={product.stock ? "add-to-cart" : "no-stock"} onClick={() => onAdd(product, quantity)} disabled={!product.stock}>{product.stock ? "Agregar al carrito" : "Producto sin stock"}</button>

        </div>

    );

}

export default ItemCount;