import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { collection,  getDocs, orderBy , query} from 'firebase/firestore'
import { db } from '../services/firebase/firebase'
import TicketsMessage from './TicketsMessage'

const Dashboard = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {

        getDocs(query(collection(db, "orders")), orderBy("data")).then((querySnapshot) => {
            const orders = querySnapshot.docs.map((doc) => {
            const data = doc.data();
                const { date } = data;
                console.log(date);
                const fecha = new Date(date.seconds * 1000);
                const normalizedCreatedAt = new Intl.DateTimeFormat('es-ES', {
                    dateStyle: 'full',
                    timeStyle: 'short',
                }).format(fecha);
                return { 
                    id: doc.id,
                    ...data,
                    date: normalizedCreatedAt,
                }
        })  
            setOrder(orders)
        })
    }, []);

    return (
        <div>
            {order.length === 0 ? (
                    <h1>Aún no tenés órdenes de compra</h1>
                ) : (
                    <>
                        <h1 style={{ textAlign: 'center' }}>
                            Tus tickets de compra 😊
                        </h1>
                        {order.map((ord) => (
                            <TicketsMessage key={ord.id} ord={ord} />
                        ))}
                        <div className='container'>
                        <Link to="/" className="btn btn-primary" >Volver al Home</Link>
                        </div>
                    </>
                )}
                
        </div>
    )
}

export default Dashboard