import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";

function ItemListContainer( {greeting} ) {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        getProducts()
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

    return (

        <div className="item-list-container">

            <h2>{greeting}</h2>

            <ItemList products={products} />

        </div>

    );

}

export default ItemListContainer;