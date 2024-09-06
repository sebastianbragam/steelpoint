import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../asyncmock";
import ItemDetail from "./ItemDetail/ItemDetail";

function ItemDetailContainer() {

    const [product, setProduct] = useState([]);
    var { itemId } = useParams();
    itemId = Number(itemId);

    useEffect(() => {

        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            });

    }, [itemId])

    return (

        <div className="item-detail-container">

            <ItemDetail {...product} />

        </div>

    );

}

export default ItemDetailContainer;