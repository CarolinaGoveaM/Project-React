import React from 'react'
import { db } from "../services/firebase/firebase"
import { collection, addDoc, doc, writeBatch, Timestamp, getDoc } from 'firebase/firestore'
import { useState, useNavigate } from 'react'
// import { useCartContext } from '../Components/Context/CartContext';

const Form = () => {
    const [itemsCart, setItemsCart] = useState([]);
    const [loadingOrder, setLoadingOrder] = useState(false);
    let navigate = useNavigate();
    const [datos, setDatos] = useState({
        name: "",
        phone: "",
        email: "",
    })

    const handleForm = (event) => {

        setDatos({
            ...datos,
            [event.target.name]: event.target.value

        })
    }

    const mapProducts = itemsCart.map((e) => {
        return { id: e.id, name: e.name, price: e.price, quantity: e.quantity, stock: e.stock }
    })


    const enviar = (e) => {
        e.preventDefault()
        setLoadingOrder(true);

        const objetoProducto = {
            buyer: { name: datos.name, phone: datos.phone, email: datos.email },
            items: mapProducts,
            date: Timestamp.fromDate(new Date()),
            
        }

        const batch = writeBatch(db);
        const outOfStock = [];

        objetoProducto.items.forEach((prod) => {
            getDoc(doc(db, "items", prod.id)).then((documentSnapshot) => {
                if (documentSnapshot.data().stock >= prod.quantity) {
                    batch.update(doc(db, "items", documentSnapshot.id), {
                        stock: documentSnapshot.data().stock - prod.quantity
                    });
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                }

            })
        })

        if (outOfStock.length === 0) {
            addDoc(collection(db, "orders"), objetoProducto).then(({ id }) => {
                batch.commit().then(() => {
                    console.log(`el num de orden es ${id}`)
                })
            })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    setTimeout(() => {
                        navigate('/dashboard');
                        setItemsCart([])
                        window.localStorage.removeItem('carrito')
                    }, 1000);
                });
        }
    }
    return (
        <div>
            {!loadingOrder ?
                (<div className='container'>
                    <h2>COMPLETA EL FORMULARIO</h2>
                    <form onSubmit={enviar} >
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                onChange={handleForm}
                                className="form-control"
                                name="name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={handleForm}
                                name="phone" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                onChange={handleForm}
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name="email"
                            />
                            <div id="emailHelp">We'll never share your email with anyone else.</div>
                        </div>
                        <button
                            disabled={
                                itemsCart?.length === 0 ||
                                datos.name === '' ||
                                datos.email === '' ||
                                datos.phone === ''
                            }
                            type='submit'
                            >CONFIRMAR COMPRA</button>
                    </form>
                </div>) : (
                    <div className='container'>
                        <h1>
                            Estamos generando su orden.
                        </h1>
                    </div>
                )}

        </div>
    )
}

export default Form