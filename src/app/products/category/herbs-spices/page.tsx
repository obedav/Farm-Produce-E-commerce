// src/app/products/category/herbs-spices/page.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function HerbsSpicesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [sortBy, setSortBy] = useState('featured');
  
  // Get subcategory from URL params - handle it safely
  const subcategoryParam = searchParams?.subcategory;
  const activeSubcategory = typeof subcategoryParam === 'string' ? subcategoryParam : 'All Herbs & Spices';

  // Sample herbs and spices products
  const herbsSpices = [
    {
      id: 61,
      name: 'Fresh Basil',
      price: 800,
      unit: 'bunch',
      farmer: 'Herb Garden Co.',
      farming_method: 'Organic',
      image: '🌿',
      rating: 4.9,
      reviews: 234,
      inStock: true,
      fastDelivery: true,
      freshness: 'Harvested Today',
      organic: true,
      medicinal: false
    },
    {
      id: 62,
      name: 'Dried Turmeric Powder',
      price: 1500,
      unit: '250g',
      farmer: 'Golden Spice Mills',
      farming_method: 'Traditional Drying',
      image: '🧡',
      rating: 4.8,
      reviews: 189,
      discount: 10,
      originalPrice: 1667,
      inStock: true,
      fastDelivery: true,
      freshness: 'Ground This Week',
      organic: true,
      medicinal: true
    },
    {
      id: 63,
      name: 'Fresh Ginger Root',
      price: 1200,
      unit: 'kg',
      farmer: 'Tropical Root Farm',
      farming_method: 'Naturally Grown',
      image: '🧄',
      rating: 4.7,
      reviews: 156,
      inStock: true,
      fastDelivery: false,
      freshness: 'Farm Fresh',
      organic: false,
      medicinal: true
    },
    {
      id: 64,
      name: 'Scent Leaves (Nchuanwu)',
      price: 600,
      unit: 'bunch',
      farmer: 'African Herbs Farm',
      farming_method: 'Traditional Growing',
      image: '🍀',
      rating: 4.6,
      reviews: 67,
      inStock: true,
      fastDelivery: true,
      freshness: 'Picked Yesterday',
      organic: true,
      medicinal: true
    },
    {
      id: 65,
      name: 'Curry Powder Blend',
      price: 2200,
      unit: '500g',
      farmer: 'Spice Masters',
      farming_method: 'Premium Blend',
      image: '🟡',
      rating: 4.8,
      reviews: 198,
      inStock: true,
      fastDelivery: true,
      freshness: 'Blended Fresh',
      organic: false,
      medicinal: false
    },
    {
      id: 66,
      name: 'Black Pepper (Whole)',
      price: 3500,
      unit: '500g',
      farmer: 'Pepper Valley',
      farming_method: 'Sun Dried',
      image: '⚫',
      rating: 4.9,
      reviews: 145,
      discount: 15,
      originalPrice: 4118,
      inStock: false,
      fastDelivery: false,
      freshness: 'Premium Grade',
      organic: true,
      medicinal: false
    },
    {
      id: 67,
      name: 'Dried Mint Leaves',
      price: 900,
      unit: '100g',
      farmer: 'Mountain Herbs',
      farming_method: 'Air Dried',
      image: '🌱',
      rating: 4.5,
      reviews: 89,
      inStock: true,
      fastDelivery: true,
      freshness: 'Dried Last Month',
      organic: true,
      medicinal: true
    },
    {
      id: 68,
      name: 'Cinnamon Sticks',
      price: 1800,
      unit: '200g',
      farmer: 'Spice Island',
      farming_method: 'Traditional Harvest',
      image: '🟤',
      rating: 4.7,
      reviews: 112,
      inStock: true,
      fastDelivery: false,
      freshness: 'Premium Quality',
      organic: false,
      medicinal: true
    }
  ];

  // Filter products based on active subcategory
  const filteredProducts = herbsSpices.filter(product => {
    if (activeSubcategory === 'All Herbs & Spices') return true;
    
    // Map subcategories to products
    const subcategoryMap: { [key: string]: string[] } = {
      'Fresh Herbs': ['Fresh Basil', 'Scent Leaves', 'Fresh Ginger'],
      'Dried Spices': ['Turmeric Powder', 'Black Pepper', 'Dried Mint', 'Cinnamon'],
      'Spice Blends': ['Curry Powder Blend'],
      'Medicinal Herbs': ['Turmeric', 'Ginger', 'Scent Leaves', 'Mint'],
      'Seasoning Mixes': ['Curry', 'Blend', 'Mix'],
      'Organic Spices': ['Organic']
    };
    
    return subcategoryMap[activeSubcategory]?.some(name => 
      product.name.toLowerCase().includes(name.toLowerCase()) ||
      product.farming_method.toLowerCase().includes(name.toLowerCase())
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
    'All Herbs & Spices',
    'Fresh Herbs',
    'Dried Spices',
    'Spice Blends',
    'Medicinal Herbs',
    'African Traditional',
    'Seasoning Mixes'
  ];

  const herbTypes = [
    'All Types',
    'Culinary Herbs',
    'Medicinal Plants',
    'Aromatic Herbs',
    'Tea Herbs',
    'Cooking Spices'
  ];

  const processingMethods = [
    'All Processing',
    'Fresh/Raw',
    'Sun Dried',
    'Air Dried',
    'Ground/Powder',
    'Whole/Seeds'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center mb-4">
            <Link href="/products" className="text-emerald-200 hover:text-white">
              Products
            </Link>
            <span className="mx-2">›</span>
            <span>Herbs & Spices</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Herbs & Spices</h1>
          <p className="text-emerald-100 text-lg max-w-2xl">
            Discover the flavors of Africa and beyond with our premium herbs and spices. 
            From traditional medicinal herbs to exotic culinary spices, all naturally grown and carefully processed.
          </p>
          <div className="flex items-center gap-6 mt-6 text-emerald-100">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🌿</span>
              <span>Farm Fresh</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🏥</span>
              <span>Medicinal Grade</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🌍</span> 
              <span>Traditional & Exotic</span>
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
                          ? 'bg-emerald-100 text-emerald-800' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        if (category === 'All Herbs & Spices') {
                          window.history.pushState({}, '', '/products/category/herbs-spices');
                        } else {
                          window.history.pushState({}, '', `/products/category/herbs-spices?subcategory=${encodeURIComponent(category)}`);
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

            {/* Herb Types */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Herb Types</h3>
              <div className="space-y-2">
                {herbTypes.map((type, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-emerald-600 rounded"
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
                      className="form-radio h-4 w-4 text-emerald-600"
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
                  <span>₦500</span>
                  <span>₦4,000+</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="4000"
                  step="100"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>
            </div>

            {/* Special Properties */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Special Properties</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-emerald-600 rounded" />
                  <span className="ml-2 text-gray-700">Organic Certified</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-emerald-600 rounded" />
                  <span className="ml-2 text-gray-700">Medicinal Properties</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-emerald-600 rounded" />
                  <span className="ml-2 text-gray-700">Anti-inflammatory</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-emerald-600 rounded" />
                  <span className="ml-2 text-gray-700">Antioxidant Rich</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-emerald-600 rounded" />
                  <span className="ml-2 text-gray-700">Immune Boosting</span>
                </label>
              </div>
            </div>

            {/* Origin */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Origin</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-emerald-600 rounded" />
                  <span className="ml-2 text-gray-700">Local Nigerian</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-emerald-600 rounded" />
                  <span className="ml-2 text-gray-700">West African</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-emerald-600 rounded" />
                  <span className="ml-2 text-gray-700">Mediterranean</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-emerald-600 rounded" />
                  <span className="ml-2 text-gray-700">Asian Varieties</span>
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort and Filter Bar */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="text-gray-600">
                Showing <span className="font-medium text-gray-900">{filteredProducts.length}</span> herbs & spices
                {activeSubcategory !== 'All Herbs & Spices' && (
                  <span className="ml-2 text-emerald-600">in "{activeSubcategory}"</span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <label className="text-gray-700">Sort by:</label>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-1 focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="featured">Featured</option>
                  <option value="freshness">Freshest First</option>
                  <option value="medicinal">Medicinal First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Traditional Medicine Banner */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2">🌿 Traditional African Herbs Available!</h2>
                  <p className="text-green-100">Discover the healing power of traditional Nigerian herbs used for centuries</p>
                </div>
                <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50">
                  View Traditional
                </button>
              </div>  
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/products/${product.id}`}>
                    <div className="relative h-48 bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center">
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
                      {product.medicinal && (
                        <div className="absolute bottom-2 left-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                          Medicinal
                        </div>
                      )}
                    </div>
                  </Link>
                  
                  <div className="p-4">
                    <div className="text-sm text-gray-600 mb-1">{product.farmer}</div>
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                      <Link href={`/products/${product.id}`} className="hover:text-emerald-600">
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
                    <div className="bg-emerald-50 border border-emerald-200 rounded p-2 mb-3">
                      <div className="flex items-center">
                        <span className="text-emerald-600 text-xs mr-1">🌿</span>
                        <span className="text-emerald-800 text-xs font-medium">{product.freshness}</span>
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
                      <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                        {product.farming_method}
                      </span>
                    </div>
                    
                    <button className={`w-full py-2 rounded-lg font-medium transition-colors ${
                      product.inStock
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700'
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
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                Load More Products
              </button>
            </div>

            {/* Usage & Benefits Guide */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Usage & Health Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                    <span className="mr-2">🌿</span> Culinary Herbs
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Enhance flavor of traditional dishes</li>
                    <li>• Add fresh aroma to soups and stews</li>
                    <li>• Perfect for marinades and seasonings</li>
                    <li>• Store fresh herbs in refrigerator</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                    <span className="mr-2">🏥</span> Medicinal Uses
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Consult healthcare providers before use</li>
                    <li>• Traditional remedies for common ailments</li>
                    <li>• Natural immune system support</li>
                    <li>• Follow recommended dosages</li>
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