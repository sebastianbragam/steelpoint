import { useState } from "react";

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

        <div className="">

            <div className="flex flex-row items-center border-solid border-2 border-black rounded-md text-md sm:text-lg p-2">

                <p className="mr-auto">Cantidad: {quantity}</p>
                <button className="bg-secondaryColor text-alternateSecondary font-semibold m-1 rounded w-10 h-10 mr-2" onClick={increment}>+</button>
                <button className="bg-secondaryColor text-alternateSecondary font-semibold m-1 rounded w-10 h-10" onClick={decrement}>-</button>

            </div>

            <button className={product.stock ? "bg-secondaryColor text-alternateSecondary font-semibold p-4 rounded-md mt-2 w-full text-md sm:text-lg" : "bg-gray-400 text-alternateSecondary font-semibold p-4 rounded-md mt-2 w-full text-md sm:text-lg cursor-default"} onClick={() => onAdd(product, quantity)} disabled={!product.stock}>{product.stock ? "Agregar al carrito" : "Producto sin stock"}</button>

        </div>

    );

}

export default ItemCount;