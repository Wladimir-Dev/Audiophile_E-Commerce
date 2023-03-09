import React from 'react'
import { useLocation } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import styles from './styles.module.css'
export const CategoryBar = () => {

    const { getCategorias } = useProducts();
    const categories = getCategorias();
    let { pathname } = useLocation();

    pathname = pathname.slice(1);


    categories.push(
        {
            category: ''
        })


    const navHome = () => {
        return <h2>Home</h2>
    }
    const navCategory = () => {
        return <h2>{pathname}</h2>
    }

    const isCategory = categories.some(category => category.category == pathname);

    if (!isCategory) return


    return (
        <div className={styles.categoryBar}>
            {
                pathname == ''
                    ?
                    <div className={styles.headerHome}>
                        <span>new product</span>
                        <h2>xx99 mark ii headphones</h2>
                        <p>Experience natural, lifelike audio
                            and exceptional build quality made
                            for the passionate music enthusiast.
                        </p>
                        <button className='orangeButton'>see product</button>
                    </div>
                    : <h2>{pathname}</h2>
            }
        </div>
    )



}
