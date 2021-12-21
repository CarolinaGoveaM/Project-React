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
                                <th>Imagen</th>
                                <th>Producto</th>
                                <th>Description</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th><button className="btnCart" onClick={() => clear()}>Vaciar Carrito</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemsCart.map((item) => {
                                return (<tr key={item.id}>
                                    <td> {item.img}</td>
                                    <td> {item.name}</td>
                                    <td> {item.description} </td>
                                    <td> {item.price} </td>
                                    <td> $ {item.quantity * item.price} </td>
                                    <td><button onClick={() => removeItem(item.id)}>Eliminar</button></td>
                                </tr>
                            
                                
                            ) })}
                        </tbody>
                    </table>
        )

    }
}

export default Cart
