import React from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../../Components/hooks/useProducts'
import { ListOfProduct } from '../ListOfProduct'
import { Product } from '../../Components/Product'

import styles from './styles.module.css'
import tablet from './tablet.module.css'
import desktop from './desktop.module.css'

export const DetailsProduct = () => {
  let { slug } = useParams()
  const { products } = useProducts()

  const product = products.find((aux) => aux.slug == slug)

  const parrafos = product.features.split('\n\n') //los saltos de linea se identifican con '/n/n'

  return (
    <section
      className={`${styles.detailsProduct} ${tablet.detailsProduct} ${desktop.detailsProduct}`}
    >
      <Product product={product} />

      <span className={styles.subtitle}>features</span>
      {parrafos.map((cadena, index) => (
        <div key={index} className={styles.information}>
          <p>{cadena}</p>
          <br />
        </div>
      ))}

      <span className={styles.subtitle}>IN THE BOX</span>

      <div>
        {product.includes.map((item) => (
          <div key={item.item} className={styles.box__details}>
            <span>{`${item.quantity}x`}</span>
            <span>{item.item}</span>
          </div>
        ))}
      </div>
      <div className={`${styles.gridContainer} ${tablet.gridContainer}`}>
        <picture className={styles.item1}>
          <source
            media='(min-width:1024px )'
            srcSet={product.gallery.first.desktop}
          />
          <source
            media='(min-width:768px )'
            srcSet={product.gallery.first.tablet}
          />
          <img src={product.gallery.first.mobile} alt='product 1' />
        </picture>

        <picture className={styles.item2}>
          <source
            media='(min-width:1024px )'
            srcSet={product.gallery.second.desktop}
          />
          <source
            media='(min-width:768px )'
            srcSet={product.gallery.second.tablet}
          />
          <img src={product.gallery.second.mobile} alt='product 2' />
        </picture>

        <picture className={styles.item3}>
          <source
            media='(min-width:1024px )'
            srcSet={product.gallery.third.desktop}
          />
          <source
            media='(min-width:768px )'
            srcSet={product.gallery.third.tablet}
          />
          <img src={product.gallery.third.mobile} alt='product 3' />
        </picture>
      </div>
      <span className={`${styles.subtitle} ${styles.suggestion}`}>
        you may also like
      </span>

      <ListOfProduct products={product.others} />
    </section>
  )
}
