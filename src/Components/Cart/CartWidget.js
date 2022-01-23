import React from 'react';
import './style.css';
import useCartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { getQuantityCart } = useCartContext();

    return (
        <div className="containerImgCartW">
            <Link to="/cart"><img src={'../carrito.png'} alt="carrito" className="imgCartW"/> </Link>
            { getQuantityCart() > 0 && 
            <div>
                <span className='numberCartW'>{getQuantityCart()}</span>
            </div>
            }
        </div>
    );
}

export default CartWidget