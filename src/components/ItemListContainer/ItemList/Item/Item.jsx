function Item ({id, name, price, category, img, stock, description}) {

    return (

        <article className="item-card">
            <h4>{name}</h4>
            <img src={img} alt={name} ></img>
            <p className="price">Precio: ${price}</p>
            <p className="stock">Stock disponible: {stock}</p>
        </article>

    );

}

export default Item;