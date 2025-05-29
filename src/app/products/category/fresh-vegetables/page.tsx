// src/app/products/category/fresh-vegetables/page.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function FreshVegetablesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  
  // Get subcategory from URL params - handle it safely
  const subcategoryParam = searchParams?.subcategory;
  const activeSubcategory = typeof subcategoryParam === 'string' ? subcategoryParam : 'All Vegetables';

  // Sample fresh vegetables products
  const vegetables = [
    {
      id: 1,
      name: 'Premium Fresh Tomatoes',
      price: 1800,
      unit: 'kg',
      farmer: 'Green Valley Farm',
      farming_method: 'Certified Organic',
      image: '🍅',
      rating: 4.8,
      reviews: 124,
      discount: 10,
      originalPrice: 2000,
      inStock: true,
      fastDelivery: true
    },
    {
      id: 4,
      name: 'African Spinach (Ugu)',
      price: 1200,
      unit: 'bunch',
      farmer: 'Green Leaf Gardens',
      farming_method: 'Certified Organic',
      image: '🥬',
      rating: 4.9,
      reviews: 89,
      inStock: true,
      fastDelivery: true
    },
    {
      id: 11,
      name: 'Fresh Bell Peppers',
      price: 2200,
      unit: 'kg',
      farmer: 'Sunshine Gardens',
      farming_method: 'Naturally Grown',
      image: '🫑',
      rating: 4.7,
      reviews: 67,
      inStock: true,
      fastDelivery: false
    },
    {
      id: 12,
      name: 'Organic Carrots',
      price: 1500,
      unit: 'kg',
      farmer: 'Valley Produce',
      farming_method: 'Certified Organic',
      image: '🥕',
      rating: 4.6,
      reviews: 93,
      discount: 15,
      originalPrice: 1765,
      inStock: true,
      fastDelivery: true
    },
    {
      id: 13,
      name: 'Fresh Okra',
      price: 800,
      unit: 'bunch',
      farmer: 'River Creek Gardens',
      farming_method: 'Naturally Grown',
      image: '🌶️',
      rating: 4.5,
      reviews: 45,
      inStock: true,
      fastDelivery: true
    },
    {
      id: 14,
      name: 'Garden Eggs',
      price: 1000,
      unit: 'kg',
      farmer: 'Tropical Farms',
      farming_method: 'Organic',
      image: '🍆',
      rating: 4.4,
      reviews: 38,
      inStock: false,
      fastDelivery: false
    },
    {
      id: 15,
      name: 'Fresh Cucumber',
      price: 900,
      unit: 'kg',
      farmer: 'Cool Gardens',
      farming_method: 'Hydroponic',
      image: '🥒',
      rating: 4.7,
      reviews: 72,
      inStock: true,
      fastDelivery: true
    },
    {
      id: 16,
      name: 'Sweet Potatoes',
      price: 1100,
      unit: 'kg',
      farmer: 'Root Harvest Farm',
      farming_method: 'Organic',
      image: '🍠',
      rating: 4.8,
      reviews: 56,
      discount: 20,
      originalPrice: 1375,
      inStock: true,
      fastDelivery: false
    }
  ];

  // Filter products based on active subcategory
  const filteredProducts = vegetables.filter(product => {
    if (activeSubcategory === 'All Vegetables') return true;
    
    // Map subcategories to products
    const subcategoryMap: { [key: string]: string[] } = {
      'Leafy Greens': ['African Spinach (Ugu)', 'Fresh Spinach'],
      'Tomatoes & Peppers': ['Premium Fresh Tomatoes', 'Fresh Bell Peppers'],
      'Root Vegetables': ['Sweet Potatoes', 'Organic Carrots'],
      'Onions & Garlic': ['Fresh Onions', 'Garlic'],
      'Pod Vegetables': ['Fresh Okra', 'Garden Eggs'],
      'Bulb Vegetables': ['Fresh Cucumber']
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
    'All Vegetables',
    'Leafy Greens',
    'Tomatoes & Peppers',
    'Root Vegetables',
    'Onions & Garlic',
    'Pod Vegetables',
    'Bulb Vegetables'
  ];

  const farmingMethods = [
    'All Methods',
    'Certified Organic',
    'Naturally Grown',
    'Hydroponic',
    'Conventional'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center mb-4">
            <Link href="/products" className="text-green-200 hover:text-white">
              Products
            </Link>
            <span className="mx-2">›</span>
            <span>Fresh Vegetables</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Fresh Vegetables</h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Discover our premium selection of fresh, locally-grown vegetables. From leafy greens to root vegetables, 
            all sourced directly from trusted farmers using sustainable practices.
          </p>
          <div className="flex items-center gap-6 mt-6 text-green-100">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🚛</span>
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🌱</span>
              <span>Farm Fresh</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">✅</span> 
              <span>Quality Guaranteed</span>
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
                          ? 'bg-green-100 text-green-800' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        if (category === 'All Vegetables') {
                          window.history.pushState({}, '', '/products/category/fresh-vegetables');
                        } else {
                          window.history.pushState({}, '', `/products/category/fresh-vegetables?subcategory=${encodeURIComponent(category)}`);
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

            {/* Price Range */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Price Range</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>₦0</span>
                  <span>₦5,000+</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-1/2 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-1/2 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

            {/* Farming Methods */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Farming Methods</h3>
              <div className="space-y-2">
                {farmingMethods.map((method, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-green-600 rounded"
                      defaultChecked={index === 0}
                    />
                    <span className="ml-2 text-gray-700">{method}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Quick Filters */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Quick Filters</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600 rounded" />
                  <span className="ml-2 text-gray-700">In Stock Only</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600 rounded" />
                  <span className="ml-2 text-gray-700">Fast Delivery</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600 rounded" />
                  <span className="ml-2 text-gray-700">On Sale</span>
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort and Filter Bar */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="text-gray-600">
                Showing <span className="font-medium text-gray-900">{filteredProducts.length}</span> products
                {activeSubcategory !== 'All Vegetables' && (
                  <span className="ml-2 text-green-600">in "{activeSubcategory}"</span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <label className="text-gray-700">Sort by:</label>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-1 focus:ring-2 focus:ring-green-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/products/${product.id}`}>
                    <div className="relative h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                      <span className="text-6xl">{product.image}</span>
                      {product.discount && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          -{product.discount}%
                        </div>
                      )}
                      {product.fastDelivery && (
                        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                          Fast Delivery
                        </div>
                      )}
                    </div>
                  </Link>
                  
                  <div className="p-4">
                    <div className="text-sm text-gray-600 mb-1">{product.farmer}</div>
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                      <Link href={`/products/${product.id}`} className="hover:text-green-600">
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
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        product.inStock 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {product.farming_method}
                      </span>
                    </div>
                    
                    <button className={`w-full mt-3 py-2 rounded-lg font-medium transition-colors ${
                      product.inStock
                        ? 'bg-green-600 text-white hover:bg-green-700'
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
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}