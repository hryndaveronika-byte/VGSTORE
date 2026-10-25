import { useCart } from '../hooks/useCart'
import styles from './CartPage.module.css'

function CartPage() {
  const { cart, removeFromCart, totalPrice } = useCart()

  return (
    <main className={styles.page}>
      <section className={styles.cart}>
        <h1>Your Shopping Bag</h1>

        <p>
          {cart.length} {cart.length === 1 ? 'item' : 'items'} in your bag
        </p>

        {cart.length === 0 ? (
          <div className={styles.emptyCart}>
            <h2>Your bag is empty</h2>
            <p>Add some beauty favorites to your shopping bag.</p>
          </div>
        ) : (
          cart.map((product) => (
            <div className={styles.item} key={product.title}>
              <img src={product.image} alt={product.title} />

              <div className={styles.itemInfo}>
                <span>{product.brand}</span>

                <h3>{product.title}</h3>

                <p>{product.description}</p>

                <button
                  type="button"
                  className={styles.removeButton}
                  onClick={() => removeFromCart(product.title)}
                >
                  Remove
                </button>
              </div>

              <div className={styles.itemPrice}>
                ${product.price.toFixed(2)}
              </div>
            </div>
          ))
        )}
      </section>

      <aside className={styles.summary}>
        <h2>Order Summary</h2>

        <div>
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <div>
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <hr />

        <div className={styles.total}>
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <button>CHECKOUT →</button>
      </aside>
    </main>
  )
}

export default CartPage
