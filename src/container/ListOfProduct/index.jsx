import React from 'react'
import { Product } from '../../Components/Product';


import styles from './styles.module.css'

export const ListOfProduct = ({ products }) => {

    return (
        <>
            <section className={`${styles.listOfProduct} `}>
                {
                    products?.map((product, index) => (
                        <div key={product.slug} className={styles.productContainer}>
                            <Product product={product} girar={index % 2 != 0} />
                        </div>
                    ))
                }

            </section>

        </>
    )
}
