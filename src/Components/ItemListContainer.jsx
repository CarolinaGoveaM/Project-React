import React,{useState, useEffect} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

// DATA

const DataProducts = [{
    "id": 1,
    "name": "Safari",
    "price": 500,
    "img": "https://i.ibb.co/YZf4m4p/IMG-20201031-WA0010-01.jpg",
    "stock": "5 en stock",
},
{
    "id": 2,
    "name": "Esmeralda",
    "price": 700,
    "img": "https://i.ibb.co/gyP57VC/IMG-20201031-WA0009-01.jpg",
    "stock": "8 en stock",
},
{
    "id": 3,
    "name": "Pink",
    "price": 400,
    "img": "https://i.ibb.co/p18Wb5k/IMG-20201031-WA0011-01.jpg",
    "stock": "3 en stock",
},
{
    "id": 4,
    "name": "Perla",
    "price": 500,
    "img": "https://i.ibb.co/61PVmhx/Whats-App-Image-2020-11-10-at-11-28-11-4.jpg",
    "stock": "7 en stock",
},
{
    "id": 5,
    "name": "Pasión",
    "price": 500,
    "img": "https://i.ibb.co/5nvL41m/IMG-20201031-WA0014-01.jpg",
    "stock": "15 en stock",
},
{
    "id": 6,
    "name": "Aquamarine",
    "price": 550,
    "img": "https://i.ibb.co/LPX78DX/IMG-20201031-WA0016-01.jpg",
    "stock": "10 en stock",
}
]

function createPromise () {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(DataProducts);
        }, 2000);
    });
}

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState ([]);

    useEffect (() => {
        let callPromise = createPromise();

        callPromise.then( function (promiseItems) {
            setItems(promiseItems);
        })
        
        .finally(
            function () {
                console.log("Promesa Finalizada");
            });
    }, []);

    return (
        <section>
            <div>
                <h1>{greeting}</h1>
            </div>
            <div>
                <ItemList items={items}/>
            </div>
            <div>
                <ItemCount stock={8} initial={1}/>
            </div>
        </section>
    )
}

export default ItemListContainer
