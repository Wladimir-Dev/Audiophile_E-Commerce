import React, { useId, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Cart } from '../Cart'
import { CategoryBar } from '../CategoryBar'
import { useCart } from '../hooks/useCart'
import { NavigationOption } from '../NavigationOption'

import styles from './styles.module.css'
import tablet from './tablet.module.css'
import desktop from './desktop.module.css'

export const Menu = () => {
  const { cart } = useCart()

  const cartCheckboxId = useId()
  const burgerId = useId()

  const cartCheckref = useRef()
  const optionCheckref = useRef()

  const count = cart?.length

  const handleClickClose = () => {
    cartCheckref.current.checked = false
  }

  const handleCloseBurger = () => {
    optionCheckref.current.checked = false
  }

  return (
    <header>
      <nav className={`${styles.menu} ${tablet.menu} ${desktop.menu}`}>
        <div className={`${styles.navLeft} ${desktop.navLeft}`}>
          <label htmlFor={burgerId} className={styles.burger__button}>
            <span></span>
            <span></span>
            <span></span>
          </label>

          <input
            ref={optionCheckref}
            type='checkbox'
            name=''
            id={burgerId}
            hidden
          />

          <section className={`${styles.options} `}>
            <NavigationOption handleCloseBurger={handleCloseBurger} />
          </section>

          <NavLink to={`/`}>
            <img src='./assets/shared/desktop/logo.svg' alt='icon logo' />
          </NavLink>
        </div>

        <section
          className={`${styles.optionsNavigation} ${desktop.optionsNavigation} `}
        >
          <NavLink to={`/`}>
            <img src='./assets/shared/desktop/logo.svg' alt='icon logo' />
          </NavLink>
          <NavigationOption handleCloseBurger={handleCloseBurger} />
        </section>

        {/* carrito navbar */}

        <label htmlFor={cartCheckboxId} className={styles.cart__button}>
          <img src='./assets/shared/desktop/icon-cart.svg' alt='icon cart' />
          {count > 0 && <span>{count}</span>}
        </label>

        <input
          ref={cartCheckref}
          type='checkbox'
          name=''
          id={cartCheckboxId}
          hidden
        />

        <div className={styles.cart}>
          <Cart closeCart={handleClickClose} />
        </div>
      </nav>
      <CategoryBar />
    </header>
  )
}
