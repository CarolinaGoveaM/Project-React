import React from 'react';
import './style.css'
import { useState } from 'react';
import ItemCount from '../Count/ItemCount';
import { Link } from 'react-router-dom';
import useCartContext from '../Context/CartContext';

const ItemDetail = (props) => { 
    const [ cantidadInCart, setCantidadInCart ] = useState(0);
    const { addItem } = useCartContext();

    function onAdd(cantidad) {
        setCantidadInCart(cantidad);
        addItem(props, cantidad);
        alert(`Agregaste ${cantidad} productos al carrito`);
    }

    return (
        <div>
            <div className="containerCart">
                <div className="cart">
                <img src={props.img} alt="producto" className="imgCart"/>
                <h2 className="titleCart">{props.name}</h2>
                <h3 className="priceCart">$ {props.price}</h3>
                <p className="descripCart"> Descripción del producto:
                <br />{props.description}</p>
                <p className="parrafCart"> Quedan {props.stock} en stock</p>

                {cantidadInCart ?
                    <Link className='btnTerminar' to="/cart"> Terminar Compra </Link>
                    :
                    <div className="countContainer">
                        <ItemCount stock={props.stock} initial={1} onAdd={onAdd}/>
                    </div>                
}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
