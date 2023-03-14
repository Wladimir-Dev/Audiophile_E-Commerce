import React from 'react'
import { NavLink } from 'react-router-dom'
import { DescriptionWeb } from '../../Components/DescriptionWeb'
import { ListOfCategories } from '../../container/ListOfCategories'
import styles from './styles.module.css'
export const Home = () => {
  return (
    <>
      <main className={styles.home}>

        <ListOfCategories />
        <section className={styles.productsHome}>

          <div className={styles.productHome__1}>
            <picture>
              <img src="./assets/home/mobile/image-speaker-zx9.png" alt="speaker image" />
            </picture>
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


          <div className={styles.productHome__2}>

            <h2>zx7 speaker</h2>
            <NavLink
              className='orangeButton'
              to={`/detailsProduct/zx7-speaker`}>see product
            </NavLink>
          </div>


          <div className={styles.productHome__3}>
            <picture>
              <img src="./assets/home/mobile/image-earphones-yx1.jpg" alt="speaker image" />
            </picture>
          </div>


          <div className={styles.productHome__4}>
            <h2>yx1 earphones</h2>
            <NavLink
              className='orangeButton'
              to={`/detailsProduct/yx1-earphones`}>see product
            </NavLink>
          </div>
        </section>
      </main>
      <DescriptionWeb />
    </>
  )
}
