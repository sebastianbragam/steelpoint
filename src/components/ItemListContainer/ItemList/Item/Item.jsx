import { Link } from "react-router-dom";

function Item ({id, name, price, img, stock }) {
    
    const imagePath = new URL(`/src/assets/images/products/${img}`, import.meta.url).href;

    return (

        <Link className="item-card" to={"/item/" + id}>

            <h4>{name}</h4>
            <img src={imagePath} alt={name} ></img>
            <p className="price">Precio: ${price}</p>
            <p className="stock">Stock disponible: {stock}</p>
            
        </Link>

    );

}

export default Item;