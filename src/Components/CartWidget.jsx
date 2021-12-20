import React from 'react';
import useCartContext from './CartContext';

const CartWidget = () => {
    const { getQuantityCart } = useCartContext();

    return (
        <div className="containerImgCart">
            <img src={'./carrito.png'} alt="carrito" className="imgCarrito"/>
            { getQuantityCart() > 0 && 
            <div>
                <p>{getQuantityCart()}</p>
            </div>
            }
        </div>
    );
}

export default CartWidget