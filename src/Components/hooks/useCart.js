import { useContext } from 'react'

import { CartContext } from '../../context/CartContext'

export const useCart = () => {

    const {
        cart
        , setCart
        , addCart
        , updateCart
        , removeitem
        , removeAllItems
        , calculateTotal 
    } = useContext(CartContext);





    return { cart, setCart, addCart, updateCart, removeitem, removeAllItems, calculateTotal }
}
