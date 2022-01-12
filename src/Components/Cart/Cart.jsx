import React, {useState, useRef} from 'react';
import useCartContext from '../Context/CartContext';
// import CartContext from '../Context/CartContext';
import { addDoc, collection, Timestamp, doc, writeBatch, getDoc} from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';
import Form from '../Cart/Form';


const Cart = () => {
    const [processingOrder, setProcessingOrder] = useState(false);
    const [contact, setContact] = useState(
        {
            name: '',
            phone: '',
            email:'',
        })


    const { itemsCart, clear, removeItem } = useCartContext();
    const { user } = useCartContext();
    const contactFormRef = useRef();

    const confirmOrder = () => {
        setProcessingOrder(true)

        const objOrder = {
            buyer: user,
            items: itemsCart,
            name: contact.name,
            phone: contact.phone,
            email: contact.email,
            date: Timestamp.fromDate(new Date()),
        }

        const batch = writeBatch(db);
        const outOfStock = [];

        objOrder.items.forEach((prod) => {
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
            addDoc(collection(db, 'orders'), objOrder).then(({id}) => {
                
                batch.commit().then(() => {
                    console.log({id});
                });
            }).catch((error) => {
                console.log('Error', error)
            }).finally(() => {
                    setProcessingOrder(false)
                    clear();
            })
        };
    };

    if(processingOrder) {
        return <h1>Procesando compra</h1>
    }

    if (itemsCart.length === 0) {return (
        <div>
            <p>Tu carrito está vacío</p>
        </div>
    )
    }else {
        return (

            
            
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
                            
                                
                            ) })}
                        </tbody>
                    </table>
        )

    }
}

export default Cart
