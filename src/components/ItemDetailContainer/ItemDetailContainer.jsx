import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";

/* Firebase */
import { getDoc, doc } from "firebase/firestore";
import { db } from '../../services/firebase/firebaseConfig'

function ItemDetailContainer() {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    var { itemId } = useParams();

    useEffect(() => {

        setLoading(true);

        const docRef = doc(db, "products", itemId);

        getDoc(docRef)
            .then(response => {
                const data = response.data();
                const productAdapted = { id: response.id, ...data };
                setProduct(productAdapted);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [itemId])

    return (

        <>

            {loading

                ?

                <h4 className="loading">Cargando...</h4>

                :

                <div className="item-detail-container">

                    <ItemDetail product={product} />

                </div>

            }

        </>


    );

}

export default ItemDetailContainer;