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
    
    const [count, setCount] = useState(0);


    function Add() {
        return (
            setCount(prevCount => (prevCount + 1 ))
        )
    }

    function Subtract() {
        if (count <= 0){
            return
        }else {
            return (
                setCount(prevCount => prevCount - 1 )
            )
        }
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    };
    
    const removeFromCart = (itemId) => {
        if (cartItems[itemId] <= 0) {
            return
        }else{
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
        }
    };
    
    const contextValue = {cartItems, count, addToCart, removeFromCart, Add, Subtract};

    return (
            <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
    )
}