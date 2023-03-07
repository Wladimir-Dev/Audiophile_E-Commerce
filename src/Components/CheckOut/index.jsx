import React, { useId } from 'react'
import { useCart } from '../hooks/useCart';
import { ProductCart } from '../ProductCart';
import styles from './styles.module.css'
export const CheckOut = () => {

  const nameID = useId();
  const emailID = useId();
  const { cart } = useCart();

  return (
    <section className={styles.checkout}>
      <form action="">
        <label htmlFor={nameID}>Nombre</label>
        <input id={nameID} type="text" placeholder='Ana Pellizari' />
        <label htmlFor={emailID}>Email</label>
        <input id={emailID} type="text" placeholder='Ana.Pell@gmail.com' />
      </form>

      <div className={styles.body}>
        {
          cart.map(item => (
            <ProductCart
              productCart={item}

            />
          ))
        }
      </div>
    </section>
  )
}
