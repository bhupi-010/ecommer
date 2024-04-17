import React, { createContext,useContext, useState, useEffect } from 'react';

export const ShopContext = createContext();
export const useShop = () => useContext(ShopContext);
export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [totalQuantity, setTotalQuantity] = useState(0);
    useEffect(() => {
        // Function to calculate total quantity whenever cart items change
        const calculateTotalQuantity = () => {
            let totalQuantity = 0;
            for (const id in cartItems) {
                totalQuantity += cartItems[id][0];
            }
            return totalQuantity;
        };

        // Update total quantity whenever cart items change
        const totalQuantity = calculateTotalQuantity();

        // Update total quantity whenever cart items change
        setTotalQuantity(totalQuantity);
    }, [cartItems]);

    const addToCart = (item, qty = 1) => {
        if (cartItems.hasOwnProperty(item.id)) {
            setCartItems((prev) => ({ ...prev, [item.id]: [prev[item.id][0] + qty, item] }));
        } else {
            setCartItems((prev) => ({ ...prev, [item.id]: [qty, item] }));
        }
    };

    const removeFromCart = (itemID) => {
        const items = { ...cartItems };
        delete items[itemID];
        setCartItems(items);
    };

    const updateCartQuantity = (id, quantity) => {
        if (quantity <= 0) {
            removeFromCart(id);
        } else {
            const updateItem = cartItems[id][1];
            setCartItems((prev) => ({ ...prev, [id]: [quantity, updateItem] }));
        }
    };

    return (
        <ShopContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateCartQuantity,
                totalQuantity, 
            }}
        >
            {props.children}
        </ShopContext.Provider>
    );
};
