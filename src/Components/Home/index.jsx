import React from 'react'
import { DescriptionWeb } from '../DescriptionWeb'
import { ListOfCategories } from '../ListOfCategories'
import styles from './styles.module.css'
export const Home = () => {
  return (
    <div className={styles.home}>
      <main>

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
            <button className='orangeButton'>see product</button>
          </div>


          <div className={styles.productHome__2}>
            
            <h2>zx7 speaker</h2>
            <button className='orangeButton'>see product</button>
          </div>


          <div className={styles.productHome__3}>
            <picture>
              <img src="./assets/home/mobile/image-earphones-yx1.jpg" alt="speaker image" />
            </picture>
          </div>


          <div className={styles.productHome__4}>
            <h2>yx1 earphones</h2>
            <button  className='orangeButton'>see product</button>
          </div>
        </section>
      </main>
      <DescriptionWeb />
    </div>
  )
}
