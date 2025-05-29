'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductsPage() {
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  // In a real app, these would come from API calls with filters applied
  const categories = [
    { id: 1, name: 'Vegetables', count: 24 },
    { id: 2, name: 'Fruits', count: 18 },
    { id: 3, name: 'Grains & Cereals', count: 12 },
    { id: 4, name: 'Dairy & Eggs', count: 9 },
    { id: 5, name: 'Meat & Poultry', count: 7 },
    { id: 6, name: 'Herbs & Spices', count: 15 },
  ];

  // Sample seasonal filter options
  const seasons = [
    { id: 'spring', name: 'Spring Harvest' },
    { id: 'summer', name: 'Summer Harvest' },
    { id: 'fall', name: 'Fall Harvest' },
    { id: 'winter', name: 'Winter Harvest' },
    { id: 'year_round', name: 'Available Year-Round' },
  ];

  // Sample farming methods
  const farmingMethods = [
    { id: 'organic', name: 'Certified Organic' },
    { id: 'natural', name: 'Naturally Grown' },
    { id: 'conventional', name: 'Conventional' },
    { id: 'hydroponic', name: 'Hydroponic' },
    { id: 'biodynamic', name: 'Biodynamic' },
  ];

  // Sample products with prices in Naira
  const products = [
    { id: 1, name: 'Farm Fresh Tomatoes', price: 1500, unit: 'kg', image: '/tomatoes.jpg', farmer: 'Green Valley Farm', farming_method: 'Certified Organic' },
    { id: 2, name: 'Organic Sweet Corn', price: 600, unit: 'ear', image: '/corn.jpg', farmer: 'Sunshine Organics', farming_method: 'Certified Organic' },
    { id: 3, name: 'Free-Range Eggs', price: 2000, unit: 'dozen', image: '/eggs.jpg', farmer: 'Happy Hen Farm', farming_method: 'Naturally Grown' },
    { id: 4, name: 'Fresh Spinach', price: 1000, unit: 'bunch', image: '/spinach.jpg', farmer: 'River Creek Gardens', farming_method: 'Certified Organic' },
    { id: 5, name: 'Red Potatoes', price: 800, unit: 'kg', image: '/potatoes.jpg', farmer: 'Green Valley Farm', farming_method: 'Naturally Grown' },
    { id: 6, name: 'Honey Crisp Apples', price: 1400, unit: 'kg', image: '/apples.jpg', farmer: 'Orchard Hills', farming_method: 'Certified Organic' },
    { id: 7, name: 'Fresh Carrots', price: 900, unit: 'bunch', image: '/carrots.jpg', farmer: 'River Creek Gardens', farming_method: 'Naturally Grown' },
    { id: 8, name: 'Strawberries', price: 2000, unit: 'pack', image: '/strawberries.jpg', farmer: 'Berry Good Farm', farming_method: 'Certified Organic' },
  ];

  // Naira formatter
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Fresh Farm Products</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar filters */}
        <div className="lg:w-1/4 space-y-6">
          {/* Search */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold text-lg mb-3">Search</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="absolute right-3 top-2 text-gray-500">
                🔍
              </button>
            </div>
          </div>
          
          {/* Categories */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold text-lg mb-3">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/products?category=${category.id}`}
                    className="flex justify-between items-center text-gray-600 hover:text-green-600"
                  >
                    <span>{category.name}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Seasonality */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold text-lg mb-3">Seasonal Availability</h2>
            <div className="space-y-2">
              {seasons.map((season) => (
                <div key={season.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`season-${season.id}`}
                    className="mr-2"
                  />
                  <label htmlFor={`season-${season.id}`} className="text-gray-600">{season.name}</label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Farming Methods */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold text-lg mb-3">Farming Methods</h2>
            <div className="space-y-2">
              {farmingMethods.map((method) => (
                <div key={method.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`method-${method.id}`}
                    className="mr-2"
                  />
                  <label htmlFor={`method-${method.id}`} className="text-gray-600">{method.name}</label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Price Range */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold text-lg mb-3">Price Range</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>₦0</span>
                <span>₦20,000+</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="20000" 
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
              />
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <label className="block text-sm text-gray-600 mb-1">Min (₦)</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm text-gray-600 mb-1">Max (₦)</label>
                  <input
                    type="number"
                    placeholder="20,000+"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="lg:w-3/4">
          {/* Sort and Filter Options */}
          <div className="bg-white p-4 rounded-lg shadow mb-6 flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Showing <span className="font-medium">{products.length}</span> products
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-sm text-gray-600">Sort by:</label>
              <select className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Alphabetical</option>
              </select>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/products/${product.id}`}>
                  <div className="h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center relative">
                    <div className="text-green-600/40 text-xl font-bold text-center px-4">
                      {product.name}
                    </div>
                    <div className="absolute top-2 right-2">
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                        {product.farming_method}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-gray-600 mb-1">{product.farmer}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-lg font-bold text-gray-900">
                      {formatNaira(product.price)} <span className="text-sm text-gray-600 font-normal">/ {product.unit}</span>
                    </p>
                  </div>
                </Link>
                <div className="px-4 pb-4 flex space-x-2">
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
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="flex-grow py-2 bg-green-600 text-white rounded text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                &laquo;
              </a>
              <a
                href="#"
                aria-current="page"
                className="z-10 bg-green-50 border-green-500 text-green-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                1
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                2
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500">
                ...
              </span>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                8
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                9
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                10
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                &raquo;
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}