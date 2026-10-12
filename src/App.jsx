import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'

function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      <Header setPage={setPage} />

      {page === 'home' && <HomePage />}
      {page === 'shop' && <ShopPage />}
      {page === 'product' && <ProductPage />}
      {page === 'cart' && <CartPage />}
      {page === 'login' && <LoginPage />}

      <Footer />
    </>
  )
}

export default App
