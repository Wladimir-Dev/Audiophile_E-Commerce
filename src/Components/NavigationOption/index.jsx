import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './styles.module.css'
import desktop from './desktop.module.css'

export const NavigationOption = ({ handleCloseBurger = undefined }) => {
  return (
    <ul
      className={`${styles.navigationOption} ${desktop.navigationOption}`}
      onClick={handleCloseBurger}
    >
      <li>
        <NavLink
          to={'/'}
          className={({ isActive }) => (isActive ? styles.isActive : undefined)}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/headphones'}
          className={({ isActive }) => (isActive ? styles.isActive : undefined)}
        >
          HEADPHONES
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/speakers'}
          className={({ isActive }) => (isActive ? styles.isActive : undefined)}
        >
          SPEAKERS
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/earphones'}
          className={({ isActive }) => (isActive ? styles.isActive : undefined)}
        >
          EARPHONES
        </NavLink>
      </li>
    </ul>
  )
}
