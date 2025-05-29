// src/app/products/category/beverages-oils/page.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function BeveragesOilsPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [activeSubcategory, setActiveSubcategory] = useState('All Beverages & Oils');
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  // Sample beverages and oils products
  const beveragesOils = [
    {
      id: 81,
      name: 'Extra Virgin Palm Oil',
      price: 3500,
      unit: 'liter',
      farmer: 'Red Gold Palm Estate',
      farming_method: 'Traditional Extraction',
      image: '🔴',
      rating: 4.9,
      reviews: 234,
      inStock: true,
      fastDelivery: true,
      freshness: 'Fresh Extraction',
      organic: true,
      category: 'Cooking Oil',
      purity: '100% Pure'
    },
    {
      id: 82,
      name: 'Virgin Coconut Oil',
      price: 2800,
      unit: '500ml',
      farmer: 'Tropical Oil Mills',
      farming_method: 'Cold Pressed',
      image: '🥥',
      rating: 4.8,
      reviews: 187,
      discount: 15,
      originalPrice: 3294,
      inStock: true,
      fastDelivery: true,
      freshness: 'Cold Pressed',
      organic: true,
      category: 'Cooking Oil',
      purity: 'Virgin Quality'
    },
    {
      id: 83,
      name: 'Fresh Orange Juice',
      price: 1200,
      unit: '1 liter',
      farmer: 'Citrus Fresh Co.',
      farming_method: 'Fresh Squeezed',
      image: '🧃',
      rating: 4.7,
      reviews: 156,
      inStock: true,
      fastDelivery: true,
      freshness: 'Squeezed Today',
      organic: false,
      category: 'Fresh Juice',
      purity: 'No Preservatives'
    },
    {
      id: 84,
      name: 'Groundnut Oil',
      price: 2200,
      unit: 'liter',
      farmer: 'Golden Nut Oil Mills',
      farming_method: 'Traditional Press',
      image: '🟡',
      rating: 4.6,
      reviews: 123,
      inStock: true,
      fastDelivery: false,
      freshness: 'Fresh Pressed',
      organic: false,
      category: 'Cooking Oil',
      purity: 'Pure & Natural'
    },
    {
      id: 85,
      name: 'Hibiscus Tea (Zobo)',
      price: 800,
      unit: '250g dried',
      farmer: 'Herbal Tea Gardens',
      farming_method: 'Sun Dried',
      image: '🌺',
      rating: 4.5,
      reviews: 89,
      discount: 20,
      originalPrice: 1000,
      inStock: true,
      fastDelivery: true,
      freshness: 'Recently Dried',
      organic: true,
      category: 'Herbal Tea',
      purity: 'Natural Antioxidants'
    },
    {
      id: 86,
      name: 'Fresh Coconut Water',
      price: 600,
      unit: '500ml',
      farmer: 'Island Fresh',
      farming_method: 'Direct from Coconut',
      image: '🥥',
      rating: 4.4,
      reviews: 67,
      inStock: false,
      fastDelivery: false,
      freshness: 'Seasonal Available',
      organic: true,
      category: 'Natural Drink',
      purity: '100% Natural'
    },
    {
      id: 87,
      name: 'Sesame Oil',
      price: 4200,
      unit: '500ml',
      farmer: 'Premium Seed Oils',
      farming_method: 'Cold Pressed',
      image: '🟤',
      rating: 4.8,
      reviews: 45,
      inStock: true,
      fastDelivery: false,
      freshness: 'Artisan Made',
      organic: true,
      category: 'Specialty Oil',
      purity: 'Cold Pressed'
    },
    {
      id: 88,
      name: 'Ginger Tea Blend',
      price: 1500,
      unit: '200g',
      farmer: 'Spice Tea Company',
      farming_method: 'Blended Fresh',
      image: '🫖',
      rating: 4.7,
      reviews: 98,
      inStock: true,
      fastDelivery: true,
      freshness: 'Fresh Blend',
      organic: false,
      category: 'Herbal Tea',
      purity: 'Natural Recipe'
    }
  ];

  // Filter products based on active subcategory
  const filteredProducts = beveragesOils.filter(product => {
    if (activeSubcategory === 'All Beverages & Oils') return true;
    
    // Map subcategories to products
    const subcategoryMap: { [key: string]: string[] } = {
      'Palm Oil': ['Extra Virgin Palm Oil'],
      'Coconut Oil': ['Virgin Coconut Oil'],
      'Groundnut Oil': ['Groundnut Oil'],
      'Fresh Juices': ['Fresh Orange Juice'],
      'Herbal Teas': ['Hibiscus Tea', 'Ginger Tea Blend'],
      'Natural Drinks': ['Fresh Coconut Water']
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

  // Get quantity for specific product
  const getQuantity = (productId: number) => {
    return quantities[productId] || 1;
  };

  // Update quantity for specific product
  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantities(prev => ({
        ...prev,
        [productId]: newQuantity
      }));
    }
  };

  // Handle adding to cart (placeholder for now)
  const handleAddToCart = (product: any) => {
    const quantity = getQuantity(product.id);
    alert(`Added ${quantity} x ${product.name} to cart! (Cart functionality will be added once context is working)`);
  };

  const subcategories = [
    'All Beverages & Oils',
    'Cooking Oils',
    'Fresh Juices',
    'Herbal Teas',
    'Natural Drinks',
    'Specialty Oils',
    'Traditional Beverages'
  ];

  const oilTypes = [
    'All Oil Types',
    'Palm Oil',
    'Coconut Oil',
    'Groundnut Oil',
    'Sesame Oil',
    'Specialty Blends'
  ];

  const beverageTypes = [
    'All Beverages',
    'Fresh Juices',
    'Herbal Teas',
    'Natural Waters',
    'Traditional Drinks',
    'Health Drinks'
  ];

  const extractionMethods = [
    'All Methods',
    'Cold Pressed',
    'Traditional Press',
    'Fresh Squeezed',
    'Sun Dried',
    'Steam Distilled'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center mb-4">
            <Link href="/products" className="text-teal-200 hover:text-white">
              Products
            </Link>
            <span className="mx-2">›</span>
            <span>Beverages & Oils</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Beverages & Oils</h1>
          <p className="text-teal-100 text-lg max-w-2xl">
            Pure, natural beverages and premium cooking oils sourced directly from local producers. 
            From traditional palm oil to refreshing natural juices and herbal teas.
          </p>
          <div className="flex items-center gap-6 mt-6 text-teal-100">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🌿</span>
              <span>100% Natural</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🏺</span>
              <span>Traditional Methods</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">✨</span> 
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
                        activeSubcategory === category 
                          ? 'bg-teal-100 text-teal-800' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveSubcategory(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Oil Types */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Oil Types</h3>
              <div className="space-y-2">
                {oilTypes.map((type, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-teal-600 rounded border-gray-300"
                      defaultChecked={index === 0}
                    />
                    <span className="ml-2 text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Beverage Types */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Beverage Types</h3>
              <div className="space-y-2">
                {beverageTypes.map((type, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-teal-600 rounded border-gray-300"
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
                  <span>₦500</span>
                  <span>₦5,000+</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort and Filter Bar */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="text-gray-600">
                Showing <span className="font-medium text-gray-900">{filteredProducts.length}</span> beverages & oils
                {activeSubcategory !== 'All Beverages & Oils' && (
                  <span className="ml-2 text-teal-600">in "{activeSubcategory}"</span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <label className="text-gray-700">Sort by:</label>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="featured">Featured</option>
                  <option value="freshness">Freshest First</option>
                  <option value="purity">Purity Level</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Purity Guarantee Banner */}
            <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2">🌿 Purity Guaranteed!</h2>
                  <p className="text-green-100">All our oils are extracted using traditional methods with no chemical additives</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Pure & Natural</div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/products/${product.id}`}>
                    <div className="relative h-48 bg-gradient-to-br from-teal-50 to-cyan-100 flex items-center justify-center">
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
                      <div className="absolute bottom-2 left-2 bg-teal-500 text-white text-xs px-2 py-1 rounded-full">
                        {product.category}
                      </div>
                    </div>
                  </Link>
                  
                  <div className="p-4">
                    <div className="text-sm text-gray-600 mb-1">{product.farmer}</div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      <Link href={`/products/${product.id}`} className="hover:text-teal-600">
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

                    {/* Purity Indicator */}
                    <div className="bg-teal-50 border border-teal-200 rounded p-2 mb-3">
                      <div className="flex items-center">
                        <span className="text-teal-600 text-xs mr-1">✨</span>
                        <span className="text-teal-800 text-xs font-medium">{product.purity}</span>
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
                      <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">
                        {product.farming_method}
                      </span>
                    </div>

                    {/* Quantity Selector and Add to Cart */}
                    <div className="flex space-x-2 mb-3">
                      <div className="flex items-center border border-gray-300 rounded">
                        <button 
                          className="px-3 py-1 text-gray-600 hover:text-gray-800"
                          onClick={() => updateQuantity(product.id, getQuantity(product.id) - 1)}
                        >
                          −
                        </button>
                        <input 
                          type="number" 
                          value={getQuantity(product.id)} 
                          min="1"
                          className="w-12 text-center py-1 border-0 focus:ring-0"
                          onChange={(e) => updateQuantity(product.id, parseInt(e.target.value) || 1)}
                        />
                        <button 
                          className="px-3 py-1 text-gray-600 hover:text-gray-800"
                          onClick={() => updateQuantity(product.id, getQuantity(product.id) + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                      className={`w-full py-2 rounded-lg font-medium transition-colors ${
                        product.inStock
                          ? 'bg-teal-600 text-white hover:bg-teal-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}