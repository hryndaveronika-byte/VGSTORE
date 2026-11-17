import { useCart } from '../hooks/useCart'
import styles from './ProductCard.module.css'

function ProductCard({ image, brand, title, price, description }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      image,
      brand,
      title,
      price: Number(String(price).replace('$', '')),
      description,
    })
  }

  return (
    <article className={styles.card}>
      <div className={styles.imageBox}>
        <img src={image} alt={title} />

        <button type="button" className={styles.favorite}>
          ♡
        </button>
      </div>

      <div className={styles.topRow}>
        <span className={styles.brand}>{brand}</span>
        <strong>{price}</strong>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <button
        type="button"
        className={styles.addButton}
        onClick={handleAddToCart}
      >
        ADD TO CART
      </button>
    </article>
  )
}

export default ProductCard
