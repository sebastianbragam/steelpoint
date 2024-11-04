import { Link } from "react-router-dom";

function Item ({id, name, price, img, stock }) {
    
    const imagePath = new URL(`/src/assets/images/products/${img}`, import.meta.url).href;

    return (

        <Link className="flex flex-col justify-between items-left bg-alternate p-3 mb-4 last:mb-0 sm:mb-0 rounded-xl" to={"/item/" + id}>

            <h4 className="text-lg font-semibold">{name}</h4>
            <img className="self-center border-solid border-2 border-alternateSecondary rounded-lg mt-2 mb-2 w-[95%]" src={imagePath} alt={name}></img>
            <p className="text-lg font-semibold">${price.toLocaleString('es-AR')}</p>
            <p className="">Stock disponible: {stock}</p>
            
        </Link>

    );

}

export default Item;