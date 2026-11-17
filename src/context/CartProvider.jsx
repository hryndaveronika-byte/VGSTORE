import { useState } from 'react'
import { CartContext } from './CartContext'

const initialCart = [
  {
    image: '/images/ordinary.jpg.jpg',
    brand: 'THE ORDINARY',
    title: 'Niacinamide 10% + Zinc 1%',
    description: 'High-strength vitamin and mineral blemish formula',
    price: 9.9,
  },
  {
    image: '/images/rarebeauty.jpg.jpg',
    brand: 'RARE BEAUTY',
    title: 'Soft Pinch Liquid Blush',
    description: 'Weightless, long-lasting liquid blush',
    price: 25,
  },
  {
    image: '/images/olaplex.jpg.jpg',
    brand: 'OLAPLEX',
    title: 'No.3 Hair Perfector',
    description: 'Bond-building pre-shampoo treatment',
    price: 30,
  },
]

export function CartProvider({ children }) {
  const [cart, setCart] = useState(initialCart)

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product])
  }

  const removeFromCart = (productTitle) => {
    setCart((currentCart) =>
      currentCart.filter((product) => product.title !== productTitle),
    )
  }

  const totalPrice = cart.reduce(
    (total, product) => total + Number(product.price),
    0,
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
