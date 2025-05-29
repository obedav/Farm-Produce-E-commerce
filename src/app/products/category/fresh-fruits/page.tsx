// src/app/products/category/fresh-fruits/page.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function FreshFruitsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [sortBy, setSortBy] = useState('featured');
  
  // Get subcategory from URL params - handle it safely
  const subcategoryParam = searchParams?.subcategory;
  const activeSubcategory = typeof subcategoryParam === 'string' ? subcategoryParam : 'All Fruits';

  // Sample fresh fruits products
  const fruits = [
    {
      id: 21,
      name: 'Sweet Pineapples',
      price: 2500,
      unit: 'piece',
      farmer: 'Tropical Paradise Farm',
      farming_method: 'Naturally Grown',
      image: '🍍',
      rating: 4.9,
      reviews: 156,
      discount: 15,
      originalPrice: 2941,
      inStock: true,
      fastDelivery: true,
      seasonal: true
    },
    {
      id: 22,
      name: 'Ripe Mangoes',
      price: 3200,
      unit: 'kg',
      farmer: 'Sunshine Orchards',
      farming_method: 'Organic',
      image: '🥭',
      rating: 4.8,
      reviews: 203,
      inStock: true,
      fastDelivery: true,
      seasonal: true
    },
    {
      id: 23,
      name: 'Fresh Oranges',
      price: 1800,
      unit: 'kg',
      farmer: 'Citrus Grove',
      farming_method: 'Certified Organic',
      image: '🍊',
      rating: 4.7,
      reviews: 89,
      inStock: true,
      fastDelivery: false
    },
    {
      id: 24,
      name: 'Ripe Bananas',
      price: 1200,
      unit: 'bunch',
      farmer: 'Golden Harvest',
      farming_method: 'Naturally Grown',
      image: '🍌',
      rating: 4.6,
      reviews: 134,
      discount: 10,
      originalPrice: 1333,
      inStock: true,
      fastDelivery: true
    },
    {
      id: 25,
      name: 'Fresh Avocados',
      price: 4500,
      unit: 'kg',
      farmer: 'Green Gold Farm',
      farming_method: 'Organic',
      image: '🥑',
      rating: 4.9,
      reviews: 78,
      inStock: true,
      fastDelivery: true
    },
    {
      id: 26,
      name: 'Sweet Watermelon',
      price: 2000,
      unit: 'piece',
      farmer: 'Refreshing Farms',
      farming_method: 'Naturally Grown',
      image: '🍉',
      rating: 4.5,
      reviews: 92,
      inStock: false,
      fastDelivery: false,
      seasonal: true
    },
    {
      id: 27,
      name: 'Fresh Coconuts',
      price: 800,
      unit: 'piece',
      farmer: 'Coastal Groves',
      farming_method: 'Traditional',
      image: '🥥',
      rating: 4.4,
      reviews: 67,
      inStock: true,
      fastDelivery: true
    },
    {
      id: 28,
      name: 'Sweet Papaya',
      price: 1500,
      unit: 'piece',
      farmer: 'Tropical Delight',
      farming_method: 'Organic',
      image: '🥭',
      rating: 4.7,
      reviews: 45,
      discount: 20,
      originalPrice: 1875,
      inStock: true,
      fastDelivery: false,
      seasonal: true
    }
  ];

  // Filter products based on active subcategory
  const filteredProducts = fruits.filter(product => {
    if (activeSubcategory === 'All Fruits') return true;
    
    // Map subcategories to products
    const subcategoryMap: { [key: string]: string[] } = {
      'Citrus Fruits': ['Fresh Oranges'],
      'Tropical Fruits': ['Sweet Pineapples', 'Ripe Mangoes', 'Sweet Papaya'],
      'Berries & Grapes': ['Fresh Berries', 'Grapes'],
      'Seasonal Fruits': ['Sweet Watermelon', 'Seasonal Specials'],
      'Dried Fruits': ['Dried Fruits'],
      'Fruit Bundles': ['Ripe Bananas', 'Fresh Avocados', 'Fresh Coconuts']
    };
    
    return subcategoryMap[activeSubcategory]?.some(name => 
      product.name.toLowerCase().includes(name.toLowerCase())
    ) || false;
  });

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const subcategories = [
    'All Fruits',
    'Citrus Fruits',
    'Tropical Fruits',
    'Berries',
    'Stone Fruits',
    'Exotic Fruits',
    'Seasonal Specials'
  ];

  const seasons = [
    'All Seasons',
    'Dry Season',
    'Rainy Season',
    'Year Round'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center mb-4">
            <Link href="/products" className="text-orange-200 hover:text-white">
              Products
            </Link>
            <span className="mx-2">›</span>
            <span>Fresh Fruits</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Fresh Fruits</h1>
          <p className="text-orange-100 text-lg max-w-2xl">
            Indulge in nature's candy! Our fresh fruits are handpicked at perfect ripeness, 
            bursting with natural sweetness, vitamins, and nutrients straight from local orchards.
          </p>
          <div className="flex items-center gap-6 mt-6 text-orange-100">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🌟</span>
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🚚</span>
              <span>Same Day Delivery</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🍃</span> 
              <span>Naturally Sweet</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4 space-y-6">
            {/* Subcategories */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Categories</h3>
              <ul className="space-y-2">
                {subcategories.map((category, index) => (
                  <li key={index}>
                    <button 
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        activeSubcategory === category || (index === 0 && !activeSubcategory) 
                          ? 'bg-orange-100 text-orange-800' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        if (category === 'All Fruits') {
                          window.history.pushState({}, '', '/products/category/fresh-fruits');
                        } else {
                          window.history.pushState({}, '', `/products/category/fresh-fruits?subcategory=${encodeURIComponent(category)}`);
                        }
                        window.location.reload();
                      }}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Seasonal Availability */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Seasonal Availability</h3>
              <div className="space-y-2">
                {seasons.map((season, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="radio"
                      name="season"
                      className="form-radio h-4 w-4 text-orange-600"
                      defaultChecked={index === 0}
                    />
                    <span className="ml-2 text-gray-700">{season}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Price Range</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>₦500</span>
                  <span>₦5,000+</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
              </div>
            </div>

            {/* Special Offers */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Special Offers</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-600 rounded" />
                  <span className="ml-2 text-gray-700">On Sale</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-600 rounded" />
                  <span className="ml-2 text-gray-700">Seasonal Special</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-600 rounded" />
                  <span className="ml-2 text-gray-700">Bundle Deals</span>
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort and Filter Bar */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="text-gray-600">
                Showing <span className="font-medium text-gray-900">{filteredProducts.length}</span> fresh fruits
                {activeSubcategory !== 'All Fruits' && (
                  <span className="ml-2 text-orange-600">in "{activeSubcategory}"</span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <label className="text-gray-700">Sort by:</label>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-1 focus:ring-2 focus:ring-orange-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="seasonal">Seasonal First</option>
                </select>
              </div>
            </div>

            {/* Seasonal Banner */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-lg mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2">🌞 Seasonal Fruits Available Now!</h2>
                  <p className="text-yellow-100">Don't miss out on these limited-time seasonal favorites</p>
                </div>
                <button className="bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-orange-50">
                  View Seasonal
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/products/${product.id}`}>
                    <div className="relative h-48 bg-gradient-to-br from-yellow-50 to-orange-100 flex items-center justify-center">
                      <span className="text-6xl">{product.image}</span>
                      {product.discount && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          -{product.discount}%
                        </div>
                      )}
                      {product.seasonal && (
                        <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                          Seasonal
                        </div>
                      )}
                      {product.fastDelivery && (
                        <div className="absolute bottom-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                          Fast Delivery
                        </div>
                      )}
                    </div>
                  </Link>
                  
                  <div className="p-4">
                    <div className="text-sm text-gray-600 mb-1">{product.farmer}</div>
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                      <Link href={`/products/${product.id}`} className="hover:text-orange-600">
                        {product.name}
                      </Link>
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 text-sm">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(product.rating) ? '' : 'text-gray-300'}>★</span>
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm ml-2">({product.reviews})</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-lg font-bold text-gray-900">
                          {formatNaira(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            {formatNaira(product.originalPrice)}
                          </span>
                        )}
                        <span className="text-sm text-gray-600">/ {product.unit}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        product.inStock 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.inStock ? 'Fresh & Available' : 'Out of Stock'}
                      </span>
                      <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                        {product.farming_method}
                      </span>
                    </div>
                    
                    <button className={`w-full py-2 rounded-lg font-medium transition-colors ${
                      product.inStock
                        ? 'bg-orange-600 text-white hover:bg-orange-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}>
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Load More Fruits
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}