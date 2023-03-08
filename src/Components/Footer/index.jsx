import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './styles.module.css'

export const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className={styles.footer}>
            <section className={styles.container__navigation}>
                <NavLink to={`/`}>
                    <img src="./assets/shared/desktop/logo.svg" alt="icon logo" />
                </NavLink>
                <ul>
                    <li><NavLink to={'/'}>HOME</NavLink></li>
                    <li><NavLink to={'/headphones'} >HEADPHONES</NavLink></li>
                    <li><NavLink to={'/speakers'}>SPEAKERS</NavLink></li>
                    <li><NavLink to={'/earphones'}>EARPHONES</NavLink></li>
                </ul>
            </section>
            <p>Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who
                are devoted to helping you get the most out of personal audio.
                Come and visit our demo facility - we're open 7 days a week.
            </p>
            <span>Copyright © {year}. All Rights Reserved</span>
            <div className={styles.container__socialMedia}>
                <a href='https://github.com/Wladimir-Dev?tab=repositories' target={'_blank'}>
                    <img src="./assets/shared/desktop/icon-facebook.svg" alt="" />
                </a>
                <a href='https://github.com/Wladimir-Dev?tab=repositories' target={'_blank'}>
                    <img src="./assets/shared/desktop/icon-twitter.svg" alt="" />
                </a>
                <a href='https://github.com/Wladimir-Dev?tab=repositories' target={'_blank'}>
                    <img src="./assets/shared/desktop/icon-instagram.svg" alt="" />
                </a>
                

            </div>
        </footer>
    )
}