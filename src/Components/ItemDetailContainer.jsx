import React,{useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router';

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

function createPromise (idFind) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const itemFind = DataProducts.find((e) =>{
                return e.id === idFind
            });

            itemFind ? resolve(itemFind) : reject (new Error ("No se encontró el producto"));
        }, 1000);
    });
}

const ItemDetailContainer = () => {
    const [items, setItems] = useState (null);
    const { id } = useParams();

    useEffect (() => {
        let callPromise = createPromise(Number(id));

        callPromise.then( function (promiseItems) {
            setItems(promiseItems);
        })
        
        .finally(
            function () {
                console.log("Promesa Finalizada");
            });
    }, [id]);

    return (
        <section>
            <div>
               {items !== null ?
               <ItemDetail
                    id={items.id}
                    name={items.name}
                    price={items.price}
                    description={items.description}
                    img={items.img}
                    stock={items.stock}
                />
            
                : <p>Cargando productos...</p>

            }

            </div>
        </section>
    )
}

export default ItemDetailContainer
