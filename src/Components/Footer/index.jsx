import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavigationOption } from '../NavigationOption';

import styles from './styles.module.css'
import tablet from './tablet.module.css'
import desktop from './desktop.module.css'

export const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();



    return (
        <footer className={`${styles.footer} ${tablet.footer} ${desktop.footer}`}>

            <div className={`${styles.header} ${tablet.header} ${desktop.header}`}>
                <NavLink to={`/`}>
                    <img src="./assets/shared/desktop/logo.svg" alt="icon logo" />
                </NavLink>

                <NavigationOption />
            </div>

            <p>Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who
                are devoted to helping you get the most out of personal audio.
                Come and visit our demo facility - we're open 7 days a week.
            </p>
            <div className={`${styles.footerEnd} ${tablet.footerEnd}`}>
                <span>Copyright © {year}. All Rights Reserved</span>
                <div className={styles.container__socialMedia}>
                    <a href='https://github.com/Wladimir-Dev/Audiophile_E-Commerce' target={'_blank'}>
                        <img src="./assets/shared/desktop/icon-facebook.svg" alt="" />
                    </a>
                    <a href='https://github.com/Wladimir-Dev/Audiophile_E-Commerce' target={'_blank'}>
                        <img src="./assets/shared/desktop/icon-twitter.svg" alt="" />
                    </a>
                    <a href='https://github.com/Wladimir-Dev/Audiophile_E-Commerce' target={'_blank'}>
                        <img src="./assets/shared/desktop/icon-instagram.svg" alt="" />
                    </a>


                </div>
            </div>
        </footer>
    )
}
