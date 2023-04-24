import React from 'react'
import { DescriptionWeb } from '../../Components/DescriptionWeb'
import { useProducts } from '../../Components/hooks/useProducts'
import { ListOfCategories } from '../../container/ListOfCategories'
import { ListOfProduct } from '../../container/ListOfProduct'

import styles from './styles.module.css'
import desktop from './desktop.module.css'

export const CategoryProduct = () => {
  const { products, getNamePath } = useProducts()

  const currentCategory = getNamePath()

  const leakedProducts = products.filter(
    (product) => product.category == currentCategory
  )

  return (
    <section className={`${styles.categoryProduct} ${desktop.categoryProduct}`}>
      <ListOfProduct products={leakedProducts} />
      <ListOfCategories />
      <DescriptionWeb />
    </section>
  )
}
