import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart'
import { CloseIcon } from '../Icons';
import { ProductCart } from '../ProductCart';

import styles from './styles.module.css'

export const Cart = ({ closeCart }) => {

  const { cart, updateCart, removeitem, removeAllItems, calculateTotal } = useCart();
 
  const navigate = useNavigate();

  const total = calculateTotal();



  const handleClick = (e) => {
    closeCart();
    navigate('/checkout');
  }


  const handleClose = () => {
    closeCart();
  }



  
  return (
    <>
      <section className={styles.card}>

        {
          total > 0
            ?
            <>
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
                  <span>${total}.00</span>
                </div>
                <button className='orangeButton ' onClick={handleClick}>CheckOut</button>
              </div>
            </>
            : <h3>The Cart is Empty</h3>
        }

        <button className={styles.closeButton} onClick={handleClose}><CloseIcon /></button>
      </section>
    </>
  )
}
