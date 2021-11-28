import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
    return (
        <section>
            <div>
                <h1>{greeting}</h1>
            </div>
            <div>
                <ItemCount stock={8} initial={1}/>
            </div>
        </section>
    )
}

export default ItemListContainer
