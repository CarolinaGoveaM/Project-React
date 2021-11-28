import React , {useState} from 'react';



const ItemCount = ({stock, inital}) => {
    const [count, setCount] = useState(1);

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

    function onAdd() {
        alert(`Agregaste ${count} productos al carrito`);
    }

    return (
        <div className="containerCountPather">
            <div className="containerCountSon">
                <h2 className="titleCount">Producto Store</h2>
                <button className="btnRemove" onClick={removeCount}>-</button>
                <h3 className="count">{count}</h3>
                <button className="btnSumar"  onClick={addCount}>+</button>
                <button className="btnAdd" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
