import React, { createContext, useState } from 'react'
import { useLocalStorage } from '../Components/hooks/useLocalStorage';


export const CartContext = createContext();



export const CartProvider = ({ children }) => {

    // const { state: cart, setState: setCart } = useLocalStorage("cartAudioECommerce", [])
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}
