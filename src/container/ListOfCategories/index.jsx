import React from 'react'
import { NavLink } from 'react-router-dom'
import { useProducts } from '../../Components/hooks/useProducts'

import styles from './styles.module.css'
import tablet from './tablet.module.css'
import desktop from './desktop.module.css'

const IMAGES_CATEGORY = [
  './assets/shared/desktop/image-category-thumbnail-earphones.png',
  './assets/shared/desktop/image-category-thumbnail-headphones.png',
  './assets/shared/desktop/image-category-thumbnail-speakers.png',
]

export const ListOfCategories = () => {
  const { getCategorias } = useProducts()

  const categorias = getCategorias()

  return (
    <>
      <section
        className={`${styles.listOfCategories} ${tablet.listOfCategories} ${desktop.listOfCategories}`}
      >
        <ul>
          {categorias.map(
            (categoria, index) =>
              categoria.category != '' && (
                <li
                  key={categoria.category}
                  className={`${styles.category} ${desktop.category}`}
                >
                  <figure>
                    <img src={IMAGES_CATEGORY[index]} alt='category' />
                  </figure>
                  <strong className={styles.title}>{categoria.category}</strong>
                  <NavLink to={`/${categoria.category}`}>
                    SHOP{' '}
                    <img
                      src='./assets/shared/desktop/icon-arrow-right.svg'
                      alt='arrow icon'
                    />
                  </NavLink>
                </li>
              )
          )}
        </ul>
      </section>
    </>
  )
}
