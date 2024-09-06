import ItemCount from "../../ItemListContainer/ItemList/Item/ItemCount/ItemCount";

function ItemDetail({ id, name, price, category, img, stock, description }) {

    return (

        <div className="image-details">

            <img src={img} alt={name} ></img>

            <div className="item-details">

                <h4>{name}</h4>
                <p className="description">{description}</p>

                <div className="price-qty">
                    <p className="price">Precio: ${price}</p>
                    <p className="stock">Stock disponible: {stock}</p>
                    <ItemCount />
                </div>

            </div>

        </div>

    );

}

export default ItemDetail;