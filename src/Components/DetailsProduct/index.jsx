import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../Product';
import styles from './styles.module.css'


export const DetailsProduct = ({ cart, setCart }) => {

    let { productId } = useParams();
    const { products } = useProducts();
    const product = products.find(aux => aux.id == productId);
    const [counter, setCounter] = useState(1)
    const [statusCart,setStatusCart]=useState(false);

    const handleCounter = (e) => {

        if (e.target.innerText == '-' && counter == 1) return

        if (e.target.innerText == '-') {
            setCounter(prev => prev = prev - 1);
            return
        }
        if (e.target.innerText == '+') {
            setCounter(prev => prev = prev + 1);
        }

    }
    console.log("render details")

    const handleCart = (e) => {
        const newCart = [...cart,
        {
            id: product.id,
            name: product.name,
            price: product.price,
            count: 1,
            image: product.image.mobile
        }];
        setCart(newCart)

    }



    return (
        <section className={styles.detailsProduct}>
            <Product product={product} />
            <span>{product.price}</span>
            <div className={styles.buttonContainer}>
                <div className={styles.buttonCounter}>
                    <button onClick={handleCounter} >-</button>
                    <span>{counter}</span>
                    <button onClick={handleCounter} >+</button>
                </div>
                <button onClick={handleCart}>ADD TO CARD</button>
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
