import React from 'react'
import { CounterButton } from '../CounterButton'

import styles from './styles.module.css'

export const ProductCart = ({ productCart, updateCart }) => {
  const { product } = productCart

  const productName = product.name.split(' ')

  const operation = (operacion) => {
    operacion == 'restar'
      ? updateCart(productCart.count - 1, product.id)
      : updateCart(productCart.count + 1, product.id)
  }

  return (
    <div className={styles.productCart}>
      <img src={product.image.mobile} alt={product.name} />
      <div className={styles.details}>
        <span className={styles.name}>
          {productName[0]}
          {productName[1].toUpperCase() == 'MARK' && `MK ${productName[2]}`}
        </span>
        <span className={styles.price}>{`$${product.price}.00`}</span>
      </div>

      <CounterButton
        count={productCart.count}
        fnAux={operation}
        fromCard={true}
      />
    </div>
  )
}
