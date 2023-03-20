import { useState } from "react"
import data from '.././../mocks/data.json'


export function useProducts() {
    const productsJson = data;

    const [products, setProducts] = useState(productsJson)

    const getCategorias = () => {
        let auxCategories;

        auxCategories = products.filter((product, index, self) =>
            index === self.findIndex((t) => (
                t.category === product.category))
        )

        auxCategories.push({ category: '' })
        return auxCategories;
    }

    return { products, getCategorias }
}
