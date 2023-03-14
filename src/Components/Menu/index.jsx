import React, { useId, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Cart } from '../Cart';
import { CategoryBar } from '../CategoryBar';
import { useCart } from '../hooks/useCart';
import { CloseIcon } from '../icons';
import { NavigationOption } from '../NavigationOption';
import styles from './styles.module.css'
export const Menu = () => {



    const cartCheckboxId = useId();


    const { cart } = useCart();
   
    const cartCheckref = useRef();
    const optionCheckref = useRef();
    const count = cart.length;


    const handleClickClose = () => {
        cartCheckref.current.checked = false;
    }

    const handleCloseBurger = () => {
        optionCheckref.current.checked = false;
    }
    console.log("render menu")



    const burgerId = useId();
    return (
        <header >
            <nav className={styles.menu}>

                <div className={styles.menu__items}>

                    <label htmlFor={burgerId} className={styles.burger__button} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <input ref={optionCheckref} type="checkbox" name="" id={burgerId} hidden />

                    <section className={`${styles.options} `} >
                        <NavigationOption handleCloseBurger={handleCloseBurger} />
                    </section>




                    <NavLink to={`/`}>
                        <img src="./assets/shared/desktop/logo.svg" alt="icon logo" />
                    </NavLink>


                    <label htmlFor={cartCheckboxId} className={styles.cart__button}>
                        <img src="./assets/shared/desktop/icon-cart.svg" alt="icon cart" />
                        {
                            count > 0 && <span >{count}</span>
                        }
                    </label>

                    <input ref={cartCheckref} type="checkbox" name="" id={cartCheckboxId} hidden />

                    <div className={styles.cart}>
                        <button onClick={handleClickClose}><CloseIcon /></button>
                        <Cart closeCart={handleClickClose}/>
                    </div>

                </div>


            </nav>
            <CategoryBar />
        </header>
    )
}
