import React, { useEffect, useState } from 'react'
import { CounterButton } from '../CounterButton'
import styles from './styles.module.css'


export const ProductCart = ({ productCart, updateCart }) => {

    const { product } = productCart;
    const [count, setCount] = useState(productCart.count)

    useEffect(() => {
        updateCart(count, product.id)
    }, [count])

    console.log("render item cart")
    return (
        <div className={styles.card__item}>
            <img src={product.image.mobile} alt={product.name} />
            <div className={styles.card__itemDetails}>
                <span>{product.name}</span>
                <span>{`$${product.price}`}</span>
            </div>
            <CounterButton
                counterProduct={count}
                setCounterProduct={setCount} 
                fromCard={true}/>
        </div>
    )
}
