import React from 'react'
import styles from './styles.module.css'
export const CounterButton = ({ counterProduct, setCounterProduct, fromCard = false }) => {

    const handleCounter = (e) => {

        if (e.target.innerText == '-' && counterProduct == 1) {

            if (!fromCard) {
                return
            }
            else{
                alert("seguro de eliminar")
            }
        }

        if (e.target.innerText == '-') {
            setCounterProduct(prev => prev = prev - 1);
            return
        }
        if (e.target.innerText == '+') {
            setCounterProduct(prev => prev = prev + 1);
        }

    }


    return (
        <div className={styles.buttonCounter}>
            <button onClick={handleCounter} >-</button>
            <span>{counterProduct}</span>
            <button onClick={handleCounter} >+</button>
        </div>
    )
}
