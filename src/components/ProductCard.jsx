import styles from './ProductCard.module.css'

function ProductCard({ image, brand, title, price, description }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageBox}>
        <img src={image} alt={title} />
        <button className={styles.favorite}>♡</button>
      </div>

      <div className={styles.topRow}>
        <span className={styles.brand}>{brand}</span>
        <strong>{price}</strong>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default ProductCard
