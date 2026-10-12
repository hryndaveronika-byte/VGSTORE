import styles from './ProductPage.module.css'

function ProductPage() {
  return (
    <main className={styles.page}>
      <div className={styles.imageSide}>
        <div className={styles.mainImage}>
          <img src="/images/ordinary.jpg.jpg" alt="Niacinamide Serum" />
        </div>
      </div>

      <div className={styles.info}>
        <p className={styles.brand}>THE ORDINARY</p>

        <h1>Niacinamide 10% + Zinc 1%</h1>

        <p className={styles.rating}>
          ★★★★★ &nbsp; (124 reviews) &nbsp; • In stock
        </p>

        <p className={styles.description}>
          A lightweight serum designed to improve the appearance of skin texture
          and visible blemishes.
        </p>

        <div className={styles.price}>$9.90</div>

        <div className={styles.actions}>
          <div className={styles.quantity}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

          <button className={styles.addButton}>ADD TO BAG →</button>
        </div>

        <div className={styles.extra}>♡ Add to wishlist</div>

        <hr />

        <div className={styles.services}>
          <p>Free shipping on orders over $50</p>
          <p>Secure checkout</p>
          <p>Easy returns</p>
        </div>
      </div>
    </main>
  )
}

export default ProductPage
