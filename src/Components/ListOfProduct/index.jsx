import React from 'react'
import { NavLink} from 'react-router-dom';
import { DescriptionWeb } from '../DescriptionWeb';
import { ListOfCategories } from '../ListOfCategories';
import { Product } from '../Product';
import styles from './styles.module.css'

export const ListOfProduct = ({products}) => {


    console.log("render list of product")
    window.scrollTo(0, 0);

    return (
        <>
            <section className={styles.listOfProduct}>
                {
                    products?.map(product => (
                        <div className={styles.productContainer}
                            key={product.slug}
                            >
                            <Product product={product} />
                            <NavLink
                                to={`/detailsProduct/${product.slug}`}
                                className={`orangeButton`}>see product</NavLink>
                        </div>
                    ))
                }

            </section>
            <ListOfCategories />
            <DescriptionWeb/>
        </>
    )
}
