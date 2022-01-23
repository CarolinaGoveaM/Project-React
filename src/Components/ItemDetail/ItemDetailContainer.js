import React,{useState, useEffect} from 'react';
import './style.css';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';

const ItemDetailContainer = () => {
    const [items, setItems] = useState (null);
    const { id } = useParams();

    useEffect (() => {
        getDoc(doc(db, 'items', id)).then((querySnapshot) =>{
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            setItems(product);
        }).catch((error) => {
            console.log('Error', error)}).finally(
                    function () {
                        console.log("Promesa Finalizada");
                    });
    }, [id]);

    return (
        <section>
            <div>
               {items !== null ?
               <ItemDetail
                    id={items.id}
                    name={items.name}
                    price={items.price}
                    description={items.description}
                    img={items.img}
                    stock={items.stock}
                />
            
                : <p>Cargando productos...</p>

            }

            </div>
        </section>
    )
}

export default ItemDetailContainer
