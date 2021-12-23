import React from 'react';
import './style.css'
import { useState } from 'react';
import ItemCount from '../Count/ItemCount';
import { Link } from 'react-router-dom';
import useCartContext from '../Context/CartContext';

 function ItemDetail (props) { 
    const [ cantidadInCart, setCantidadInCart ] = useState(0);
    const { addItem, isInCart } = useCartContext();

    function onAdd(cantidad) {
        // setCantidadInCart(cantidad);
        addItem(props, cantidad);
        alert(`Agregaste ${cantidad} productos al carrito`);
    }

    return (
        <div>
            <div className="containerCard">
                <div className="card">
                <img src={props.img} alt="producto" className="imgCard"/>
                <h2 className="titleCard">{props.name}</h2>
                <h3 className="priceCard">Precio ${props.price}</h3>
                <p className="descripCard"> Descripción del producto:
                <br />{props.description}</p>
                <p className="parrafCard"> Quedan {props.stock} en stock</p>

                {isInCart(props.id) ?
                    <Link className='btnFinish' to="/cart"> Terminar Compra </Link>
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
