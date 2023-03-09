import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { CounterButton } from '../CounterButton'
import styles from './styles.module.css'


export const ProductCart = ({ productCart, updateCart, removeitem }) => {

    const { product } = productCart;
    let { pathname: currentCategory } = useLocation();

    currentCategory = currentCategory.slice(1);

    const operation = (operacion) => {

        if (operacion == 'restar') {

            updateCart(productCart.count - 1, product.id)

        } else {

            updateCart(productCart.count + 1, product.id)
        }
    }
    const productName = product.name.split(" ");
    console.log("render item cart")
    return (
        <div className={styles.card__item}>
            <img src={product.image.mobile} alt={product.name} />
            <div className={styles.card__itemDetails}>
                <span className={styles.name}>
                    {productName[0]}
                    {productName[1].toUpperCase()=="MARK" && `MK ${productName[2]}`}
                </span>
                <span className={styles.price}>{`$${product.price}.00`}</span>
            </div>

            {currentCategory != 'checkout'
                ?
                <CounterButton
                    count={productCart.count}
                    fnAux={operation}
                    fromCard={true}
                />
                : <span>{productCart.count}</span>


            }
        </div>
    )
}
