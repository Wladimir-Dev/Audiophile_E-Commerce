import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts'

import styles from './styles.module.css'



export const Categoria = () => {

    const { products, getCategorias } = useProducts();


    const categorias = getCategorias();

    console.log("render catgeoria")
    window.scrollTo(0, 0);


    return (
        <>
            <section className={`${styles.categoria}`}>
                <ul>
                    {
                        categorias.map(categoria => (
                            <li
                                key={categoria.category}
                                className={styles.product}>
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
