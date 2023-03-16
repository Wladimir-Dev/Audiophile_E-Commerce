import React from 'react'
import { NavLink } from 'react-router-dom'
import { DescriptionWeb } from '../../Components/DescriptionWeb'
import { ListOfCategories } from '../../container/ListOfCategories'


import styles from './styles.module.css'
import tablet from './tablet.module.css'
import desktop from './desktop.module.css'

export const Home = () => {
  return (
    <>
      <main className={`${styles.home} ${tablet.home} ${desktop.home}`}>

        <ListOfCategories />
        <section className={`${styles.productsHome} ${tablet.productsHome} ${desktop.productsHome}`}>

          <div className={`${styles.productHome__1} ${tablet.productHome__1} ${desktop.productHome__1}`}>
            <picture>
              <source media="(min-width: 1024px)" srcSet="./assets/home/desktop/image-speaker-zx9.png" />
              <source media="(min-width: 768px)" srcSet="./assets/home/tablet/image-speaker-zx9.png" />
              <img src="./assets/home/mobile/image-speaker-zx9.png" alt="speaker image" />
            </picture>
            <div className={styles.productHome__1__rigth}>
              <h2>zx9 Speaker</h2>
              <span>
                Upgrade to premium speakers that are phenomenally
                built to deliver truly remarkable sound
              </span>
              <NavLink
                className='orangeButton'
                to={`/detailsProduct/zx9-speaker`}>see product
              </NavLink>
            </div>


          </div>


          <div className={`${styles.productHome__2} ${tablet.productHome__2} ${desktop.productHome__2}`}>

            <h2>zx7 speaker</h2>
            <NavLink
              className='orangeButton'
              to={`/detailsProduct/zx7-speaker`}>see product
            </NavLink>
          </div>


          <div className={styles.productHome__3}>
            <picture>
              <source media="(min-width: 1024px)" srcSet="./assets/home/desktop/image-earphones-yx1.jpg" />
              <source media="(min-width: 768px)" srcSet="./assets/home/tablet/image-earphones-yx1.jpg" />
              <img src="./assets/home/mobile/image-earphones-yx1.jpg" alt="speaker image" />
            </picture>
          </div>


          <div className={`${styles.productHome__4} ${tablet.productHome__4}`}>
            <h2>yx1 earphones</h2>
            <NavLink
              className='orangeButton'
              to={`/detailsProduct/yx1-earphones`}>see product
            </NavLink>
          </div>
        </section>
        <DescriptionWeb />
      </main>
     
    </>
  )
}
