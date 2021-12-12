import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
    const urlItem = `/product/${props.id}`

    return (
        <div className="containerCart">
            <div className="cartItem">
                <img src={props.img} alt="producto" className="imgCartItem"/>
                <h2 className="titleCart">{props.name}</h2>
                <h3 className="priceCartItem">$ {props.price}</h3>
                <Link to={urlItem}><button className="btnCart">Más información</button></Link>
                <p className="parrafCart">Quedan {props.stock} en stock</p>
            </div>
        </div>
    )
}

export default Item
