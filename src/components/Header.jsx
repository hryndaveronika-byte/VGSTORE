import styles from './Header.module.css'

function Header({ setPage }) {
  return (
    <header className={styles.header}>
      <button className={styles.logo} onClick={() => setPage('home')}>
        VG STORE
      </button>

      <nav className={styles.nav}>
        <button onClick={() => setPage('home')}>HOME</button>

        <button onClick={() => setPage('shop')}>SHOP</button>

        <button onClick={() => setPage('shop')}>NEW IN</button>

        <button onClick={() => setPage('shop')}>BRANDS</button>

        <button onClick={() => setPage('product')}>PRODUCT</button>

        <button onClick={() => setPage('cart')}>BAG</button>

        <button onClick={() => setPage('login')}>LOGIN</button>
      </nav>
    </header>
  )
}

export default Header
