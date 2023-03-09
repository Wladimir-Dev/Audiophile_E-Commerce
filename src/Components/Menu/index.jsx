import React, { useId, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { Cart } from '../Cart';
import { CategoryBar } from '../CategoryBar';
import { useCart } from '../hooks/useCart';
import { CloseIcon } from '../icons';
import styles from './styles.module.css'
export const Menu = () => {

    const cartCheckboxId = useId();

    const [onBurger, setOnBurger] = useState(false);
    const { cart } = useCart();

    const checkref = useRef();
    const count = cart.length;



    const handleClickClose = () => {
        checkref.current.checked = false;
    }
    console.log("render menu")
    const burgerId = useId();
    return (
        <header >
            <nav className={styles.menu}>

                <div className={styles.menu__items}>

                    <label htmlFor={burgerId} className={styles.burger__button} onClick={() => setOnBurger(prev => !prev)}>
                        <img src="./assets/shared/tablet/icon-hamburger.svg" alt="" />
                    </label>

                    <NavLink to={`/`}>
                        <img src="./assets/shared/desktop/logo.svg" alt="icon logo" />
                    </NavLink>


                    <label htmlFor={cartCheckboxId} className={styles.cart__button}>
                        <img src="./assets/shared/desktop/icon-cart.svg" alt="icon cart" />
                        {
                            count > 0 && <span >{count}</span>
                        }
                    </label>

                    <input ref={checkref} type="checkbox" name="" id={cartCheckboxId} hidden />

                    <div className={styles.cart}>
                        <button onClick={handleClickClose}><CloseIcon /></button>
                        <Cart />
                    </div>

                </div>
                <ul className={`${styles.options} ${onBurger && styles.options_active}`}>
                    <li>HOME</li>
                    <li>HEADPHONES</li>
                    <li>SPEAKERS</li>
                    <li>EARPHONESF</li>
                </ul>

            </nav>
            <CategoryBar />
        </header>
    )
}
