import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'
export const NavigationOption = ({handleCloseBurger=undefined}) => {





    return (
        <ul className={styles.navigationOption} onClick={handleCloseBurger}>
            <li><NavLink to={'/'}>HOME</NavLink></li>
            <li><NavLink to={'/headphones'} >HEADPHONES</NavLink></li>
            <li><NavLink to={'/speakers'}>SPEAKERS</NavLink></li>
            <li><NavLink to={'/earphones'}>EARPHONES</NavLink></li>
        </ul>
    )
}
