import React, { useId, useRef, useState } from 'react'
import { useCart } from '../hooks/useCart';
import { Order } from '../Order';
import { ProductCart } from '../ProductCart';
import styles from './styles.module.css'
export const CheckOut = () => {


  const { cart, calculateTotal } = useCart();
  const [pay, setPay] = useState(false)

  const total = calculateTotal();
  const SHIPPING = 50;
  const vat = total * 0.2;
  const grandTotal = total + SHIPPING + vat;
  let labelInput = undefined;


  const showError = (input, accion) => {
    labelInput = document.querySelector("#" + input.id + " + small");
    labelInput.className = accion;


  }


  const handleSubmit = (e) => {
    const arrayInputs = document.querySelectorAll('input:not([type="checkbox"])');
    e.preventDefault();

    for (let index = 0; index < arrayInputs.length; index++) {


      if (!arrayInputs[index].validity.valid) {

        showError(arrayInputs[index], "error");
        arrayInputs[index].focus();
        return
      }
      else {
        showError(arrayInputs[index], "NoVisible");
      }
    }


    setPay(prev => !prev)


  }

  console.log("reeeender")

  return (
    <main className={styles.main}>
      <section id='checkout' className={`${pay && styles.noVisible} ${styles.checkout} `}>

        <form onSubmit={handleSubmit} className={styles.form} noValidate>

          <div className={styles.form__item}>
            <h2>checkout</h2>

            <fieldset>
              <legend>billing details</legend>
              <label htmlFor="nameID" className={styles.labelInput}>Name</label>
              <input name="nameID" id="nameID" type="text" placeholder='Ana Pellizari' required />
              <small htmlFor="nameID" hidden>se requiere un nombre válido </small>
            </fieldset>

            {/*  <fieldset>
              <label htmlFor="emailID" className={styles.labelInput}>Email</label>
              <input name='emailID' id="emailID" type="email" placeholder='Ana.Pell@gmail.com' required />
              <small htmlFor="nameID" hidden>se requiere un email valido</small>
            </fieldset>

            <fieldset>
              <label htmlFor="phoneID" className={styles.labelInput}>Phone</label>
              <input id="phoneID" type="text" placeholder='Ana Pellizari' required />
              <small htmlFor="phoneID" hidden>Ingrese un número de teléfono válido</small>
            </fieldset> */}

          </div>
          <div className={styles.form__item}>
            {/*  <fieldset>
              <legend>shipping info</legend>
              <label htmlFor="addressID" className={styles.labelInput}>Your Address</label>
              <input id="addressID" type="text" placeholder='117 Williams Avenue' required />
              <small htmlFor="addressID" hidden>Ingrese una dirección válida</small>
            </fieldset>

            <fieldset>
              <label htmlFor="postalCodeID" className={styles.labelInput}>Zip Code</label>
              <input id="postalCodeID" type="number" placeholder='1001' required />
              <small htmlFor="postalCodeID" hidden>Ingrese una código postal válido</small>
            </fieldset>


            <fieldset>
              <label htmlFor="cityID" className={styles.labelInput}>City</label>
              <input id="cityID" type="text" placeholder='Chicago' required />
              <small htmlFor="cityID" hidden>Ingrese una ciudad válida</small>

            </fieldset>

            <fieldset>
              <label htmlFor="countryID" className={styles.labelInput}>Country</label>
              <input id="countryID" type="text" placeholder='United States' required />
              <small htmlFor="countryID" hidden>Ingrese una país válido</small>

            </fieldset> */}
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
              autoFocus
              disabled={total == 0}
            >
              continue and pay
            </button>
          </div>
        </form>
      </section>
      {
        pay &&
        <Order total={grandTotal.toFixed(2)} />
      }
    </main>
  )
}
