import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const urlItem = `/product/${props.id}`

    return (
        <div className="containerCartItem">
            <div className="cartItem">
                <img src={props.img} alt="producto" className="imgCartItem"/>
                <h2 className="titleCartItem">{props.name}</h2>
                <h3 className="priceCartItem">Precio $ {props.price}</h3>
                <Link to={urlItem}><button className="btnCart">Ver Producto</button></Link>
                {/* <p className="parrafCart">Quedan {props.stock} en stock</p> */}
            </div>
        </div>
    )
}

export default Item
