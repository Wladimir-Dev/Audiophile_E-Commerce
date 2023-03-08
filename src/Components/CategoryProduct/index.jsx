import React from 'react'
import { useLocation } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import {ListOfProduct} from '../ListOfProduct'
import styles from './styles.module.css'
export const CategoryProduct = () => {


    const { products } = useProducts();
    let { pathname: currentCategory } = useLocation();

    currentCategory = currentCategory.slice(1);

    const leakedProducts = products.filter(product => product.category == currentCategory);
    console.log(["render categoryProduct"])

    return (
        <section className={styles.categoryProduct}>
            <h2>{currentCategory}</h2>
            <ListOfProduct products={leakedProducts}/>
        </section>
    )
}
