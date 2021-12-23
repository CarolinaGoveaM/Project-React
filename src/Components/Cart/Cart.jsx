import React from 'react';
import useCartContext from '../Context/CartContext';

const Cart = () => {

    const { itemsCart, clear, removeItem } = useCartContext();
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
