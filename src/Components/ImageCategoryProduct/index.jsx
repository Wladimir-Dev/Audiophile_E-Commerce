import React from 'react'

export const ImageCategoryProduct = ({ product }) => {

console.log("render imagecategoryproduct")


    return (
        <picture>
            <source media="(min-width: 1024px)" srcSet={product.categoryImage.desktop} />
            <source media="(min-width: 768px)" srcSet={product.categoryImage.tablet} />
            <img src={product.categoryImage.mobile} alt={product.name} />
        </picture>
    )
}
