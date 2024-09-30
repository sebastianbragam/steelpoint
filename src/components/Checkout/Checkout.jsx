import { useContext, useState } from "react";
import { cartContext } from "../../context/CartProvider";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { Link } from "react-router-dom";
import { documentId, Timestamp, writeBatch } from "firebase/firestore";

/* Firebase */
import { getDocs, addDoc, collection, query, where } from "firebase/firestore";
import { db } from '../../services/firebase/firebaseConfig'

function Checkout() {

    const { cartItems, totalCost, clearCart } = useContext(cartContext);

    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const createOrder = async ({ name, phone, email }) => {

        setLoading(true);

        try {

            const objOrder = {

                buyer: {

                    name, phone, email

                },

                items: cartItems,
                total: totalCost(),
                date: Timestamp.fromDate(new Date())

            }

            const batch = writeBatch(db);

            const outOfStock = [];

            const ids = cartItems.map(prod => prod.id);

            const productsRef = collection(db, 'products');

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));

            const { docs } = productsAddedFromFirestore;

            docs.forEach(doc => {

                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cartItems.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {

                    batch.update(doc.ref, { stock: stockDb - prodQuantity })

                } else {

                    outOfStock.push({ id: doc.id, ...dataDoc });

                }

            });

            if (outOfStock.length === 0) {

                await batch.commit();

                const orderRef = collection(db, 'orders');

                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);

                clearCart();

            }

        } catch (error) {

            console.log(error);

        } finally {

            console.log(orderId)
            setLoading(false);

        }

    }

    if (loading) {

        return (

            <>

                <h2 className="checkout">Checkout</h2>

                <div className="no-cart">
                    <h4>{"Obteniendo detalles de su orden..."}</h4>
                </div>

            </>

        );

    }

    if (orderId) {

        return (

            <>

                <h2 className="checkout">Checkout</h2>

                <div className="no-cart">
                    <h4>{"El ID de su orden es: " + orderId}</h4>
                    <Link to="/" className="back-home">Realizar nueva compra</Link>
                </div>

            </>

        );

    }

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
                        <CheckoutForm onConfirm={createOrder} />
                        <Link className="back" to="/cart">Volver al carrito</Link>
                    </div>

            }

        </>

    );

}

export default Checkout;