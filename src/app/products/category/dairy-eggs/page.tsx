// src/app/products/category/dairy-eggs/page.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function DairyEggsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [sortBy, setSortBy] = useState('featured');
  
  // Get subcategory from URL params - handle it safely
  const subcategoryParam = searchParams?.subcategory;
  const activeSubcategory = typeof subcategoryParam === 'string' ? subcategoryParam : 'All Dairy & Eggs';

  // Sample dairy and eggs products
  const dairyProducts = [
    {
      id: 3,
      name: 'Fresh Free-Range Eggs',
      price: 2800,
      unit: 'dozen',
      farmer: 'Happy Hen Farms',
      farming_method: 'Free-Range Organic',
      image: '🥚',
      rating: 4.9,
      reviews: 189,
      inStock: true,
      fastDelivery: true,
      freshness: 'Farm Fresh - 2 days',
      organic: true
    },
    {
      id: 41,
      name: 'Fresh Cow Milk',
      price: 1500,
      unit: 'liter',
      farmer: 'Green Pastures Dairy',
      farming_method: 'Grass-Fed Cows',
      image: '🥛',
      rating: 4.8,
      reviews: 234,
      inStock: true,
      fastDelivery: true,
      freshness: 'Same Day Milking',
      organic: true
    },
    {
      id: 42,
      name: 'Artisan Cheese (Wara)',
      price: 3200,
      unit: '500g',
      farmer: 'Traditional Dairy Co.',
      farming_method: 'Traditional Methods',
      image: '🧀',
      rating: 4.7,
      reviews: 67,
      discount: 10,
      originalPrice: 3556,
      inStock: true,
      fastDelivery: false,
      freshness: 'Made Fresh Daily',
      organic: false
    },
    {
      id: 43,
      name: 'Greek Style Yogurt',
      price: 2200,
      unit: '500ml',
      farmer: 'Healthy Cultures',
      farming_method: 'Probiotic Cultures',
      image: '🥣',
      rating: 4.6,
      reviews: 112,
      inStock: true,
      fastDelivery: true,
      freshness: 'Made This Week',
      organic: true
    },
    {
      id: 44,
      name: 'Fresh Goat Milk',
      price: 2500,
      unit: 'liter',
      farmer: 'Mountain View Goats',
      farming_method: 'Free-Range Goats',
      image: '🥛',
      rating: 4.5,
      reviews: 45,
      inStock: false,
      fastDelivery: false,
      freshness: 'Seasonal Available',
      organic: true
    },
    {
      id: 45,
      name: 'Farm Butter',
      price: 1800,
      unit: '250g',
      farmer: 'Creamy Dreams Farm',
      farming_method: 'Churned Fresh',
      image: '🧈',
      rating: 4.8,
      reviews: 89,
      discount: 15,
      originalPrice: 2118,
      inStock: true,
      fastDelivery: true,
      freshness: 'Churned Yesterday',
      organic: false
    },
    {
      id: 46,
      name: 'Duck Eggs',
      price: 4500,
      unit: 'dozen',
      farmer: 'Waterfowl Haven',
      farming_method: 'Free-Range Ducks',
      image: '🥚',
      rating: 4.4,
      reviews: 32,
      inStock: true,
      fastDelivery: false,
      freshness: 'Collected This Morning',
      organic: true
    },
    {
      id: 47,
      name: 'Heavy Cream',
      price: 2800,
      unit: '500ml',
      farmer: 'Rich Dairy Farms',
      farming_method: 'High-Fat Content',
      image: '🥛',
      rating: 4.7,
      reviews: 78,
      inStock: true,
      fastDelivery: true,
      freshness: 'Separated Today',
      organic: false
    }
  ];

  // Filter products based on active subcategory
  const filteredProducts = dairyProducts.filter(product => {
    if (activeSubcategory === 'All Dairy & Eggs') return true;
    
    // Map subcategories to products
    const subcategoryMap: { [key: string]: string[] } = {
      'Fresh Milk': ['Fresh Cow Milk', 'Fresh Goat Milk'],
      'Free-Range Eggs': ['Fresh Free-Range Eggs', 'Duck Eggs'],
      'Local Cheese': ['Artisan Cheese', 'Wara'],
      'Yogurt & Fermented': ['Greek Style Yogurt'],
      'Butter & Cream': ['Farm Butter', 'Heavy Cream'],
      'Dairy Bundles': ['Mixed Dairy', 'Bundle']
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
    'All Dairy & Eggs',
    'Fresh Milk',
    'Eggs & Poultry',
    'Cheese & Butter',
    'Yogurt & Cultured',
    'Cream & Specialty',
    'Organic Selection'
  ];

  const animalSources = [
    'All Sources',
    'Cow Products',
    'Goat Products', 
    'Chicken Eggs',
    'Duck Eggs',
    'Mixed Farm'
  ];

  const freshnessPeriod = [
    'All Freshness',
    'Same Day',
    '1-2 Days',
    '3-5 Days',
    'Weekly Fresh'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center mb-4">
            <Link href="/products" className="text-blue-200 hover:text-white">
              Products
            </Link>
            <span className="mx-2">›</span>
            <span>Dairy & Eggs</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Dairy & Eggs</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Fresh, high-quality dairy products and farm-fresh eggs from local farms. 
            Rich in protein, calcium, and essential nutrients for your family's health and wellness.
          </p>
          <div className="flex items-center gap-6 mt-6 text-blue-100">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🐄</span>
              <span>Farm Fresh</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">❄️</span>
              <span>Cold Chain</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🏆</span> 
              <span>Premium Quality</span>
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
                          ? 'bg-blue-100 text-blue-800' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        if (category === 'All Dairy & Eggs') {
                          window.history.pushState({}, '', '/products/category/dairy-eggs');
                        } else {
                          window.history.pushState({}, '', `/products/category/dairy-eggs?subcategory=${encodeURIComponent(category)}`);
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

            {/* Animal Source */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Animal Source</h3>
              <div className="space-y-2">
                {animalSources.map((source, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="radio"
                      name="source"
                      className="form-radio h-4 w-4 text-blue-600"
                      defaultChecked={index === 0}
                    />
                    <span className="ml-2 text-gray-700">{source}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Freshness Period */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Freshness</h3>
              <div className="space-y-2">
                {freshnessPeriod.map((period, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600 rounded"
                    />
                    <span className="ml-2 text-gray-700">{period}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Price Range</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>₦1,000</span>
                  <span>₦5,000+</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="5000"
                  step="100"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>

            {/* Special Features */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Special Features</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                  <span className="ml-2 text-gray-700">Organic Certified</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                  <span className="ml-2 text-gray-700">Free-Range</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                  <span className="ml-2 text-gray-700">Grass-Fed</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                  <span className="ml-2 text-gray-700">Antibiotic-Free</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                  <span className="ml-2 text-gray-700">Hormone-Free</span>
                </label>
              </div>
            </div>

            {/* Storage Requirements */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Storage Type</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                  <span className="ml-2 text-gray-700">Refrigerated</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                  <span className="ml-2 text-gray-700">Frozen Available</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                  <span className="ml-2 text-gray-700">Room Temperature</span>
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort and Filter Bar */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="text-gray-600">
                Showing <span className="font-medium text-gray-900">{filteredProducts.length}</span> dairy products
                {activeSubcategory !== 'All Dairy & Eggs' && (
                  <span className="ml-2 text-blue-600">in "{activeSubcategory}"</span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <label className="text-gray-700">Sort by:</label>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-1 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="freshness">Freshest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Freshness Guarantee Banner */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2">❄️ Freshness Guaranteed!</h2>
                  <p className="text-green-100">All dairy products are kept in temperature-controlled environments and delivered fresh to your door</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">48hr</div>
                  <div className="text-sm">Delivery Promise</div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/products/${product.id}`}>
                    <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                      <span className="text-6xl">{product.image}</span>
                      {product.discount && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          -{product.discount}%
                        </div>
                      )}
                      {product.organic && (
                        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                          Organic
                        </div>
                      )}
                      {product.fastDelivery && (
                        <div className="absolute bottom-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                          Cold Chain
                        </div>
                      )}
                    </div>
                  </Link>
                  
                  <div className="p-4">
                    <div className="text-sm text-gray-600 mb-1">{product.farmer}</div>
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                      <Link href={`/products/${product.id}`} className="hover:text-blue-600">
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

                    {/* Freshness Indicator */}
                    <div className="bg-green-50 border border-green-200 rounded p-2 mb-3">
                      <div className="flex items-center">
                        <span className="text-green-600 text-xs mr-1">🕒</span>
                        <span className="text-green-800 text-xs font-medium">{product.freshness}</span>
                      </div>
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
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {product.farming_method}
                      </span>
                    </div>
                    
                    <button className={`w-full py-2 rounded-lg font-medium transition-colors ${
                      product.inStock
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
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
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Load More Products
              </button>
            </div>

            {/* Storage & Handling Tips */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Storage & Handling Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                    <span className="mr-2">🥛</span> Dairy Products
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Keep refrigerated at 4°C or below</li>
                    <li>• Use within expiry date for best quality</li>
                    <li>• Store in original packaging</li>
                    <li>• Avoid temperature fluctuations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                    <span className="mr-2">🥚</span> Eggs
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Store in refrigerator, not door</li>
                    <li>• Keep in original carton</li>
                    <li>• Use within 3-4 weeks of purchase</li>
                    <li>• Check for cracks before use</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}