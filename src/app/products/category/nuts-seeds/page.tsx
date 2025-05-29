'use client';
// src/app/products/category/nuts-seeds/page.tsx
import Link from 'next/link';
import { useState } from 'react';

export default function NutsSeedsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [sortBy, setSortBy] = useState('featured');
  
  // Get subcategory from URL params - handle it safely
  const subcategoryParam = searchParams?.subcategory;
  const activeSubcategory = typeof subcategoryParam === 'string' ? subcategoryParam : 'All Nuts & Seeds';

  // Sample nuts and seeds products
  const nutsSeeds = [
    {
      id: 71,
      name: 'Roasted Groundnuts',
      price: 1800,
      unit: 'kg',
      farmer: 'Nutty Harvest Farm',
      farming_method: 'Traditional Roasting',
      image: '🥜',
      rating: 4.8,
      reviews: 267,
      inStock: true,
      fastDelivery: true,
      freshness: 'Roasted This Week',
      organic: false,
      protein: 'High Protein',
      bulkAvailable: true
    },
    {
      id: 72,
      name: 'Raw Cashew Nuts',
      price: 4500,
      unit: 'kg',
      farmer: 'Premium Nut Co.',
      farming_method: 'Sun Dried',
      image: '🌰',
      rating: 4.9,
      reviews: 189,
      discount: 12,
      originalPrice: 5114,
      inStock: true,
      fastDelivery: true,
      freshness: 'Fresh Harvest',
      organic: true,
      protein: 'High Protein',
      bulkAvailable: true
    },
    {
      id: 73,
      name: 'Sesame Seeds (White)',
      price: 2200,
      unit: '500g',
      farmer: 'Seed Masters',
      farming_method: 'Naturally Grown',
      image: '⚪',
      rating: 4.7,
      reviews: 134,
      inStock: true,
      fastDelivery: false,
      freshness: 'Premium Grade',
      organic: false,
      protein: 'High Protein',
      bulkAvailable: true
    },
    {
      id: 74,
      name: 'Tiger Nuts',
      price: 3200,
      unit: 'kg',
      farmer: 'African Superfood Farm',
      farming_method: 'Traditional Methods',
      image: '🟤',
      rating: 4.6,
      reviews: 98,
      inStock: true,
      fastDelivery: true,
      freshness: 'Sun Dried',
      organic: true,
      protein: 'Superfood',
      bulkAvailable: false
    },
    {
      id: 75,
      name: 'Sunflower Seeds',
      price: 1600,
      unit: '500g',
      farmer: 'Sunny Seeds Co.',
      farming_method: 'Roasted',
      image: '🌻',
      rating: 4.5,
      reviews: 76,
      discount: 15,
      originalPrice: 1882,
      inStock: true,
      fastDelivery: true,
      freshness: 'Fresh Roasted',
      organic: false,
      protein: 'Healthy Fats',
      bulkAvailable: true
    },
    {
      id: 76,
      name: 'Pumpkin Seeds',
      price: 2800,
      unit: '500g',
      farmer: 'Green Gourd Farm',
      farming_method: 'Organic Dried',
      image: '🎃',
      rating: 4.4,
      reviews: 67,
      inStock: false,
      fastDelivery: false,
      freshness: 'Seasonal Item',
      organic: true,
      protein: 'High Protein',
      bulkAvailable: false
    },
    {
      id: 77,
      name: 'Mixed Nuts Premium',
      price: 5200,
      unit: 'kg',
      farmer: 'Gourmet Nuts Ltd.',
      farming_method: 'Premium Selection',
      image: '🥜',
      rating: 4.8,
      reviews: 145,
      inStock: true,
      fastDelivery: true,
      freshness: 'Fresh Mix',
      organic: false,
      protein: 'High Protein',
      bulkAvailable: true
    },
    {
      id: 78,
      name: 'Coconut (Dried Flakes)',
      price: 1400,
      unit: '500g',
      farmer: 'Coastal Coconuts',
      farming_method: 'Sun Dried',
      image: '🥥',
      rating: 4.7,
      reviews: 89,
      discount: 10,
      originalPrice: 1556,
      inStock: true,
      fastDelivery: false,
      freshness: 'Premium Quality',
      organic: true,
      protein: 'Healthy Fats',
      bulkAvailable: true
    }
  ];

  // Filter products based on active subcategory
  const filteredProducts = nutsSeeds.filter(product => {
    if (activeSubcategory === 'All Nuts & Seeds') return true;
    
    // Map subcategories to products
    const subcategoryMap: { [key: string]: string[] } = {
      'Groundnuts': ['Roasted Groundnuts'],
      'Cashew Nuts': ['Raw Cashew Nuts'],
      'Coconuts': ['Coconut', 'Tiger Nuts'],
      'Sesame Seeds': ['Sesame Seeds'],
      'Pumpkin Seeds': ['Pumpkin Seeds'],
      'Mixed Nuts': ['Mixed Nuts Premium', 'Sunflower Seeds']
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
    'All Nuts & Seeds',
    'Tree Nuts',
    'Seeds & Kernels',
    'Roasted Varieties',
    'Raw/Natural',
    'Mixed Selections',
    'Superfood Seeds'
  ];

  const nutritionTypes = [
    'All Nutrition',
    'High Protein',
    'Healthy Fats',
    'Superfood',
    'Antioxidant Rich',
    'Fiber Rich'
  ];

  const processingMethods = [
    'All Processing',
    'Raw/Natural',
    'Roasted',
    'Salted',
    'Sun Dried',
    'Organic Processed'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-amber-700 to-orange-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center mb-4">
            <Link href="/products" className="text-amber-200 hover:text-white">
              Products
            </Link>
            <span className="mx-2">›</span>
            <span>Nuts & Seeds</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Nuts & Seeds</h1>
          <p className="text-amber-100 text-lg max-w-2xl">
            Power-packed nutrition in every bite! Our premium nuts and seeds are rich in protein, 
            healthy fats, and essential minerals. Perfect for snacking, cooking, or boosting your daily nutrition.
          </p>
          <div className="flex items-center gap-6 mt-6 text-amber-100">
            <div className="flex items-center">
              <span className="text-2xl mr-2">💪</span>
              <span>High Protein</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">❤️</span>
              <span>Heart Healthy</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🌟</span> 
              <span>Superfood Quality</span>
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
                          ? 'bg-amber-100 text-amber-800' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        if (category === 'All Nuts & Seeds') {
                          window.history.pushState({}, '', '/products/category/nuts-seeds');
                        } else {
                          window.history.pushState({}, '', `/products/category/nuts-seeds?subcategory=${encodeURIComponent(category)}`);
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

            {/* Nutrition Types */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Nutritional Benefits</h3>
              <div className="space-y-2">
                {nutritionTypes.map((type, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-amber-600 rounded"
                      defaultChecked={index === 0}
                    />
                    <span className="ml-2 text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Processing Methods */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Processing</h3>
              <div className="space-y-2">
                {processingMethods.map((method, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="radio"
                      name="processing"
                      className="form-radio h-4 w-4 text-amber-600"
                      defaultChecked={index === 0}
                    />
                    <span className="ml-2 text-gray-700">{method}</span>
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
                  <span>₦6,000+</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="6000"
                  step="200"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
              </div>
            </div>

            {/* Special Features */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Special Features</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-amber-600 rounded" />
                  <span className="ml-2 text-gray-700">Bulk Available</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-amber-600 rounded" />
                  <span className="ml-2 text-gray-700">Organic Certified</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-amber-600 rounded" />
                  <span className="ml-2 text-gray-700">Fresh Roasted</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-amber-600 rounded" />
                  <span className="ml-2 text-gray-700">Premium Grade</span>
                </label>
              </div>
            </div>

            {/* Package Sizes */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Package Size</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-amber-600 rounded" />
                  <span className="ml-2 text-gray-700">250g</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-amber-600 rounded" />
                  <span className="ml-2 text-gray-700">500g</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-amber-600 rounded" />
                  <span className="ml-2 text-gray-700">1kg</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-amber-600 rounded" />
                  <span className="ml-2 text-gray-700">2kg+</span>
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort and Filter Bar */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="text-gray-600">
                Showing <span className="font-medium text-gray-900">{filteredProducts.length}</span> nuts & seeds
                {activeSubcategory !== 'All Nuts & Seeds' && (
                  <span className="ml-2 text-amber-600">in "{activeSubcategory}"</span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <label className="text-gray-700">Sort by:</label>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-1 focus:ring-2 focus:ring-amber-500"
                >
                  <option value="featured">Featured</option>
                  <option value="protein">High Protein First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="bulk">Bulk Available</option>
                </select>
              </div>
            </div>

            {/* Nutrition Info Banner */}
            <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2">💪 Superfood Nutrition!</h2>
                  <p className="text-green-100">Packed with protein, healthy fats, vitamins and minerals for optimal health</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">25g+</div>
                  <div className="text-sm">Protein per 100g</div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/products/${product.id}`}>
                    <div className="relative h-48 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
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
                      {product.bulkAvailable && (
                        <div className="absolute bottom-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                          Bulk Available
                        </div>
                      )}
                    </div>
                  </Link>
                  
                  <div className="p-4">
                    <div className="text-sm text-gray-600 mb-1">{product.farmer}</div>
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                      <Link href={`/products/${product.id}`} className="hover:text-amber-600">
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

                    {/* Nutrition Indicator */}
                    <div className="bg-amber-50 border border-amber-200 rounded p-2 mb-3">
                      <div className="flex items-center">
                        <span className="text-amber-600 text-xs mr-1">💪</span>
                        <span className="text-amber-800 text-xs font-medium">{product.protein}</span>
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
                      <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                        {product.farming_method}
                      </span>
                    </div>
                    
                    <button className={`w-full py-2 rounded-lg font-medium transition-colors ${
                      product.inStock
                        ? 'bg-amber-600 text-white hover:bg-amber-700'
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
              <button className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors">
                Load More Products
              </button>
            </div>

            {/* Nutritional Benefits Guide */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Nutritional Benefits & Usage</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                    <span className="mr-2">🥜</span> Tree Nuts
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Rich in healthy monounsaturated fats</li>
                    <li>• High in protein and fiber</li>
                    <li>• Contains vitamin E and magnesium</li>
                    <li>• Great for heart health</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                    <span className="mr-2">🌻</span> Seeds
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Packed with essential fatty acids</li>
                    <li>• Good source of plant protein</li>
                    <li>• Rich in minerals like zinc and iron</li>
                    <li>• Perfect for snacking and cooking</li>
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