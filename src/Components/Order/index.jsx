import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { CheckIcon } from '../icons'
import { ProductCart } from '../ProductCart'


import styles from './styles.module.css'
import tablet from './tablet.module.css'
import desktop from './desktop.module.css'

export const Order = ({ total }) => {

  const { cart } = useCart();

  return (
    <section className={`${styles.order} ${tablet.order} ${desktop.order}`}>
      <div className={styles.orderIcon}>
        <CheckIcon />
      </div>
      <h2>thank you for your order</h2>
      <span>You will receive an email confirmation shortly.</span>
      <div className={tablet.body}>
        <div className={`${styles.bodyItems} ${tablet.bodyItems}`}>
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
        <div className={`${styles.footer} ${tablet.footer}`}>
          <span>Grand total</span>
          <span>${total}</span>
        </div>
      </div>

      <NavLink to='/' className='orangeButton' >Back to home</NavLink>

    </section>
  )
}
