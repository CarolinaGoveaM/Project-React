import React , {useState} from 'react';



const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    function addCount(){
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function removeCount() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div className="containerCountPather">
            <div className="containerCountSon">
                <p className="titleCount">Selecciona cantidad</p>
                <button className="btnRemove" onClick={removeCount}>-</button>
                <h3 className="count">{count}</h3>
                <button className="btnSumar"  onClick={addCount}>+</button>
                <button className="btnAdd" onClick={() => onAdd(count)}> <span>Agregar al carrito</span> </button>
            </div>
        </div>
    )
}

export default ItemCount
