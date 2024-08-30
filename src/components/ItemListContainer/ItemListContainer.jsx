import { useState, useEffect } from "react";
import { getProducts } from "../../assets/asyncmock";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {

    return (

        <div className="item-list-container">

            <ItemList />

        </div>

    );

}

export default ItemListContainer;