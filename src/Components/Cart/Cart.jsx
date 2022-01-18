import React, {useState} from 'react';
import useCartContext from '../Context/CartContext';
import { addDoc, collection, Timestamp, doc, writeBatch, getDoc} from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';
import Form from '../Cart/Form';
import { Link } from 'react-router-dom';
import './style.css';


const Cart = () => {
    const [processingOrder, setProcessingOrder] = useState(false);
    const [orderForm, setOrderForm] = useState(false);
    const [orderId, setOrderId] = useState(null);

    const [buyer, setBuyer] = useState({
            name: '',
            phone: '',
            email:'',
        })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setBuyer (values => ({ ...values, [name]: value}));
    }

    const cartTotalPrice = () => {
        return itemsCart.reduce ((total, cartItem) => {
            return (total + cartItem.quantity * cartItem.price)
        }, 0);
    }

    const { itemsCart, clear, removeItem } = useCartContext();

    const confirmOrder = (e) => {
        e.preventDefault();
        setProcessingOrder(true)

        const order = {
            buyer: {name: buyer.name, phone: buyer.phone, email: buyer.email},
            items: itemsCart,
            date: Timestamp.fromDate(new Date()),
            total: cartTotalPrice(),
        }

        const batch = writeBatch(db);
        const outOfStock = [];

        order.items.forEach((prod) => {
            getDoc(doc(db, 'items', prod.id)).then((documentSnapshot) => {
                if (documentSnapshot.data().stock >= prod.quantity ) {
                    batch.update(doc(db, 'items', documentSnapshot.id), {
                        stock: documentSnapshot.data().stock - prod.quantity
                    });
                } else{
                    outOfStock.push({id: documentSnapshot.id, ...documentSnapshot.data()})
                };
            });
        });

        if(outOfStock.length === 0){
            addDoc(collection(db, 'orders'), order).then(({id}) => {
                    batch.commit().then(() => {
                    console.log('Se ha generado la orden: ' + id);
                    setOrderId(id);
                    clear();
                    setProcessingOrder(false);
                });
            });
            };
        };

    if(processingOrder) {
        return <h1>Procesando compra...</h1>
    }

    if (orderId){
        return (
            <div>
                <h1>Tu compra se realizó correctamente</h1>
                <p>Tu Ticket de compra es: <strong> ID Nº {orderId}</strong></p>
                <Link className='btnLinkTicket' to="/">Seguir comprando</Link>
            </div>
        )
    };

    if (itemsCart.length === 0) {return (
        <div>
            <p>Tu carrito está vacío</p>
        </div>
    )
    }else {
        return (
            <>
            <table className="tableCart">
                        <thead>
                            <tr>
                                <th className='columnTable'>Imagen</th>
                                <th className='columnTable'>Producto</th>
                                <th className='columnTable'>Description</th>
                                <th className='columnTable'>Cantidad</th>
                                <th className='columnTable'>Precio</th>
                                <th><button className="btnVaciar" onClick={() => clear()}>Vaciar Carrito</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemsCart.map((item) => {
                                return (<tr key={item.id}>
                                    <td className='columnTable'> <img className='imgCart' src={item.img} alt="producto"/> </td>
                                    <td className='columnTable'> {item.name}</td>
                                    <td className='columnTable'> {item.description} </td>
                                    <td className='columnTable'> {item.quantity} </td>
                                    <td className='columnTable'> $ {item.quantity * item.price} </td>
                                    <td><button className='btnEliminar' onClick={() => removeItem(item.id)}>X</button></td>
                                </tr>
                            )
                            })}
                        </tbody>
                    </table>

                    { orderForm? 
                    
                        <Form
                            confirmOrder={confirmOrder}
                            handleChange={handleChange}
                            buyer={buyer}
                        />
                    :
                    <div>
                        <button className='btnOrder' type="button" onClick={() => setOrderForm(true)}>Crear Orden de Compra</button>
                    </div>
                    }
                    </>
        )
    }
}


export default Cart
