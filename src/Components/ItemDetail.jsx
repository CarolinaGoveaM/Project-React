import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = (props) => {
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

                <div className="countContainer">
                    <ItemCount stock={props.stock} initial={1}/>
                </div>

                </div>
            </div>
        </div>
    )
}

export default ItemDetail
