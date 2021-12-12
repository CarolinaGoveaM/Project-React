import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

// DATA

const DataProducts = [{
    "id": 1,
    "name": "Safari",
    "price": 500,
    "description": "Por ahora no hay nada para mostrar",
    "img": "https://i.ibb.co/YZf4m4p/IMG-20201031-WA0010-01.jpg",
    "category": "saten",
    "stock": 5,
},
{
    "id": 2,
    "name": "Esmeralda",
    "price": 700,
    "description": "Por ahora no hay nada para mostrar",
    "img": "https://i.ibb.co/gyP57VC/IMG-20201031-WA0009-01.jpg",
    "category": "transfer",
    "stock": 8,
},
{
    "id": 3,
    "name": "Pink",
    "price": 400,
    "description": "Por ahora no hay nada para mostrar",
    "img": "https://i.ibb.co/p18Wb5k/IMG-20201031-WA0011-01.jpg",
    "category": "algodon",
    "stock": 3,
},
{
    "id": 4,
    "name": "Perla",
    "price": 500,
    "description": "Por ahora no hay nada para mostrar",
    "img": "https://i.ibb.co/61PVmhx/Whats-App-Image-2020-11-10-at-11-28-11-4.jpg",
    "category": "saten",
    "stock": 7,
},
{
    "id": 5,
    "name": "Pasión",
    "price": 500,
    "description": "Por ahora no hay nada para mostrar",
    "img": "https://i.ibb.co/5nvL41m/IMG-20201031-WA0014-01.jpg",
    "category": "saten",
    "stock": 15,
},
{
    "id": 6,
    "name": "Aquamarine",
    "price": 550,
    "description": "Por ahora no hay nada para mostrar",
    "img": "https://i.ibb.co/LPX78DX/IMG-20201031-WA0016-01.jpg",
    "category": "fibrana",
    "stock": 10,
}
]

function createPromise (category = null) {
    return new Promise((resolve) => {
        let itemsRespond = [];

        setTimeout(function () {
            category ? 
            itemsRespond = DataProducts.filter((item) => {
               return item.category === category
            })
            :
            itemsRespond = [...DataProducts]
            resolve(itemsRespond);
        }, 1000);
    });
}

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState ([]);
    const { categoryId } = useParams();

    useEffect (() => {
        let callPromise = createPromise(categoryId);

        callPromise.then( function (promiseItems) {
            setItems(promiseItems);
        })
        
        .finally(
            function () {
                console.log("Promesa Finalizada");
            });
    }, [categoryId]);

    return (
        <section>
            <div>
                <h1>{greeting}</h1>
            </div>
            <div>
                <ItemList items={items}/>
            </div>
        </section>
    )
}

export default ItemListContainer
