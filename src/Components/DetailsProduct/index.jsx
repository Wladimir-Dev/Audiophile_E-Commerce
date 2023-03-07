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

    return (
        <section className={styles.detailsProduct}>
            <Product product={product} />
            <span>{product.price}</span>
            <div className={styles.buttonContainer}>
                <CounterButton
                    count={counterProduct}
                    fnAux={operation}
                />

                <button onClick={handleAddCart}>ADD TO CARD</button>
            </div>
            <p>{product.features}</p>
            <div>
                <span>IN THE BOX</span>
                <div>
                    {
                        product.includes.map(item => (
                            <div key={item.item}>
                                <span>{`${item.quantity}x`}</span>
                                <span>{item.item}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
