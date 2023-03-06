import { useState } from "react"
import data from '.././../mocks/data.json'


export function useProducts() {
    const productsJson = data;

    const [products, setProducts] = useState(productsJson)

    const getCategorias = () => {

        return products.filter((product, index, self) =>
            index === self.findIndex((t) => (
                t.category === product.category))
        )

    }

    return { products, getCategorias }
}
