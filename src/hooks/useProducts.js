import { useEffect, useState } from 'react'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/beauty')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Помилка завантаження товарів')
        }

        return response.json()
      })
      .then((data) => {
        setProducts(data.products)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return {
    products,
    loading,
    error,
  }
}
