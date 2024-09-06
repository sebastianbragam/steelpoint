import { Link } from "react-router-dom";

function Item ({id, name, price, category, img, stock, description}) {

    return (

        <Link className="item-card" to={"item/" + id}>
            <h4>{name}</h4>
            <img src={img} alt={name} ></img>
            <p className="price">Precio: ${price}</p>
            <p className="stock">Stock disponible: {stock}</p>
        </Link>

    );

}

export default Item;