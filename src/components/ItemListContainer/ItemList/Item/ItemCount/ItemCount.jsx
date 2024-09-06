import { useState } from "react";

function ItemCount({stock, initial, onAdd}) {

    const [quantity, setQuantity] = useState(initial);

    function increment() {
        if(quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    function decrement() {
        if(quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    return(

        <div className="counter">
            
        </div>

    );

}

export default ItemCount;