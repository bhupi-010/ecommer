import { createContext, useState } from 'react';

export const ShopContext = createContext();
export const ShopContextProvider = (props)=> {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (item) => {
        if(cartItems.hasOwnProperty(item.id)){
       setCartItems((prev) => ({...prev, [item.id]: prev[item.id] + 1}));
    }
        else {
            setCartItems((prev) => ({...prev, [item.id]: 1}));
        }
    
    }

    const removeFromCart = (item) => {
        if(cartItems[item.id] > 1){
            setCartItems((prev) => ({...prev, [item.id]: prev[item.id] - 1}));
        }
        else {
            const items = {...cartItems};
            delete items[item.id];
            setCartItems(items);
        }
    }
    return (
        <ShopContext.Provider value={{cartItems, addToCart, removeFromCart}}>
            {props.children}
        </ShopContext.Provider>
    )
}

