import { createContext, useState } from "react";

export const cartContext = createContext([]);

function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, quantity) => {

        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart) {

            const newItems = cartItems.map((cartItem) => {

                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + quantity };
                } else {
                    return cartItem;
                }

            });

            setCartItems(newItems);

        } else {

            setCartItems([...cartItems, { ...item, quantity: quantity }]);

        }

    }

    const removeFromCart = (item) => {

        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart) {

            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));

        }

    }

    const totalCost = () => {

        const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        return total;

    }

    const clearCart = () => {
        setCartItems([]);
    }

    return (

        <cartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalCost, clearCart }}>
            {children}
        </cartContext.Provider>

    );

}

export default CartProvider;