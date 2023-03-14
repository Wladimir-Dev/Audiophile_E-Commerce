import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { CheckIcon } from '../Icons'
import { ProductCart } from '../ProductCart'
import styles from './styles.module.css'
export const Order = ({ total }) => {

  const { cart } = useCart();

  return (
    <section className={styles.order}>
      <div className={styles.orderIcon}>
        <CheckIcon />
      </div>
      <h2>thank you for your order</h2>
      <span>You will receive an email confirmation shortly.</span>
      <div className={styles.bodyItems}>
        {
          cart.slice(0, 1).map(item => (
            <ProductCart
              productCart={item}

            />
          ))

        }
        {
          cart.length - 1 > 0 &&
          <span>and {cart.length - 1}other item(s)</span>
        }
      </div>
      <div className={styles.footer}>
        <span>Grand total</span>
        <span>${total}</span>
      </div>

      <NavLink to='/' className='orangeButton' >Back to home</NavLink>

    </section>
  )
}
