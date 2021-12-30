import React from 'react';
import { useCartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
// import { addDoc, collection, doc, writeBatch, Timestamp, getDoc } from 'firebase/firestore';
// import { db } from '../../services/firebase/firebase';

const Cart = () => {

    // const [processingOrder, setProcessingOrder] = useState (false);
    // const [contact, setContact] = useState ({
    //     name: '',
    //     phone: '',
    //     email: '',
    // });

    // const { user } = useCartContext ();
    // const contactFormRef = useRef ();

    // const confirmOrder = () => {
    //     setProcessingOrder(true)

    //     const objOrder = {
    //         buyer: user,
    //         items: itemsCart,
    //         date: Timestamp.fromDate(new Date()),
    //         total: item.quantity * item.price,

    //     }
    // }


    const { itemsCart, clear, removeItem } = useCartContext();

    // const { item } = itemsCart;

    // const [ processingOrder, setProcessingOrder ] = useState(false);

    // const formName = useRef('');
    // const formPhone = useRef('');
    // const formEmail = useRef('');

    // const confirmOrder = () => {

    //     const objOrder = {
    //         buyer: {
    //             name: formName.current.value,
    //             phone: formPhone.current.value,
    //             email: formEmail.current.value
    //         },
    //         items: item,
    //         total: item.quantity * item.price,
    //     }

    //     const batch = writeBatch(db);
    //     const outOfStock = [];

    //     objOrder.items.forEach((prod) => {
    //         getDoc(doc(db, 'itemsCart', prod.id)).then((documentSnapshot) => {
    //             if(documentSnapshot.data().stock >= prod.quantity) {
    //                 batch.update(doc(db, 'itemsCart', documentSnapshot.id), {
    //                     stock: documentSnapshot.data().stock - prod.quantity
    //                 });
    //             } else {
    //                 outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data() });
    //             }
    //         });
    //     });

    //     if(outOfStock.length === 0){
    //         addDoc(collection(db, 'orders'), objOrder).then(({ id }) => {
    //             batch.commit().then(() => {
    //                 console.log(id); 
    //             });
    //         });
    //     }

    //     setTimeout(() => {
    //         clear();
    //     }, 1000);
    // }

    // useEffect(() => {
    //     setProcessingOrder(false);
    //     if(item.length === 0){
    //         setProcessingOrder(false);
    //     } else {
    //         setProcessingOrder(true);
    //     }
    // }, [item]);

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
                            <Link to="/Form">COMPRAR</Link>
                        </tbody>
                    </table>
        )

    }
}


export default Cart
