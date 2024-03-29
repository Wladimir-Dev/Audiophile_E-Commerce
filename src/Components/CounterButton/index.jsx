import React from 'react'


import styles from './styles.module.css'


export const CounterButton = ({ count, fnAux, fromCard = false }) => {

    const handleCounter = (e) => {

        if (count == 1 && e.target.innerText == '-') {

            if (!fromCard) {
                return
            }
            else {
                window.confirm("¿Seguro eliminar del carrito?") && fnAux('restar')
                return
            }
        }

        if (e.target.innerText == '-') {
            fnAux('restar')
            return
        }
        if (e.target.innerText == '+') {
            fnAux('sumar')
        }

    }


    return (
        <div className={`${styles.buttonCounter} ${fromCard && styles.fromCard}`}>
            <button type='button' onClick={handleCounter} >-</button>
            <span>{count}</span>
            <button type='button' onClick={handleCounter} >+</button>
        </div>
    )
}
