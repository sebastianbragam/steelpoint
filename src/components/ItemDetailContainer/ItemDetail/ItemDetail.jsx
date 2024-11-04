import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../../context/CartProvider";
import ItemCount from "./ItemCount/ItemCount";

function ItemDetail({ product }) {

    const imagePath = new URL(`/src/assets/images/products/${product.img}`, import.meta.url).href;

    const { addToCart } = useContext(cartContext);
    const [quantityAdded, setQuantityAdded] = useState(0);

    function handleOnAdd(product, quantity) {
        setQuantityAdded(quantity);
        addToCart(product, quantity);
    }

    return (

        <div className="flex flex-col sm:flex-row rounded-xl ms-8 me-8 mb-8 p-8 bg-alternate">

            <img className="rounded-lg border-solid border-2 border-alternateSecondary sm:mr-8 shrink-0 w-full sm:w-5/12 h-auto" src={imagePath} alt={product.name} />

            <div className="flex flex-col">

                <h4 className="text-2xl font-bold mt-6 sm:mt-0 mb-4">{product.name}</h4>
                <p className="text-base sm:text-lg mb-6">{product.description}</p>

                <div className="flex flex-col mt-auto">
                    <p className="text-xl sm:text-2xl font-semibold mb-2">$ {product.price.toLocaleString('es-AR')}</p>
                    <p className="mb-2 text-md sm:text-lg">Stock disponible: {product.stock}</p>

                    {

                        quantityAdded > 0 ? (

                            <Link className="bg-secondaryColor text-alternateSecondary font-semibold p-4 rounded-md mt-16 w-full text-center text-md sm:text-lg" to={'/cart'}>Terminar compra</Link>

                        ) : (

                            <ItemCount product={product} initial={1} onAdd={handleOnAdd} />

                        )

                    }

                </div>

            </div>

        </div>

    );

}

export default ItemDetail;