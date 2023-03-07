import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const useCart = () => {

    const { cart, setCart } = useContext(CartContext);
    let auxCart;

    const addCart = (count, product) => {

        const indexProduct = cart.findIndex(prod => prod.product.id == product.id);

        if (indexProduct != -1) {
            alert('ya se encuentra en el carrito')
            return
        }
        else {
            const productCart = {
                product: product,
                count: count
            }
            const newProduct = [...cart, productCart];
            setCart(newProduct);
        }


        console.log('product added')


    }

    const updateCart = (count, idProduct) => {
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


    return { cart, setCart, addCart, updateCart, removeitem, removeAllItems }
}
