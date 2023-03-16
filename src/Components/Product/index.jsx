import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { CounterButton } from '../CounterButton'
import { useCart } from '../hooks/useCart'
import { useProducts } from '../hooks/useProducts'
import { ImageCategoryProduct } from '../ImageCategoryProduct'
import { ImageProduct } from '../ImageProduct'

import styles from './styles.module.css'
import tablet from './tablet.module.css'



export const Product = ({ product }) => {

    const { getCategorias } = useProducts();
    const categories = getCategorias();
    let { pathname } = useLocation();
    const [counterProduct, setCounterProduct] = useState(1);
    const { addCart } = useCart();

    pathname = pathname.slice(1)

    const isCategory = categories.some(category => category.category == pathname);

    const operation = (operacion) => {

        if (operacion == 'restar') {
            setCounterProduct(prev => prev - 1);
        } else {
            setCounterProduct(prev => prev + 1);
        }
    }

    const handleAddCart = (e) => {

        addCart(counterProduct, product);
        setCounterProduct(1);

    }
    console.log("render product")

    return (
        <article className={`${styles.product} ${tablet.product}`} key={product.id}>
            <div>
                {
                    isCategory
                        ? <ImageCategoryProduct product={product} />
                        : <ImageProduct product={product} />
                }
            </div>
            <div className={`${styles.container__description} ${tablet.container__description}`}>
                {
                    product.new &&
                    <span className={styles.newProduct}>new product</span>
                }
                <span
                    className={
                        `${styles.product__name}  
                    ${tablet.product__name} 
                    ${(product.price && !isCategory) && tablet.textDetail}
                    ${(product.price ) && tablet.textBold}
                    `
                    }>{product.name}
                </span>
                {
                    product.description
                    && <p className={`${styles.product__description} ${!isCategory && tablet.textDetail}`}>{product.description}</p>
                }
                {
                    (product.price && !isCategory)
                        ? <div className={styles.footer__description}>
                            <strong>{`$ ${product.price}.00`}</strong>

                            <div className={styles.buttonContainer}>
                                <CounterButton
                                    count={counterProduct}
                                    fnAux={operation}
                                />
                                <button className={`orangeButton`} onClick={handleAddCart}>ADD TO CARD</button>
                            </div>
                        </div>
                        : null
                }
            </div>

        </article>
    )
}
