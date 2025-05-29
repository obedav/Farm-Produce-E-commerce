// src/app/products/category/grains-cereals/page.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function GrainsCerealsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [sortBy, setSortBy] = useState('featured');
  
  // Get subcategory from URL params - handle it safely
  const subcategoryParam = searchParams?.subcategory;
  const activeSubcategory = typeof subcategoryParam === 'string' ? subcategoryParam : 'All Grains & Cereals';

  // Sample grains and cereals products
  const grains = [
    {
      id: 2,
      name: 'Sweet Yellow Corn',
      price: 800,
      unit: 'cob',
      farmer: 'Sunshine Organics',
      farming_method: 'Naturally Grown',
      image: '🌽',
      rating: 4.8,
      reviews: 167,
      inStock: true,
      fastDelivery: true,
      organic: false,
      bulkAvailable: true
    },
    {
      id: 31,
      name: 'Premium Basmati Rice',
      price: 4500,
      unit: '5kg bag',
      farmer: 'Golden Grain Mills',
      farming_method: 'Premium Quality',
      image: '🍚',
      rating: 4.9,
      reviews: 234,
      discount: 12,
      originalPrice: 5114,
      inStock: true,
      fastDelivery: true,
      organic: true,
      bulkAvailable: true
    },
    {
      id: 32,
      name: 'Organic Brown Rice',
      price: 3800,
      unit: '5kg bag',
      farmer: 'Health Grains Co.',
      farming_method: 'Certified Organic',
      image: '🍙',
      rating: 4.7,
      reviews: 156,
      inStock: true,
      fastDelivery: false,
      organic: true,
      bulkAvailable: true
    },
    {
      id: 33,
      name: 'Local White Rice',
      price: 2800,
      unit: '5kg bag',
      farmer: 'Valley Rice Mills',
      farming_method: 'Traditional',
      image: '🍚',
      rating: 4.5,
      reviews: 89,
      discount: 15,
      originalPrice: 3294,
      inStock: true,
      fastDelivery: true,
      organic: false,
      bulkAvailable: true
    },
    {
      id: 34,
      name: 'Premium Wheat Flour',
      price: 2200,
      unit: '2kg bag',
      farmer: 'Golden Harvest Mills',
      farming_method: 'Stone Ground',
      image: '🌾',
      rating: 4.6,
      reviews: 123,
      inStock: true,
      fastDelivery: true,
      organic: false,
      bulkAvailable: true
    },
    {
      id: 35,
      name: 'Organic Quinoa',
      price: 6500,
      unit: '1kg bag',
      farmer: 'Super Grains Farm',
      farming_method: 'Certified Organic',
      image: '🌾',
      rating: 4.8,
      reviews: 67,
      inStock: false,
      fastDelivery: false,
      organic: true,
      bulkAvailable: false
    },
    {
      id: 36,
      name: 'Pearl Millet',
      price: 1800,
      unit: '2kg bag',
      farmer: 'Traditional Grains',
      farming_method: 'Naturally Grown',
      image: '🌾',
      rating: 4.4,
      reviews: 45,
      inStock: true,
      fastDelivery: false,
      organic: false,
      bulkAvailable: true
    },
    {
      id: 37,
      name: 'Mixed Grain Flour',
      price: 2500,
      unit: '2kg bag',
      farmer: 'Healthy Choice Mills',
      farming_method: 'Multi-Grain Blend',
      image: '🌾',
      rating: 4.7,
      reviews: 78,
      discount: 10,
      originalPrice: 2778,
      inStock: true,
      fastDelivery: true,
      organic: false,
      bulkAvailable: true
    }
  ];

  // Filter products based on active subcategory
  const filteredProducts = grains.filter(product => {
    if (activeSubcategory === 'All Grains & Cereals') return true;
    
    // Map subcategories to products
    const subcategoryMap: { [key: string]: string[] } = {
      'Rice Varieties': ['Basmati Rice', 'Brown Rice', 'White Rice'],
      'Corn & Maize': ['Sweet Yellow Corn'],
      'Wheat & Flour': ['Wheat Flour', 'Mixed Grain Flour'],
      'Millet & Sorghum': ['Pearl Millet'],
      'Beans & Legumes': ['Beans', 'Legumes'],
      'Quinoa & Others': ['Organic Quinoa']
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
    'All Grains & Cereals',
    'Rice Varieties',
    'Wheat & Flour',
    'Corn & Maize',
    'Ancient Grains',
    'Millet & Sorghum',
    'Ready-to-Cook'
  ];

  const processingTypes = [
    'All Types',
    'Whole Grain',
    'Processed',
    'Stone Ground',
    'Refined',
    'Parboiled'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-amber-600 to-yellow-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center mb-4">
            <Link href="/products" className="text-amber-200 hover:text-white">
              Products
            </Link>
            <span className="mx-2">›</span>
            <span>Grains & Cereals</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Grains & Cereals</h1>
          <p className="text-amber-100 text-lg max-w-2xl">
            Discover our premium collection of grains and cereals - the foundation of healthy nutrition. 
            From traditional rice varieties to ancient supergrains, all carefully sourced and processed for maximum quality.
          </p>
          <div className="flex items-center gap-6 mt-6 text-amber-100">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🌾</span>
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">📦</span>
              <span>Bulk Available</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🏪</span> 
              <span>Wholesale Prices</span>
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
                        if (category === 'All Grains & Cereals') {
                          window.history.pushState({}, '', '/products/category/grains-cereals');
                        } else {
                          window.history.pushState({}, '', `/products/category/grains-cereals?subcategory=${encodeURIComponent(category)}`);
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

            {/* Processing Types */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Processing Type</h3>
              <div className="space-y-2">
                {processingTypes.map((type, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="radio"
                      name="processing"
                      className="form-radio h-4 w-4 text-amber-600"
                      defaultChecked={index === 0}
                    />
                    <span className="ml-2 text-gray-700">{type}</span>
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
                  <span>₦10,000+</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="10000"
                  step="500"
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
                  <span className="ml-2 text-gray-700">Organic Certified</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-amber-600 rounded" />
                  <span className="ml-2 text-gray-700">Bulk Available</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-amber-600 rounded" />
                  <span className="ml-2 text-gray-700">Premium Grade</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-amber-600 rounded" />
                  <span className="ml-2 text-gray-700">Stone Ground</span>
                </label>
              </div>
            </div>

            {/* Packaging Options */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Package Size</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-amber-600 rounded" />
                  <span className="ml-2 text-gray-700">1kg</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-amber-600 rounded" />
                  <span className="ml-2 text-gray-700">2kg</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-amber-600 rounded" />
                  <span className="ml-2 text-gray-700">5kg</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-amber-600 rounded" />
                  <span className="ml-2 text-gray-700">10kg+</span>
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort and Filter Bar */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="text-gray-600">
                Showing <span className="font-medium text-gray-900">{filteredProducts.length}</span> grain products
                {activeSubcategory !== 'All Grains & Cereals' && (
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
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="bulk">Bulk Available</option>
                </select>
              </div>
            </div>

            {/* Bulk Purchase Banner */}
            <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2">📦 Bulk Purchase Discounts Available!</h2>
                  <p className="text-green-100">Save more when you buy in larger quantities - perfect for families and businesses</p>
                </div>
                <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50">
                  View Bulk Deals
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/products/${product.id}`}>
                    <div className="relative h-48 bg-gradient-to-br from-amber-50 to-yellow-100 flex items-center justify-center">
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
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
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
          </div>
        </div>
      </div>
    </div>
  );
}