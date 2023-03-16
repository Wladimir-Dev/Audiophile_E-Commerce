import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { CounterButton } from '../CounterButton'
import { useCart } from '../hooks/useCart'
import { useProducts } from '../hooks/useProducts'
import { ImageCategoryProduct } from '../ImageCategoryProduct'
import { ImageProduct } from '../ImageProduct'

import styles from './styles.module.css'
import tablet from './tablet.module.css'
import desktop from './desktop.module.css'



export const Product = ({ product, girar = false }) => {

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
    console.log("girar= "+girar)

    return (
        <article
            className={`${styles.product} ${tablet.product} ${product.price && desktop.product}`} key={product.id}>
            <div className={((girar && isCategory)||(product.price && !isCategory)) ? desktop.girar :undefined}>
                {
                    isCategory
                        ? <ImageCategoryProduct product={product} />
                        : <ImageProduct product={product} />
                }
            </div>
            <div
                className={`${styles.container__description} ${desktop.container__description} ${!product.price && `${styles.centerItems} ${desktop.centerItems}`}`}>
                {
                    product.new &&
                    <span className={styles.newProduct}>new product</span>
                }
                <span
                    className={
                        `${styles.product__name}
                    ${tablet.product__name} 
                    ${(product.price && !isCategory) && tablet.textDetail}
                    ${(product.price) && `${tablet.textBold} ${desktop.product__name}`}
                    `
                    }>{product.name}
                </span>
                {
                    product.description
                    && <p className={`${styles.product__description} ${desktop.product__description} ${!isCategory && tablet.textDetail}`}>{product.description}</p>
                }
                {
                    (product.price && !isCategory)
                        ? <div className={styles.footer__description}>
                            <strong>{`$ ${product.price}.00`}</strong>

                            <div className={`${styles.buttonContainer} ${desktop.buttonContainer}`}>
                                <CounterButton
                                    count={counterProduct}
                                    fnAux={operation}
                                />
                                <button className={`orangeButton`} onClick={handleAddCart}>ADD TO CARD</button>
                            </div>
                        </div>
                        : <NavLink
                            to={`/detailsProduct/${product.slug}`}
                            className={`orangeButton `}>
                            see product
                        </NavLink>
                }
            </div>

        </article>
    )
}
