import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList/ItemList";

/* Firebase */
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from '../../services/firebase/firebaseConfig'

function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {

        setLoading(true);

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products');

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data();
                    return {id: doc.id, ...data};
                });
                setProducts(productsAdapted);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [categoryId]);

    return (

        <>

            {loading

                ?

                <h4 className="text-center text-2xl font-bold m-auto">Cargando...</h4>

                :

                <div className="flex flex-col flex-grow">

                    <h2 className="text-center text-2xl font-bold m-8">{greeting + (categoryId ? categoryId : "")}</h2>

                    {products.length === 0 ? <h4 className='m-auto text-center'>{'No existen productos en la categoría ingresada :('}</h4> : <ItemList products={products} />}

                </div>

            }

        </>

    );

}

export default ItemListContainer;