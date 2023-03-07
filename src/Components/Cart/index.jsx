import React from 'react'
import { CounterButton } from '../CounterButton';
import { useCart } from '../hooks/useCart'
import { ProductCart } from '../ProductCart';

import styles from './styles.module.css'

export const Cart = () => {

  const { cart, updateCart, removeAllItems } = useCart();
  const initialValue = 0;

  const total = cart?.reduce((acumaltor, index) => acumaltor + (index.count * index.product.price), initialValue);


  return (
    <>
      <section className={styles.card}>

        <div className={styles.card__header}>
          <h5>Cart ({cart.length})</h5>
          <button onClick={() => removeAllItems()}>Remove all</button>
        </div>

        <div className={styles.card__body}>
          {
            cart.map(item => (
              <ProductCart
               productCart={item} 
               updateCart={updateCart}
               />
            ))

          }
        </div>
        <div className={styles.card__footer}>
          <span>Total</span>
          <span>{total}</span>
        </div>
      </section>
    </>
  )
}
