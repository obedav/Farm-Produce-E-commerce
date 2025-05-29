// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  // Featured produce categories
  const categories = [
    { id: 1, name: 'Fresh Vegetables', image: '/vegetables.jpg', count: 24 },
    { id: 2, name: 'Organic Fruits', image: '/fruits.jpg', count: 18 },
    { id: 3, name: 'Grains & Cereals', image: '/grains.jpg', count: 12 },
    { id: 4, name: 'Dairy Products', image: '/dairy.jpg', count: 9 },
  ];

  // Featured seasonal products (prices updated to Naira)
  const featuredProducts = [
    { id: 1, name: 'Farm Fresh Tomatoes', price: 1500, unit: 'kg', image: '/tomatoes.jpg', farmer: 'Green Valley Farm' },
    { id: 2, name: 'Organic Sweet Corn', price: 600, unit: 'ear', image: '/corn.jpg', farmer: 'Sunshine Organics' },
    { id: 3, name: 'Free-Range Eggs', price: 2000, unit: 'dozen', image: '/eggs.jpg', farmer: 'Happy Hen Farm' },
    { id: 4, name: 'Fresh Spinach', price: 1000, unit: 'bunch', image: '/spinach.jpg', farmer: 'River Creek Gardens' },
  ];

  // Naira formatter
  const formatNaira = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative rounded-lg overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-dark)]/90 to-[var(--primary)]/70 z-10"></div>
        <div className="h-[500px] bg-[var(--primary-light)] relative">
          {/* This would be replaced with an actual image */}
          <div className="absolute inset-0 flex items-center justify-center text-[var(--primary-dark)]/30 text-2xl font-bold">
            Farm Image Background
          </div>
        </div>
        <div className="absolute inset-0 flex items-center z-20 px-8 md:px-16">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
              Farm Fresh Produce Delivered to Your Door
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Support local farmers and enjoy the freshest seasonal produce straight from the farm to your table
            </p>
            <Link 
              href="/products" 
              className="btn-primary"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-[var(--text)]">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <Link key={category.id} href={`/products?category=${category.id}`} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="h-40 bg-[var(--primary-light)] relative">
                  {/* This would be replaced with an actual image */}
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--primary-dark)]/30 text-xl font-bold">
                    {category.name} Image
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg group-hover:text-[var(--primary)] transition">
                    {category.name}
                  </h3>
                  <p className="text-[var(--text-light)] text-sm">{category.count} Products</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16 bg-[var(--primary-light)] py-12 px-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-[var(--primary-dark)]">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl text-[var(--primary)]">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">Browse Products</h3>
            <p className="text-[var(--text-light)]">Explore our selection of fresh, seasonal produce from local farmers</p>
          </div>
          <div className="text-center">
            <div className="bg-white h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl text-[var(--primary)]">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">Place Your Order</h3>
            <p className="text-[var(--text-light)]">Select your items and choose your preferred delivery time</p>
          </div>
          <div className="text-center">
            <div className="bg-white h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl text-[var(--primary)]">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">Receive Fresh Delivery</h3>
            <p className="text-[var(--text-light)]">Get farm-fresh produce delivered right to your doorstep</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[var(--text)]">Featured Products</h2>
          <Link href="/products" className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-medium">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <Link href={`/products/${product.id}`}>
                <div className="product-image">
                  {/* This would be replaced with an actual image */}
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--primary-dark)]/30 text-xl font-bold">
                    {product.name}
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-farmer">{product.farmer}</div>
                  <h3 className="product-name">
                    {product.name}
                  </h3>
                  <p className="product-price">
                    {formatNaira(product.price)} <span className="product-unit">/ {product.unit}</span>
                  </p>
                </div>
              </Link>
              <div className="px-4 pb-4">
                <button className="w-full py-2 bg-[var(--primary)] text-white rounded text-sm font-medium hover:bg-[var(--primary-dark)] transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Farmers Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-[var(--text)]">Meet Our Farmers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-[var(--primary-light)] md:h-auto h-48 relative">
                {/* This would be replaced with an actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-[var(--primary-dark)]/30 text-xl font-bold">
                  Farmer Image
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">Green Valley Farm</h3>
                <p className="text-[var(--text-light)] mb-4">
                  Third-generation farmers specializing in sustainable vegetable farming without harmful pesticides.
                </p>
                <Link href="/farmers/1" className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-medium">
                  View Products →
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-[var(--primary-light)] md:h-auto h-48 relative">
                {/* This would be replaced with an actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-[var(--primary-dark)]/30 text-xl font-bold">
                  Farmer Image
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">Sunshine Organics</h3>
                <p className="text-[var(--text-light)] mb-4">
                  Certified organic farm dedicated to growing nutritious fruits and vegetables with regenerative practices.
                </p>
                <Link href="/farmers/2" className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-medium">
                  View Products →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="mb-16 bg-[var(--earth-light)] py-12 px-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-[var(--earth)]">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-[var(--primary-light)] rounded-full"></div>
              <div className="ml-4">
                <h4 className="font-semibold text-[var(--text)]">Sarah Johnson</h4>
                <div className="flex text-[var(--sun-yellow)]">
                  ★★★★★
                </div>
              </div>
            </div>
            <p className="text-[var(--text-light)]">
              "I've never tasted vegetables this fresh before! The tomatoes have so much flavor compared to store-bought ones. Delivery was prompt and the packaging was eco-friendly."
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-[var(--primary-light)] rounded-full"></div>
              <div className="ml-4">
                <h4 className="font-semibold text-[var(--text)]">Michael Thompson</h4>
                <div className="flex text-[var(--sun-yellow)]">
                  ★★★★★
                </div>
              </div>
            </div>
            <p className="text-[var(--text-light)]">
              "Love knowing exactly which farm my food comes from. The quality is outstanding and it feels good supporting local agriculture. Will definitely be ordering regularly!"
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-[var(--primary-light)] rounded-full"></div>
              <div className="ml-4">
                <h4 className="font-semibold text-[var(--text)]">Jennifer Lee</h4>
                <div className="flex text-[var(--sun-yellow)]">
                  ★★★★★
                </div>
              </div>
            </div>
            <p className="text-[var(--text-light)]">
              "The seasonal produce box is a great value and introduces me to new vegetables I wouldn't normally try. My family loves the farm-fresh eggs too!"
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[var(--primary)] text-white py-12 rounded-lg mb-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Fresh Updates</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for seasonal recipes, farm news, and special offers.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-md text-[var(--text)] focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[var(--accent)] text-white px-6 py-3 rounded-r-md font-semibold hover:bg-[var(--accent)]/90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}