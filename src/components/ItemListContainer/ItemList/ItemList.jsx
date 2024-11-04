import Item from "./Item/Item";

function ItemList ({products}) {

    return(

        <div className="flex flex-col m-8 mt-0 sm:grid sm:grid-cols-3 sm:gap-8">
            
            {products.map(prod => <Item key={prod.id} {...prod} />)}

        </div>

    );

}

export default ItemList;