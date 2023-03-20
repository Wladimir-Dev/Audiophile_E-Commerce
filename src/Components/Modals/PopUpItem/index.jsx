import React from 'react'
import styles from './styles.module.css'
import tablet from './tablet.module.css'

export const PopUpItem = ({ added }) => {

    return (
        <div className={`${styles.popUpItem} ${tablet.popUpItem} ${added ?styles.added :styles.noAdded}`}>
            {
                added ? <p className={styles.added}>Agregado</p> : <p className={styles.noAdded}>Ya existe</p>
            }
        </div>
    )
}
