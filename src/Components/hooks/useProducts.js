import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import data from '.././../mocks/data.json'

export function useProducts() {
  const productsJson = data
  let { pathname } = useLocation()

  const [products] = useState(productsJson)

  const getCategorias = () => {
    let auxCategories

    auxCategories = products.filter(
      (product, index, self) =>
        index === self.findIndex((t) => t.category === product.category)
    )

    auxCategories.push({ category: '' })

    return auxCategories
  }

  const typeRoute = () => {
    const categories = getCategorias()
    const auxPathName = getNamePath()

    return categories.some((category) => category.category == auxPathName)
  }

  const getNamePath = () => {
    return pathname.slice(1) //elimino el caracter '/' del path
  }

  return { products, getCategorias, typeRoute, getNamePath }
}
