import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useProducts } from '../../Components/hooks/useProducts';


import styles from './styles.module.css'
import tablet from './tablet.module.css'
import desktop from './desktop.module.css'


export const ListOfCategories = () => {

    const { products, getCategorias } = useProducts();


    const categorias = getCategorias();

    console.log("render catgeoria")


    return (
        <>
            <section className={`${styles.categoria} ${tablet.categoria} ${desktop.categoria}`}>
                <ul >
                    {
                        categorias.map(categoria => (
                            <li key={categoria.category} className={`${styles.product} ${desktop.product}`}>
                                <figure>
                                    <img src={categoria.categoryImage.mobile} alt="categoria imagen" />
                                </figure>
                                <strong className={styles.category__title}>{categoria.category}</strong>
                                <NavLink to={`/${categoria.category}`}>
                                    SHOP <img src="./assets/shared/desktop/icon-arrow-right.svg" alt="" />
                                </NavLink>

                            </li>
                        ))
                    }
                </ul>
            </section>

        </>
    )
}
