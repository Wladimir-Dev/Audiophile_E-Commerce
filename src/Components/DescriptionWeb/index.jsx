import React from 'react'
import styles from "./styles.module.css"


export const DescriptionWeb = () => {
    return (
        <aside className={styles.descriptionWeb}>
            <picture>
                <img src="./assets/shared/mobile/image-best-gear.jpg" alt="" />
            </picture>
            <h2>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h2>
            <p>Located at the heart of New York City,
                Audiophile is the premier store for
                high end headphones, earphones, speakers,
                and audio accessories. We have a large showroom
                and luxury demonstration rooms available for
                you to browse and experience a wide range of
                our products. Stop by our store to meet some of
                the fantastic people who make Audiophile the
                best place to buy your portable audio equipment.
            </p>
        </aside>
    )
}
