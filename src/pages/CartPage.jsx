import styles from './CartPage.module.css'

function CartPage() {
  return (
    <main className={styles.page}>
      <section className={styles.cart}>
        <h1>Your Shopping Bag</h1>
        <p>3 items in your bag</p>

        <div className={styles.item}>
          <img src="/images/ordinary.jpg.jpg" alt="The Ordinary" />

          <div className={styles.itemInfo}>
            <span>THE ORDINARY</span>
            <h3>Niacinamide 10% + Zinc 1%</h3>
            <p>High-strength vitamin and mineral blemish formula</p>
          </div>

          <div className={styles.itemPrice}>$9.90</div>
        </div>

        <div className={styles.item}>
          <img src="/images/rarebeauty.jpg.jpg" alt="Rare Beauty" />

          <div className={styles.itemInfo}>
            <span>RARE BEAUTY</span>
            <h3>Soft Pinch Liquid Blush</h3>
            <p>Weightless, long-lasting liquid blush</p>
          </div>

          <div className={styles.itemPrice}>$25.00</div>
        </div>

        <div className={styles.item}>
          <img src="/images/olaplex.jpg.jpg" alt="Olaplex" />

          <div className={styles.itemInfo}>
            <span>OLAPLEX</span>
            <h3>No.3 Hair Perfector</h3>
            <p>Bond-building pre-shampoo treatment</p>
          </div>

          <div className={styles.itemPrice}>$30.00</div>
        </div>
      </section>

      <aside className={styles.summary}>
        <h2>Order Summary</h2>

        <div>
          <span>Subtotal</span>
          <span>$64.90</span>
        </div>

        <div>
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <hr />

        <div className={styles.total}>
          <span>Total</span>
          <span>$64.90</span>
        </div>

        <button>CHECKOUT →</button>
      </aside>
    </main>
  )
}

export default CartPage
