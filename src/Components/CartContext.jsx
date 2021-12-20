import React, {useContext, useState, createContext} from 'react'
import Item from './Item';

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
    const [itemsCart, setItemsCart] = useState([]);

    const isInCart = (id) => {
        return itemsCart.some((item) => {
            return item.id === id;
        })
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)){
            let itemAdd = itemsCart.find((itemInCart) => {
                return itemInCart.id === item.id;
            });

            itemAdd.quantity += quantity;

            let cartFilter = itemsCart.filter((itemInCart) =>{
                return itemInCart.id !== item.id;
            });

            setItemsCart([...cartFilter, ...itemAdd]);

        } else setItemsCart([...itemsCart, {...Item, quantity}]);
    }

    const getQuantityCart = () => {
        return itemsCart.reduce ((total, item) => {
            return (total + item.quantity);
        },0)
    }

    return(
        <CartContext.Provider value = {{itemsCart, addItem, getQuantityCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default useCartContext
