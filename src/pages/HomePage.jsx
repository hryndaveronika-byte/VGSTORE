import styles from './HomePage.module.css'

function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.smallTitle}>— BEAUTY ESSENTIALS</p>

          <h1>
            Everything you need for
            <br />
            your <span>beauty routine.</span>
          </h1>

          <p className={styles.description}>
            Discover makeup, skincare, haircare, body care and fragrances from
            your favorite brands.
          </p>

          <div className={styles.buttons}>
            <button>SHOP NOW →</button>
            <a href="#">Explore new arrivals</a>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img src="/images/hero.jpg.jpg" alt="Beauty products" />
        </div>
      </section>

      <section className={styles.categories}>
        <h2>Shop by category</h2>

        <div className={styles.grid}>
          <div className={styles.categoryCard}>
            <img src="/images/skincare.jpg.jpg" alt="Skincare" />
            <div>SKINCARE</div>
          </div>

          <div className={styles.categoryCard}>
            <img src="/images/makeup.jpg.jpg" alt="Makeup" />
            <div>MAKEUP</div>
          </div>

          <div className={styles.categoryCard}>
            <img src="/images/haircare.jpg.jpg" alt="Haircare" />
            <div>HAIRCARE</div>
          </div>

          <div className={styles.categoryCard}>
            <img src="/images/fragrance.jpg.jpg" alt="Fragrance" />
            <div>FRAGRANCE</div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
