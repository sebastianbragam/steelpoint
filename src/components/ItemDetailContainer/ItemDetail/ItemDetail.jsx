import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../ItemListContainer/ItemList/Item/ItemCount/ItemCount";

function ItemDetail({ id, name, price, category, img, stock, description }) {

    const [queantityAdded, setQuantityAdded] = useState(0);

    function handleOnAdd(quantity) {
        setQuantityAdded(quantity);
    }

    return (

        <div className="image-details">

            <img src={img} alt={name} ></img>

            <div className="item-details">

                <h4>{name}</h4>
                <p className="description">{description}</p>

                <div className="price-qty">
                    <p className="price">Precio: ${price}</p>
                    <p className="stock">Stock disponible: {stock}</p>

                    {
                        queantityAdded > 0 ? (

                            <Link to={'/cart'} className="to-cart">Terminar compra</Link>

                        ) : (

                            < ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />

                        )

                    }

                </div>

            </div>

        </div>

    );

}

export default ItemDetail;