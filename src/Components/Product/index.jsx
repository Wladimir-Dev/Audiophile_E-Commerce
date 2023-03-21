import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CounterButton } from '../CounterButton'
import { useCart } from '../hooks/useCart'
import { useProducts } from '../hooks/useProducts'
import { ImageProduct } from '../ImageProduct'

import styles from './styles.module.css'
import tablet from './tablet.module.css'
import desktop from './desktop.module.css'


import { PopUpItem } from '../Modals/PopUpItem'
import { createPortal } from 'react-dom'



export const Product = ({ product, girar = false }) => {


    const { addCart } = useCart();
    const { typeRoute } = useProducts();

    const [counterProduct, setCounterProduct] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const addedRef = useRef(false);

    const isCategory = typeRoute();

    useEffect(() => {
        if (showModal) {
            setTimeout(() => {
                setShowModal(false);
            }, 2000);
        }
    }, [showModal])



    const operation = (operacion) => {

        operacion == 'restar'
            ? setCounterProduct(prev => prev - 1)
            : setCounterProduct(prev => prev + 1)
    }

    const handleAddCart = (e) => {

        addedRef.current = addCart(counterProduct, product);
        setCounterProduct(1);
        setShowModal(true);

    }

    return (
        <article
            key={product.id}
            className={`${styles.product} ${tablet.product} ${product.price && desktop.product}`}>

            <div className={((girar && isCategory) || (product.price && !isCategory)) ? desktop.girar : undefined}>
                <ImageProduct product={product} fromCategory={isCategory} />
            </div>

            <div
                className={`${styles.container__description} ${desktop.container__description} ${!product.price && `${styles.centerItems} ${desktop.centerItems}`}`}>
                {
                    product.new &&
                    <span className={styles.newProduct}>new product</span>
                }
                <span
                    className={`
                    ${styles.product__name}
                    ${tablet.product__name} 
                    ${(product.price && !isCategory) && tablet.textDetail}
                    ${(product.price) && `${tablet.textBold} ${desktop.product__name}`}
                    ` }>
                    {product.name}
                </span>
                {
                    product.description
                    &&
                    <p className={`
                    ${styles.description} ${desktop.description} 
                    ${!isCategory && tablet.textDetail}
                    `}>
                        {product.description}
                    </p>
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
            {
                showModal && createPortal(<PopUpItem added={addedRef.current} />, document.body)
            }
        </article>

    )
}
