import ProductCard from '../components/ProductCard'
import { useProducts } from '../hooks/useProducts'
import styles from './ShopPage.module.css'

function ShopPage() {
  const { products, loading, error } = useProducts()

  return (
    <main className={styles.shop}>
      <h1>
        Shop <span>All</span>
      </h1>

      <p className={styles.subtitle}>
        Discover our selection of beauty, skincare, makeup, haircare and
        fragrance essentials.
      </p>

      {loading && <p role="status">Завантаження товарів...</p>}

      {error && <p role="alert">{error}</p>}

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            brand={product.brand}
            title={product.title}
            price={`$${product.price.toFixed(2)}`}
            description={product.description}
          />
        ))}
      </div>
    </main>
  )
}

export default ShopPage
