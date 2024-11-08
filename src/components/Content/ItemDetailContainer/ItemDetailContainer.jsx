import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";

/* Firebase */
import { getDoc, doc } from "firebase/firestore";
import { db } from '../../../services/firebase/firebaseConfig'

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

                <h4 className="text-center text-2xl font-bold m-auto">Cargando...</h4>

                :

                <div className="flex flex-col flex-grow">

                    <h2 className="text-center text-2xl font-bold m-8">Detalle del producto</h2>

                    <ItemDetail product={product} />

                </div>

            }

        </>


    );

}

export default ItemDetailContainer;