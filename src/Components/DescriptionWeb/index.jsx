import React from 'react'

import styles from './styles.module.css'
import desktop from './desktop.module.css'

export const DescriptionWeb = () => {
  return (
    <aside className={`${styles.descriptionWeb} ${desktop.descriptionWeb}`}>
      <picture>
        <source
          media='(min-width: 1024px)'
          srcSet='./assets/shared/desktop/image-best-gear.jpg'
        />
        <source
          media='(min-width: 768px)'
          srcSet='./assets/shared/tablet/image-best-gear.jpg'
        />
        <img src='./assets/shared/mobile/image-best-gear.jpg' alt='product' />
      </picture>
      <div className={`${desktop.information}`}>
        <h2>
          BRINGING YOU THE <span>BEST</span> AUDIO GEAR
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </aside>
  )
}
