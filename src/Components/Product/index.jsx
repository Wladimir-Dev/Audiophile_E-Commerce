import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './styles.module.css'
export const Product = ({ product }) => {



    console.log("render product")

    return (
        <article className={`${styles.product}`} key={product.id}>
            <figure>
                <img src={product.image.mobile} alt={product.name} />
            </figure>
            {product.new && <span>new productt</span>}
            <span>{product.name}</span>
            <p>{product.description}</p>
            
        </article>
    )
}
