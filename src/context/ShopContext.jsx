import { createContext, useState } from 'react';

export const ShopContext = createContext();
export const ShopContextProvider = (props)=> {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (item, qty= 1) => {
        console.log(item, qty);
        if(cartItems.hasOwnProperty(item.id)){
       setCartItems((prev) => ({...prev, [item.id]: [prev[item.id][0] + qty, item]}));
        }
        else {
            setCartItems((prev) => ({...prev, [item.id]: [qty, item]}));
        }

    
    }


    const removeFromCart = (itemID) => {

            const items = {...cartItems};
            delete items[itemID];
            setCartItems(items);


    }

    const updateCartQuantity = (id, quantity) => {
        if(quantity <= 0){
            removeFromCart(id);
        }
        else {
            const updateItem = cartItems[id][1]
            setCartItems((prev) => ({...prev, [id]: [quantity, updateItem]}));
        }
    }
    return (
        <ShopContext.Provider value={{cartItems, addToCart, removeFromCart, updateCartQuantity}}>
            {props.children}
        </ShopContext.Provider>
    )
}

