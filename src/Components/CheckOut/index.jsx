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
  const handleSubmit = (e) => {

    e.preventDefault();
    const fields = Object.fromEntries(new window.FormData(e.target));
    console.log(fields.nameID)


    const auxinput = document.getElementById(nameID);
    if (auxinput.validity.valid) {
      console.log("no cumple")
    }
  }



  return (
    <main className={styles.main}>
      <section className={styles.checkout}>

        <form onSubmit={handleSubmit} className={styles.form}>

          <div className={styles.form__item}>
            <h2>checkout</h2>

            <fieldset>
              <legend>billing details</legend>
              <label htmlFor={nameID}>Name</label>
              <abbr title="Este campo es obligatorio" aria-label="required">*</abbr>
              <input name="nameID" id={nameID} type="text" placeholder='Ana Pellizari' required minLength="3" maxLength="10" />
            </fieldset>

            {/*  <label htmlFor={emailID}>Email</label>
            <input id={emailID} type="email" placeholder='Ana.Pell@gmail.com' required />

            <label htmlFor={phoneID}>Phone</label>
            <input id={phoneID} type="text" placeholder='Ana Pellizari' required />
        
 */}  </div>
          <div className={styles.form__item}>
            {/*  <span>shipping info</span>
            <label htmlFor={addressID}>Your Address</label>
            <input id={addressID} type="text" placeholder='117 Williams Avenue' required />

            <label htmlFor={postalCodeID}>Zip Code</label>
            <input id={postalCodeID} type="number" placeholder='1001' required />

            <label htmlFor={cityID}>City</label>
            <input id={cityID} type="text" placeholder='Chicago' required />

            <label htmlFor={countryID}>Country</label>
            <input id={countryID} type="text" placeholder='United States' required /> */}
          </div>


          <div className={styles.body}>

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
              name='wakanda'
              className='orangeButton'
            >
              continue and pay
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}
