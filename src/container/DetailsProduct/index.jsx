import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { CounterButton } from '../../Components/CounterButton';
import { useCart } from '../../Components/hooks/useCart';
import { useProducts } from '../../Components/hooks/useProducts';
import { ListOfProduct } from '../ListOfProduct';
import { Product } from '../../Components/Product';
import styles from './styles.module.css'


export const DetailsProduct = () => {

    let { slug } = useParams();
    const { products } = useProducts();

    const product = products.find(aux => aux.slug == slug);

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

    console.log("render DetailsProduct")

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
                parrafos.map((cadena, index) => (
                    <><p key={index}>{cadena}</p><br /></>
                ))
            }

            <span className={styles.subtitle}>IN THE BOX</span>

            <div >
                {
                    product.includes.map(item => (
                        <div
                            key={item.item}
                            className={styles.box__details}
                        >
                            <span>{`${item.quantity}x`}</span>
                            <span>{item.item}</span>
                        </div>
                    ))
                }
            </div>
            <div className={styles.gridContainer}>
                <picture className={styles.item1}>
                    <img src={product.gallery.first.mobile} alt="product image 1" />
                </picture>
                <picture className={styles.item2}>
                    <img src={product.gallery.second.mobile} alt="product image 2" />
                </picture>
                <picture className={styles.item3}>
                    <img src={product.gallery.third.mobile} alt="product image 3" />
                </picture>
            </div>
            <span className={`${styles.subtitle} ${styles.suggestion}`}>you may also like</span>
            <ListOfProduct products={product.others} />

        </section>
    )
}
