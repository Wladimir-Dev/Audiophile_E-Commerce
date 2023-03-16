import React from 'react'
import styles from './styles.module.css'
export const ImageProduct = ({product}) => {
    console.log("render solo")
    return (
        <picture className={styles.picture}>
            <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
            <source media="(min-width: 768px)" srcSet={product.image.tablet} />
            <img src={product.image.mobile} alt={product.name} />
        </picture>
    )
}
