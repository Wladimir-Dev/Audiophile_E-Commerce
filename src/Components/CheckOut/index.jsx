import React, { useId } from 'react'
import { useCart } from '../hooks/useCart';
import { ProductCart } from '../ProductCart';
import styles from './styles.module.css'
export const CheckOut = () => {

  const nameID = useId();
  const emailID = useId();
  const phoneID = useId();
  const addressID = useId();
  const postalCodeID = useId();
  const cityID = useId();
  const countryID = useId();
  const { cart, calculateTotal } = useCart();


  const total = calculateTotal();
  const SHIPPING = 50;
  const vat = total * 0.2;
  const grandTotal = total + SHIPPING + vat;




  return (
    <main className={styles.main}>
      <section className={styles.checkout}>




        <form action="" className={styles.form}>

          <div className={styles.form__item}>
            <h2>checkout</h2>
            <span>billing details</span>
            <label htmlFor={nameID}>Name</label>
            <input id={nameID} type="text" placeholder='Ana Pellizari' />

            <label htmlFor={emailID}>Email</label>
            <input id={emailID} type="email" placeholder='Ana.Pell@gmail.com' />

            <label htmlFor={phoneID}>Phone</label>
            <input id={phoneID} type="text" placeholder='Ana Pellizari' />
          </div>

          <div className={styles.form__item}>
            <span>shipping info</span>
            <label htmlFor={addressID}>Your Address</label>
            <input id={addressID} type="text" placeholder='117 Williams Avenue' />

            <label htmlFor={postalCodeID}>Zip Code</label>
            <input id={postalCodeID} type="number" placeholder='1001' />

            <label htmlFor={cityID}>City</label>
            <input id={cityID} type="text" placeholder='Chicago' />

            <label htmlFor={countryID}>Country</label>
            <input id={countryID} type="text" placeholder='United States' />
          </div>
        </form>

        <form className={styles.body}>

          <h3>summary</h3>
          <div className={styles.body__itemscard}>
            {
              cart.map(item => (
                <ProductCart
                  productCart={item}

                />
              ))
            }
          </div>
          <div>
            <span>total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div>
            <span>shipping</span>
            <span>${SHIPPING.toFixed(2)}</span>
          </div>
          <div>
            <span>vat(included)</span>
            <span>${vat.toFixed(2)}</span>
          </div>
          <div>
            <span>grand total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
          <button
            type='submit'
            className='orangeButton'
          >
            continue and pay
          </button>
        </form>
      </section>
    </main>
  )
}
