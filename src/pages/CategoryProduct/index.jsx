import React from 'react'
import { useLocation } from 'react-router-dom';
import { useProducts } from '../../Components/hooks/useProducts';
import { ListOfProduct } from '../../container/ListOfProduct';
import styles from './styles.module.css'
export const CategoryProduct = () => {


    const { products } = useProducts();
    let { pathname: currentCategory } = useLocation();

    currentCategory = currentCategory.slice(1);

    const leakedProducts = products.filter(product => product.category == currentCategory);
    console.log("render categoryProduct")

    return (
        <section className={styles.categoryProduct}>
           
            <ListOfProduct products={leakedProducts}/>
        </section>
    )
}
