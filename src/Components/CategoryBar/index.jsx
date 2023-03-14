import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
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

    const isCategory = categories.some(category => category.category == pathname);

    if (!isCategory) return


    return (
        <div className={styles.categoryBar}>
            {
                pathname == '' //home
                    ?
                    <div className={styles.headerHome}>
                        <span>new product</span>
                        <h2>xx99 mark ii headphones</h2>
                        <p>Experience natural, lifelike audio
                            and exceptional build quality made
                            for the passionate music enthusiast.
                        </p>
                        <NavLink
                            className='orangeButton'
                            to={`/detailsProduct/xx99-mark-two-headphones`}>
                            see product
                        </NavLink>
                    </div>
                    : <h2>{pathname}</h2>
            }
        </div>
    )



}
