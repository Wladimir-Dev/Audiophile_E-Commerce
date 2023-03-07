import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CounterButton } from '../CounterButton';
import { useCart } from '../hooks/useCart'
import { ProductCart } from '../ProductCart';

import styles from './styles.module.css'

export const Cart = () => {

  const { cart, updateCart, removeitem, removeAllItems, calculateTotal } = useCart();
  const navigate = useNavigate();

  const total = calculateTotal();

  const handleClick = (e) => {
    navigate('/checkout');
  }

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
                removeitem={removeitem}
              />
            ))

          }
        </div>
        <div className={styles.card__footer}>
          <div className={styles.footer__total}>
            <span>Total</span>
            <span>{total}</span>
          </div>
          <button onClick={handleClick}>CheckOut</button>
        </div>
      </section>
    </>
  )
}
