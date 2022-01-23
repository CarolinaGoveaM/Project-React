import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection, getDocs, query, where} from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState ([]);
    const { categoryId } = useParams();
    const [loading, setLoading] = useState (true);

    useEffect (() => {
        if(!categoryId){
            setLoading(true);
                    getDocs(collection(db, 'items')).then((querySnapshot) => {
                        const items = querySnapshot.docs.map(doc => {
                            return { id: doc.id, ...doc.data()};
                        });
                        setItems(items);
                    }).catch((error) => {
                        console.log('Error', error)
                    }).finally(() => setLoading(false));
        } else{
            setLoading(true);
            getDocs(query(collection(db, 'items'), where('category', '==', categoryId))).then((querySnapshot) => {
                const items = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data()};
                });
                setItems(items);
            }).catch((error) => {
                console.log('Error', error)
            }).finally(() => setLoading(false));
        }
    }, [categoryId]);

    if(loading) {
        return <h3>Loading</h3>
    }

    return (
        <section>
            <div>
                <h1>{greeting}</h1>
            </div>
            <div>
                <ItemList items={items}/>
            </div>
        </section>
    )
}

export default ItemListContainer
