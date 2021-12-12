import React from 'react';
import Item from './Item';

const itemList = ({items}) => {
    return (
        <section>
            <div>
                {items.map((item, i) => 
                    <Item 
                        key={i}
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        stock={item.stock} />
                )}
            </div>
        </section>
    )
};

export default itemList
