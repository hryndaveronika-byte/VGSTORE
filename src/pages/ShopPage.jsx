import ProductCard from '../components/ProductCard'
import styles from './ShopPage.module.css'

function ShopPage() {
  const products = [
    {
      image: '/images/cerave.jpg.jpg',
      brand: 'CERAVE',
      title: 'Hydrating Cleanser',
      price: '$14.99',
      description: 'Gentle face wash for normal to dry skin',
    },
    {
      image: '/images/ordinary.jpg.jpg',
      brand: 'THE ORDINARY',
      title: 'Niacinamide Serum',
      price: '$9.90',
      description: 'Clarifying serum for visible pores',
    },
    {
      image: '/images/rarebeauty.jpg.jpg',
      brand: 'RARE BEAUTY',
      title: 'Soft Pinch Blush',
      price: '$25.00',
      description: 'Weightless long-lasting liquid blush',
    },
    {
      image: '/images/mascara.jpg.jpg',
      brand: 'MAYBELLINE',
      title: 'Lash Sensational Mascara',
      price: '$12.50',
      description: 'Full-fan effect volumizing mascara',
    },
    {
      image: '/images/laroche.jpg.jpg',
      brand: 'LA ROCHE-POSAY',
      title: 'Anthelios SPF',
      price: '$21.00',
      description: 'Lightweight broad-spectrum face sunscreen',
    },
    {
      image: '/images/olaplex.jpg.jpg',
      brand: 'OLAPLEX',
      title: 'No.3 Hair Perfector',
      price: '$30.00',
      description: 'Bond-building pre-shampoo treatment',
    },
    {
      image: '/images/bodymist.jpg.jpg',
      brand: 'SOL DE JANEIRO',
      title: 'Body Mist',
      price: '$24.00',
      description: 'Warm addictive perfumed body mist',
    },
    {
      image: '/images/goodgirl.jpg.jpg',
      brand: 'CAROLINA HERRERA',
      title: 'Good Girl',
      price: '$95.00',
      description: 'Bold floral amber eau de parfum',
    },
  ]

  return (
    <main className={styles.shop}>
      <h1>
        Shop <span>All</span>
      </h1>

      <p className={styles.subtitle}>
        Discover our selection of beauty, skincare, makeup, haircare and
        fragrance essentials.
      </p>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.title}
            image={product.image}
            brand={product.brand}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </main>
  )
}

export default ShopPage
