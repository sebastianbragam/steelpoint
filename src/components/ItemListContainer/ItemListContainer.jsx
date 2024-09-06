import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import ItemList from "./ItemList/ItemList";

function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {

        if (!categoryId) {

            getProducts()
                .then(response => {
                    setProducts(response);
                })
                .catch(error => {
                    console.error(error);
                });

        } else {

            getProductsByCategory(categoryId)
                .then(response => {
                    setProducts(response);
                })
                .catch(error => {
                    console.error(error);
                });

        }

    }, [categoryId]);

    return (

        <div className="item-list-container">

            <h2>{greeting + (categoryId ? categoryId : "")}</h2>

            <ItemList products={products} />

        </div>

    );

}

export default ItemListContainer;