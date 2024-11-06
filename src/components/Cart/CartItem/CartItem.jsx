import { useContext } from "react";
import { cartContext } from "../../../context/CartProvider";

function CartItem({ item }) {

    const { removeFromCart, addOne, removeOne } = useContext(cartContext);

    return (

        <div className="flex flex-col lg:flex-row justify-between items-center w-full bg-alternate p-4 mb-2 rounded text-lg">

            <h4 className="font-bold text-xl lg:flex-grow mb-2 lg:mb-0 self-start">{item.name}</h4>

            <div className="flex flex-row justify-between items-center bg-alternate rounded text-lg self-end w-full lg:w-1/2">

                <div className="flex flex-row ml-2 mr-auto lg:mr-0">
                    <p>Cantidad: {item.quantity}</p>
                    <button className="ml-4 bg-secondaryColor rounded text-alternateSecondary font-semibold ps-2 pe-2" onClick={() => addOne(item)}>+</button>
                    <button className="ml-2 bg-secondaryColor rounded text-alternateSecondary font-semibold ps-2 pe-2" onClick={() => removeOne(item)}>-</button>
                </div>

                <p className="hidden lg:block lg:ml-6">Precio: ${item.price.toLocaleString('es-AR')}</p>
                <p className="ml-6 self-start">Subtotal: ${(item.price * item.quantity).toLocaleString('es-AR')}</p>
                <button className="ml-6 bg-cancel rounded text-alternateSecondary font-semibold ps-2 pe-2" onClick={() => removeFromCart(item)}>X</button>

            </div>

        </div >

    );

}

export default CartItem;