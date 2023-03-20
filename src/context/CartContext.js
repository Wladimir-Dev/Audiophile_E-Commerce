import React, { createContext, useState } from 'react'
import { useLocalStorage } from '../Components/hooks/useLocalStorage';


export const CartContext = createContext();



export const CartProvider = ({ children }) => {

    const { state: cart, setState: setCart } = useLocalStorage({ nameStorage: "cartAudioECommerce", initialValue: [] })
  

    const addCart = (count, product) => {

        let added = false;
        const indexProduct = cart?.findIndex(prod => prod.product.id == product.id);

        if (indexProduct == -1) {
            //no existe en el carrito
            const productCart = {
                product: product,
                count: count
            }
            const newProduct = [...cart, productCart];
            setCart(newProduct);
            added = true;
        }


        return added;


    }

    const updateCart = (count, idProduct) => {
        console.log(`cantidad del producto ${count}`)
        if (count == 0) {
            removeitem(idProduct);
            return
        }

        const indexProduct = cart.findIndex(cart => cart.product.id == idProduct);
        let copyCart = [...cart];
        copyCart[indexProduct].count = count;
        setCart(copyCart);
    }

    const removeitem = (idProduct) => {
        const auxCart = cart.filter(cart => cart.product.id != idProduct);
        setCart(auxCart);
    }
    const removeAllItems = () => {
        setCart([]);
    }

    const calculateTotal = () => {
        let initialValue = 0;

        return cart?.reduce((acumaltor, index) => acumaltor + (index.count * index.product.price), initialValue);
    }

    return (
        <CartContext.Provider
            value={
                {
                    cart,
                    setCart,
                    addCart,
                    updateCart,
                    removeitem,
                    removeAllItems,
                    calculateTotal
                }
            }>
            {children}
        </CartContext.Provider>
    )
}
