import React from 'react'

export const ImageProduct = ({ product, fromCategory }) => {
  const { mobile, tablet, desktop } = fromCategory
    ? product.categoryImage
    : product.image

  return (
    <picture>
      <source media='(min-width: 1024px)' srcSet={desktop} />
      <source media='(min-width: 768px)' srcSet={tablet} />
      <img src={mobile} alt='product' />
    </picture>
  )
}
