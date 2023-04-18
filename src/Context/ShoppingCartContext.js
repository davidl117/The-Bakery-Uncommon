import React, { createContext, useState } from "react";
import BakeryGoods from '../Components/bakery_goods.json';

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {};
    for ( let i = 0; i < BakeryGoods.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    };
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    };
    
    
    const contextValue = {cartItems, addToCart, removeFromCart};

    console.log(cartItems);

    return (
            <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
    )
}