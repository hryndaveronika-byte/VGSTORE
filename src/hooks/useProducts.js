import { useEffect, useState } from 'react'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadProducts() {
      try {
        const response = await fetch('/api/products', {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error('Не вдалося завантажити товари')
        }

        const data = await response.json()
        setProducts(data.products)
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message)
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadProducts()

    return () => controller.abort()
  }, [])

  return { products, loading, error }
}
