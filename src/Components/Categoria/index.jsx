import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts'

import styles from './styles.module.css'



export const Categoria = () => {

    const { products, getCategorias } = useProducts();
   

    const categorias = getCategorias();

    console.log("render catgeoria")


    return (
        <>
            <section className={`${styles.categoria}`}>
                <ul>
                    {
                        categorias.map(categoria => (
                            <li key={categoria.category}>
                                <div className={styles.product}>
                                    <figure>
                                        <img src={categoria.categoryImage.mobile} alt="categoria imagen" />
                                    </figure>
                                    <span>{categoria.category}</span>
                                    <NavLink to={`/${categoria.category}`}>SHOP </NavLink>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>
            
        </>
    )
}
