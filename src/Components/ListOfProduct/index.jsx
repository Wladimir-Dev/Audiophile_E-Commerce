import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../Product';
import styles from './styles.module.css'

export const ListOfProduct = () => {

    const { products } = useProducts();
    let { pathname: currentCategory } = useLocation();

    currentCategory = currentCategory.slice(1);

    console.log("render list of product")
    return (
        <section className={styles.listOfProduct}>
            {
                products.map(product => (
                    product.category == currentCategory &&
                    <div key={product.id}>
                        <Product product={product} />
                        <NavLink to={`/detailsProduct/${product.id}`}>see productt</NavLink>
                    </div>
                ))
            }

        </section>
    )
}
