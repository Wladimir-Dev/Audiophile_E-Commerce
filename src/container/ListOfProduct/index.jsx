import React from 'react'
import { Product } from '../../Components/Product';


import styles from './styles.module.css'
import desktop from './desktop.module.css'

export const ListOfProduct = ({ products }) => {


    console.log("render list of product")

    return (
        <>
            <section className={`${styles.listOfProduct} `}>
                {
                    products?.map((product, index) => (
                        <div className={`${styles.productContainer} `}
                            key={product.slug}>
                            <Product product={product} girar={index % 2 != 0} />
                        </div>
                    ))
                }

            </section>

        </>
    )
}
