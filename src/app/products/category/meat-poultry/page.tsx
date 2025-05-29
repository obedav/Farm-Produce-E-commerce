// src/app/products/category/meat-poultry/page.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function MeatPoultryPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [sortBy, setSortBy] = useState('featured');
  
  // Get subcategory from URL params - handle it safely
  const subcategoryParam = searchParams?.subcategory;
  const activeSubcategory = typeof subcategoryParam === 'string' ? subcategoryParam : 'All Meat & Poultry';

  // Sample meat and poultry products
  const meatProducts = [
    {
      id: 51,
      name: 'Free-Range Chicken',
      price: 3500,
      unit: 'kg',
      farmer: 'Heritage Poultry Farm',
      farming_method: 'Free-Range Organic',
      image: '🐔',
      rating: 4.9,
      reviews: 167,
      inStock: true,
      fastDelivery: true,
      freshness: 'Processed Today',
      organic: true,
      halal: true
    },
    {
      id: 52,
      name: 'Grass-Fed Beef',
      price: 6500,
      unit: 'kg',
      farmer: 'Premium Cattle Ranch',
      farming_method: 'Grass-Fed',
      image: '🥩',
      rating: 4.8,
      reviews: 89,
      discount: 8,
      originalPrice: 7065,
      inStock: true,
      fastDelivery: false,
      freshness: 'Fresh Cut',
      organic: true,
      halal: true
    },
    {
      id: 53,
      name: 'Fresh Goat Meat',
      price: 4800,
      unit: 'kg',
      farmer: 'Mountain Goat Farm',
      farming_method: 'Natural Grazing',
      image: '🐐',
      rating: 4.7,
      reviews: 134,
      inStock: true,
      fastDelivery: true,
      freshness: 'Same Day Processing',
      organic: false,
      halal: true
    },
    {
      id: 54,
      name: 'Fresh Turkey',
      price: 4200,
      unit: 'kg',
      farmer: 'Gobble Farms',
      farming_method: 'Free-Range',
      image: '🦃',
      rating: 4.6,
      reviews: 56,
      inStock: true,
      fastDelivery: false,
      freshness: 'Farm Fresh',
      organic: true,
      halal: true
    },
    {
      id: 55,
      name: 'Fresh Fish (Tilapia)',
      price: 2800,
      unit: 'kg',
      farmer: 'Aqua Fresh Farms',
      farming_method: 'Pond Raised',
      image: '🐟',
      rating: 4.5,
      reviews: 98,
      discount: 12,
      originalPrice: 3182,
      inStock: true,
      fastDelivery: true,
      freshness: 'Caught This Morning',
      organic: false,
      halal: true
    },
    {
      id: 56,
      name: 'Smoked Fish',
      price: 3800,
      unit: 'kg',
      farmer: 'Traditional Smokehouse',
      farming_method: 'Traditional Smoking',
      image: '🐠',
      rating: 4.4,
      reviews: 67,
      inStock: false,
      fastDelivery: false,
      freshness: 'Weekly Production',
      organic: false,
      halal: true
    },
    {
      id: 57,
      name: 'Duck Meat',
      price: 5200,
      unit: 'kg',
      farmer: 'Quack Farms',
      farming_method: 'Free-Range',
      image: '🦆',
      rating: 4.3,
      reviews: 34,
      inStock: true,
      fastDelivery: false,
      freshness: 'Fresh Processing',
      organic: true,  
      halal: true
    },
    {
      id: 58,
      name: 'Fresh Prawns',
      price: 8500,
      unit: 'kg',
      farmer: 'Coastal Seafood',
      farming_method: 'Wild Caught',
      image: '🦐',
      rating: 4.8,
      reviews: 123,
      discount: 15,
      originalPrice: 10000,
      inStock: true,
      fastDelivery: true,
      freshness: 'Ocean Fresh',
      organic: false,
      halal: true
    }
  ];

  // Filter products based on active subcategory
  const filteredProducts = meatProducts.filter(product => {
    if (activeSubcategory === 'All Meat & Poultry') return true;
    
    // Map subcategories to products
    const subcategoryMap: { [key: string]: string[] } = {
      'Fresh Chicken': ['Free-Range Chicken'],
      'Turkey & Duck': ['Fresh Turkey', 'Duck Meat'],
      'Beef & Goat Meat': ['Grass-Fed Beef', 'Fresh Goat Meat'],
      'Fish & Seafood': ['Fresh Fish', 'Fresh Prawns', 'Smoked Fish'],
      'Processed Meats': ['Smoked', 'Processed'],
      'Organic Meats': ['Organic', 'Free-Range']
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
    'All Meat & Poultry',
    'Fresh Chicken',
    'Beef & Red Meat',
    'Goat & Lamb',
    'Fish & Seafood',
    'Processed Meats',
    'Game Meat'
  ];

  const certifications = [
    'All Certifications',
    'Halal Certified',
    'Organic Certified',
    'Free-Range',
    'Grass-Fed',
    'Wild Caught'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center mb-4">
            <Link href="/products" className="text-red-200 hover:text-white">
              Products
            </Link>
            <span className="mx-2">›</span>
            <span>Meat & Poultry</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Meat & Poultry</h1>
          <p className="text-red-100 text-lg max-w-2xl">
            Premium quality meat and poultry from trusted local farms. All products are fresh, 
            ethically sourced, and meet the highest standards for safety and quality.
          </p>
          <div className="flex items-center gap-6 mt-6 text-red-100">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🥩</span>
              <span>Fresh Cut Daily</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🏪</span>
              <span>Halal Certified</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">❄️</span> 
              <span>Cold Storage</span>
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
                          ? 'bg-red-100 text-red-800' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        if (category === 'All Meat & Poultry') {
                          window.history.pushState({}, '', '/products/category/meat-poultry');
                        } else {
                          window.history.pushState({}, '', `/products/category/meat-poultry?subcategory=${encodeURIComponent(category)}`);
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

            {/* Certifications */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Certifications</h3>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-red-600 rounded"
                      defaultChecked={index === 0}
                    />
                    <span className="ml-2 text-gray-700">{cert}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Price Range</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>₦2,000</span>
                  <span>₦10,000+</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="10000"
                  step="500"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
              </div>
            </div>

            {/* Special Features */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Special Features</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded" />
                  <span className="ml-2 text-gray-700">Same Day Fresh</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded" />
                  <span className="ml-2 text-gray-700">Cold Chain Delivery</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded" />
                  <span className="ml-2 text-gray-700">Custom Cuts</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded" />
                  <span className="ml-2 text-gray-700">Vacuum Packed</span>
                </label>
              </div>
            </div>

            {/* Processing Options */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Processing</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="processing" className="form-radio h-4 w-4 text-red-600" defaultChecked />
                  <span className="ml-2 text-gray-700">Fresh (Unprocessed)</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="processing" className="form-radio h-4 w-4 text-red-600" />
                  <span className="ml-2 text-gray-700">Marinated</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="processing" className="form-radio h-4 w-4 text-red-600" />
                  <span className="ml-2 text-gray-700">Smoked</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="processing" className="form-radio h-4 w-4 text-red-600" />
                  <span className="ml-2 text-gray-700">Dried/Cured</span>
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort and Filter Bar */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="text-gray-600">
                Showing <span className="font-medium text-gray-900">{filteredProducts.length}</span> meat products
                {activeSubcategory !== 'All Meat & Poultry' && (
                  <span className="ml-2 text-red-600">in "{activeSubcategory}"</span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <label className="text-gray-700">Sort by:</label>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-1 focus:ring-2 focus:ring-red-500"
                >
                  <option value="featured">Featured</option>
                  <option value="freshness">Freshest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Quality Assurance Banner */}
            <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2">🛡️ Quality & Safety Guaranteed!</h2>
                  <p className="text-green-100">All meat products undergo strict quality checks and are stored in temperature-controlled environments</p>
                </div>
                <div className="text-right">
                  <div className="text-sm bg-white/20 rounded px-3 py-1 mb-1">HACCP Certified</div>
                  <div className="text-sm bg-white/20 rounded px-3 py-1">Halal Verified</div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/products/${product.id}`}>
                    <div className="relative h-48 bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center">
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
                      {product.halal && (
                        <div className="absolute bottom-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                          Halal ✓
                        </div>
                      )}
                    </div>
                  </Link>
                  
                  <div className="p-4">
                    <div className="text-sm text-gray-600 mb-1">{product.farmer}</div>
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                      <Link href={`/products/${product.id}`} className="hover:text-red-600">
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
                    <div className="bg-blue-50 border border-blue-200 rounded p-2 mb-3">
                      <div className="flex items-center">
                        <span className="text-blue-600 text-xs mr-1">❄️</span>
                        <span className="text-blue-800 text-xs font-medium">{product.freshness}</span>
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
                        {product.inStock ? 'Fresh & Available' : 'Sold Out'}
                      </span>
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                        {product.farming_method}
                      </span>
                    </div>
                    
                    <button className={`w-full py-2 rounded-lg font-medium transition-colors ${
                      product.inStock
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}>
                      {product.inStock ? 'Add to Cart' : 'Sold Out'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Load More Products
              </button>
            </div>

            {/* Storage & Handling Tips */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Storage & Handling Guidelines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                    <span className="mr-2">🥩</span> Fresh Meat
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Store in refrigerator at 0-4°C</li>
                    <li>• Use within 2-3 days of purchase</li>
                    <li>• Keep in original packaging</li>
                    <li>• Freeze for longer storage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                    <span className="mr-2">🐟</span> Seafood
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Keep on ice or very cold</li>
                    <li>• Use within 1-2 days</li>
                    <li>• Store in sealed containers</li>
                    <li>• Check for freshness signs</li>
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