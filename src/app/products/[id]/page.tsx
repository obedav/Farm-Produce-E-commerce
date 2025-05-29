
'use client';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState } from 'react';


const getProduct = (id: string) => {
  const products = [
    { 
      id: 1, 
      name: 'Premium Fresh Tomatoes', 
      price: 1800, 
      unit: 'kg', 
      image: '/tomatoes.jpg', 
      farmer: 'Green Valley Farm', 
      farming_method: 'Certified Organic',
      category: 'Vegetables',
      season: 'Year Round',
      description: 'Hand-picked, vine-ripened tomatoes grown using sustainable organic farming practices. These tomatoes are rich in lycopene and perfect for cooking, salads, and sauces.',
      available_units: [
        { size: '500g', price: 900, stock: 45 },
        { size: '1kg', price: 1800, stock: 32 },
        { size: '2kg', price: 3400, stock: 18 },
        { size: '5kg', price: 8000, stock: 8 }
      ],
      harvest_date: '2025-05-20',
      expiry_date: '2025-06-05',
      origin: 'Kano State, Nigeria',
      variety: 'Roma & Cherry Mix',
      nutritional_info: {
        calories: '18 per 100g',
        protein: '0.9g',
        carbs: '3.9g',
        fiber: '1.2g',
        vitamins: 'Vitamin C (28mg), Vitamin K (7.9μg), Potassium (237mg), Folate (15μg)',
        minerals: 'Lycopene, Beta-carotene, Phosphorus',
        notes: 'Excellent source of antioxidants and supports heart health'
      },
      farmer_details: {
        name: 'Green Valley Farm',
        location: 'Kano State, Nigeria',
        established: 2008,
        size: '25 hectares',
        practices: 'Certified organic farming with drip irrigation, crop rotation, natural pest management using beneficial insects, and composting.',
        certifications: ['Organic Certification (NACGRAB)', 'Good Agricultural Practice (GAP)', 'HACCP Certified'],
        story: 'Green Valley Farm is a third-generation family farm committed to sustainable agriculture. We use traditional knowledge combined with modern organic techniques to produce premium quality vegetables.',
        contact: '+234 803 123 4567'
      },
      storage_tips: 'Store at room temperature (18-20°C) away from direct sunlight. Refrigerate only when fully ripe. Best consumed within 5-7 days of purchase.',
      cooking_suggestions: ['Fresh salads', 'Tomato stew (Nigerian style)', 'Pasta sauces', 'Grilled vegetables', 'Pepper soup'],
      health_benefits: ['Supports immune system', 'Promotes heart health', 'Good for skin health', 'May reduce cancer risk'],
      related_products: [2, 4, 7, 8]
    },
    { 
      id: 2, 
      name: 'Sweet Yellow Corn', 
      price: 800, 
      unit: 'cob', 
      image: '/corn.jpg', 
      farmer: 'Sunshine Organics', 
      farming_method: 'Naturally Grown',
      category: 'Grains & Cereals',
      season: 'Rainy Season',
      description: 'Fresh, sweet yellow corn harvested at peak sweetness. Perfect for boiling, grilling, or making traditional Nigerian corn dishes.',
      available_units: [
        { size: '1 cob', price: 800, stock: 120 },
        { size: '5 cobs', price: 3800, stock: 45 },
        { size: '10 cobs', price: 7200, stock: 25 },
        { size: '20 cobs', price: 13600, stock: 12 }
      ],
      harvest_date: '2025-05-18',
      expiry_date: '2025-05-28',
      origin: 'Kaduna State, Nigeria',
      variety: 'Golden Bantam Hybrid',
      nutritional_info: {
        calories: '96 per cob',
        protein: '3.4g',
        carbs: '21g',
        fiber: '2.4g',
        vitamins: 'Vitamin C (6.8mg), Thiamin (0.2mg), Folate (42μg), Vitamin B6',
        minerals: 'Magnesium, Potassium, Phosphorus',
        notes: 'Good source of energy and dietary fiber'
      },
      farmer_details: {
        name: 'Sunshine Organics',
        location: 'Kaduna State, Nigeria',
        established: 2015,
        size: '40 hectares',
        practices: 'Sustainable farming with integrated pest management, organic fertilizers, and rainwater harvesting.',
        certifications: ['GAP Certified', 'Sustainable Agriculture Initiative'],
        story: 'Founded by agricultural engineers passionate about food security and sustainable farming in Northern Nigeria.',
        contact: '+234 802 987 6543'
      },
      storage_tips: 'Keep unhusked in refrigerator. For best flavor, consume within 1-3 days of harvest. Can be blanched and frozen for longer storage.',
      cooking_suggestions: ['Boiled corn (Agbado)', 'Corn porridge (Ogi)', 'Corn fritters', 'Grilled corn', 'Corn salad'],
      health_benefits: ['Provides sustained energy', 'Supports digestive health', 'Good for eye health', 'Helps regulate blood sugar'],
      related_products: [1, 3, 5, 9]
    }
  ];
  
  const product = products.find(p => p.id === parseInt(id));
  if (!product) return null;
  return product;
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);
  const [activeTab, setActiveTab] = useState('details');
  const [selectedUnit, setSelectedUnit] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    notFound();
  }
  

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getCurrentPrice = () => {
    return product.available_units[selectedUnit].price;
  };

  const getDaysToExpiry = () => {
    const today = new Date();
    const expiry = new Date(product.expiry_date);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/products" className="text-green-600 hover:text-green-700 flex items-center">
          ← Back to Products
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:w-1/2 p-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg overflow-hidden mb-4">
              <div className="w-full h-96 flex items-center justify-center">
                <span className="text-green-600/40 text-2xl font-bold text-center px-4">{product.name}</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 p-6">
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                  {product.farming_method}
                </span>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                  {product.category}
                </span>
                <span className="inline-block bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-medium">
                  Fresh ({getDaysToExpiry()} days left)
                </span>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <Link href={`/farmers/${product.farmer_details.name.replace(/\s+/g, '-').toLowerCase()}`} className="text-green-600 hover:text-green-700 font-medium">
                {product.farmer_details.name}
              </Link>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-600 text-sm">{product.origin}</span>
            </div>
            
            <div className="text-3xl font-bold text-gray-900 mb-4">
              {formatNaira(getCurrentPrice())} 
              <span className="text-lg text-gray-600 font-normal">/ {product.available_units[selectedUnit].size}</span>
            </div>
            
            <div className="border-t border-b border-gray-200 py-4 mb-6">
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            <div className="mb-6">
              <div className="mb-4">
                <label className="block text-gray-900 font-medium mb-2">Package Size</label>
                <div className="grid grid-cols-2 gap-2">
                  {product.available_units.map((unit, index) => (
                    <label key={index} className="relative">
                      <input 
                        type="radio" 
                        name="size" 
                        className="sr-only" 
                        checked={selectedUnit === index}
                        onChange={() => setSelectedUnit(index)}
                      />
                      <div className={`cursor-pointer block p-3 border rounded-lg text-center transition-all ${
                        selectedUnit === index 
                          ? 'border-green-600 bg-green-50 ring-2 ring-green-600' 
                          : 'border-gray-300 hover:border-green-400'
                      }`}>
                        <div className="font-medium">{unit.size}</div>
                        <div className="text-sm text-gray-600">{formatNaira(unit.price)}</div>
                        <div className="text-xs text-gray-500">{unit.stock} in stock</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <label className="text-gray-900 font-medium">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800"
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center py-2 border-0 focus:ring-0"
                    min="1"
                    max={product.available_units[selectedUnit].stock}
                  />
                  <button 
                    onClick={() => setQuantity(Math.min(product.available_units[selectedUnit].stock, quantity + 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  ({product.available_units[selectedUnit].stock} available)
                </span>
              </div>
              
              <div className="flex gap-3 mb-6">
                <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  Add to Cart - {formatNaira(getCurrentPrice() * quantity)}
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="border border-gray-200 rounded-lg p-3">
                  <h4 className="font-medium text-gray-900 mb-1 text-sm">Harvest Date</h4>
                  <p className="text-sm text-gray-600">{new Date(product.harvest_date).toLocaleDateString()}</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-3">
                  <h4 className="font-medium text-gray-900 mb-1 text-sm">Best Before</h4>
                  <p className="text-sm text-gray-600">{new Date(product.expiry_date).toLocaleDateString()}</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-3">
                  <h4 className="font-medium text-gray-900 mb-1 text-sm">Variety</h4>
                  <p className="text-sm text-gray-600">{product.variety}</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-3">
                  <h4 className="font-medium text-gray-900 mb-1 text-sm">Season</h4>
                  <p className="text-sm text-gray-600">{product.season}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            {[
              { id: 'details', label: 'Product Details' },
              { id: 'nutrition', label: 'Nutrition Facts' },
              { id: 'farmer', label: 'About the Farmer' },
              { id: 'reviews', label: 'Reviews' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'details' && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Product Details</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  
                  <h4 className="font-medium text-gray-900 mb-2">Storage Instructions</h4>
                  <p className="text-gray-700 mb-4">{product.storage_tips}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Health Benefits</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    {product.health_benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'nutrition' && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Nutrition Facts</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Nutritional Values per 100g</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Calories:</span>
                      <span className="font-medium">{product.nutritional_info.calories}</span>
                    </div>
                    {product.nutritional_info.protein && (
                      <div className="flex justify-between">
                        <span>Protein:</span>
                        <span className="font-medium">{product.nutritional_info.protein}</span>
                      </div>
                    )}
                    {product.nutritional_info.carbs && (
                      <div className="flex justify-between">
                        <span>Carbohydrates:</span>
                        <span className="font-medium">{product.nutritional_info.carbs}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Vitamins & Minerals</h4>
                  <p className="text-gray-700 mb-3">{product.nutritional_info.vitamins}</p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-green-800 text-sm font-medium">{product.nutritional_info.notes}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'farmer' && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Meet Your Farmer</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{product.farmer_details.name}</h4>
                  <p className="text-gray-600 mb-4">{product.farmer_details.location}</p>
                  <p className="text-gray-700">{product.farmer_details.story}</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Farming Practices</h5>
                  <p className="text-gray-700 mb-4">{product.farmer_details.practices}</p>
                  
                  <h5 className="font-medium text-gray-900 mb-2">Certifications</h5>
                  <div className="flex flex-wrap gap-2">
                    {product.farmer_details.certifications.map((cert, index) => (
                      <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Customer Reviews</h3>
              <div className="text-center py-8 text-gray-500">
                <p>No reviews yet. Be the first to review this product!</p>
                <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Write a Review
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: 2, name: 'Sweet Yellow Corn', price: 800, unit: 'cob', farmer: 'Sunshine Organics' },
            { id: 3, name: 'Free-Range Eggs', price: 2800, unit: 'dozen', farmer: 'Happy Hen Farms' },
            { id: 4, name: 'African Spinach (Ugu)', price: 1200, unit: 'bunch', farmer: 'Green Leaf Gardens' },
            { id: 5, name: 'Organic Carrots', price: 1500, unit: 'kg', farmer: 'Valley Produce' }
          ].map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/products/${item.id}`}>
                <div className="h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                  <span className="text-green-600/40 text-lg font-bold text-center px-2">{item.name}</span>
                </div>
                <div className="p-4">
                  <div className="text-sm text-gray-600 mb-1">{item.farmer}</div>
                  <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-lg font-bold text-gray-900">
                    {formatNaira(item.price)} <span className="text-sm text-gray-600 font-normal">/ {item.unit}</span>
                  </p>
                </div>
              </Link>
              <div className="px-4 pb-4">
                <button className="w-full py-2 bg-green-600 text-white rounded font-medium hover:bg-green-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}