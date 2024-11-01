import { useContext } from "react";
import { cartContext } from "../../../context/CartProvider";


function CartWidget() {

    const { cartItems } = useContext(cartContext);

    return (

        <div className="flex justify-center items-center w-8">
            <i className="fa-solid fa-cart-shopping text-2xl">
                <p className={cartItems.length === 0 ? "hidden" : "text-xs font-bold text-center text-main w-4 relative bottom-7 mb-[-1rem] left-[0.400rem]"}>{cartItems.length}</p>
            </i>
        </div>

    );

}

export default CartWidget;