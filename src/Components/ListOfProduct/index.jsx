import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { Categoria } from '../Categoria';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../Product';
import styles from './styles.module.css'

export const ListOfProduct = () => {

    const { products } = useProducts();
    let { pathname: currentCategory } = useLocation();

    currentCategory = currentCategory.slice(1);

    console.log("render list of product")
    window.scrollTo(0, 0);

    return (
        <>
            <section className={styles.listOfProduct}>
                {
                    products.map(product => (
                        product.category == currentCategory &&
                        <div className={styles.productContainer}
                            key={product.id}>
                            <Product product={product} />
                            <NavLink
                                to={`/detailsProduct/${product.id}`}
                                className={`orangeButton`}>see product</NavLink>
                        </div>
                    ))
                }

            </section>
            <Categoria />
        </>
    )
}
