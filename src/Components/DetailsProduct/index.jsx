import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { CounterButton } from '../CounterButton';
import { useCart } from '../hooks/useCart';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../Product';
import styles from './styles.module.css'


export const DetailsProduct = () => {

    let { productId } = useParams();
    const { products } = useProducts();
    const product = products.find(aux => aux.id == productId);

    const [counterProduct, setCounterProduct] = useState(1)
    const parrafos = product.features.split('\n\n');
    const { addCart } = useCart();

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

    console.log("render details")
    window.scrollTo(0, 0);

    return (
        <section className={styles.detailsProduct}>
            <Product product={product} />
            <strong>{`$ ${product.price}.00`}</strong>
            <div className={styles.buttonContainer}>
                <CounterButton
                    count={counterProduct}
                    fnAux={operation}
                />

                <button className={`orangeButton`} onClick={handleAddCart}>ADD TO CARD</button>
            </div>
            <span className={styles.subtitle}>features</span>
            {
                parrafos.map(cadena => (
                    <><p>{cadena}</p><br /></>
                )
                )
            }

            <span className={styles.subtitle}>IN THE BOX</span>
            <div >
                {
                    product.includes.map(item => (
                        <div
                            className={styles.box__details}
                            key={item.item}>
                            <span>{`${item.quantity}x`}</span>
                            <span>{item.item}</span>
                        </div>
                    ))
                }
            </div>
            <span className={styles.subtitle}>you may also like</span>


        </section>
    )
}
