import { NavLink } from 'react-router'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <NavLink className={styles.logo} to="/">
        VG STORE
      </NavLink>

      <nav className={styles.nav}>
        <NavLink to="/">HOME</NavLink>

        <NavLink to="/shop">SHOP</NavLink>

        <NavLink to="/product">PRODUCT</NavLink>

        <NavLink to="/cart">BAG</NavLink>

        <NavLink to="/login">LOGIN</NavLink>
      </nav>
    </header>
  )
}

export default Header
