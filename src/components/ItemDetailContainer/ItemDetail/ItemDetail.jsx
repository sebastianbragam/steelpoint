import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../../context/CartProvider";
import ItemCount from "./ItemCount/ItemCount";

function ItemDetail({ product }) {

    const { addToCart } = useContext(cartContext);
    const [quantityAdded, setQuantityAdded] = useState(0);

    function handleOnAdd(product, quantity) {
        setQuantityAdded(quantity);
        addToCart(product, quantity);
    }

    return (

        <div className="image-details">

            <img src={product.img} alt={product.name} ></img>

            <div className="item-details">

                <h4>{product.name}</h4>
                <p className="description">{product.description}</p>

                <div className="price-qty">
                    <p className="price">Precio: ${product.price}</p>
                    <p className="stock">Stock disponible: {product.stock}</p>

                    {
                        quantityAdded > 0 ? (

                            <Link to={'/cart'} className="to-cart">Terminar compra</Link>

                        ) : (

                            < ItemCount product={product} initial={1} onAdd={handleOnAdd} />

                        )

                    }

                </div>

            </div>

        </div>

    );

}

export default ItemDetail;