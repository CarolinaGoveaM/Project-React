import React from 'react'

const Item = (props) => {
    return (
        <div className="containerCart">
            <div className="cart">
                <img src={props.img} alt="producto" className="imgCart"/>
                <h2 className="titleCart">{props.name}</h2>
                <h3 className="priceCart">$ {props.price}</h3>
                <button className="btnCart">Más información</button>
                <p className="parrafCart">{props.stock}</p>
            </div>
        </div>
    )
}

export default Item
