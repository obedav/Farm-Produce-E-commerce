// src/app/checkout/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  // In a real app, this would come from your cart context/API
  const cartItems = [
    { 
      id: 1, 
      name: 'Farm Fresh Tomatoes', 
      price: 3.99, 
      unit: 'kg', 
      quantity: 2, 
      farmer: 'Green Valley Farm' 
    },
    { 
      id: 2, 
      name: 'Organic Sweet Corn', 
      price: 1.49, 
      unit: 'ear', 
      quantity: 4, 
      farmer: 'Sunshine Organics' 
    },
    { 
      id: 4, 
      name: 'Fresh Spinach', 
      price: 2.49, 
      unit: 'bunch', 
      quantity: 1, 
      farmer: 'River Creek Gardens' 
    }
  ];

  // Calculate cart totals
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + shipping + tax;

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    deliveryNotes: '',
    paymentMethod: 'credit_card',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const [loadingPayment, setLoadingPayment] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would process the payment and create an order here
    setLoadingPayment(true);
    
    // Simulate processing
    setTimeout(() => {
      setLoadingPayment(false);
      // Redirect to order confirmation
      window.location.href = '/checkout/confirmation';
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <form onSubmit={handleSubmit}>
            {/* Delivery Information */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-gray-700 font-medium mb-2">
                    State/Province *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-gray-700 font-medium mb-2">
                    Zip/Postal Code *
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="deliveryNotes" className="block text-gray-700 font-medium mb-2">
                  Delivery Notes (Optional)
                </label>
                <textarea
                  id="deliveryNotes"
                  name="deliveryNotes"
                  value={formData.deliveryNotes}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Special instructions for delivery (e.g., gate code, preferred delivery time)"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            
            {/* Delivery Options */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Delivery Options</h2>
              
              <div className="space-y-4">
                <div className="border rounded-md p-4 bg-green-50 border-green-200">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="standard-delivery"
                      name="deliveryOption"
                      value="standard"
                      defaultChecked
                      className="mr-3"
                    />
                    <label htmlFor="standard-delivery" className="flex-grow">
                      <div className="font-medium">Standard Home Delivery</div>
                      <div className="text-sm text-gray-600">Delivery within 2-3 days</div>
                    </label>
                    <div className="font-medium">
                      $5.99
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="express-delivery"
                      name="deliveryOption"
                      value="express"
                      className="mr-3"
                    />
                    <label htmlFor="express-delivery" className="flex-grow">
                      <div className="font-medium">Express Delivery</div>
                      <div className="text-sm text-gray-600">Next-day delivery</div>
                    </label>
                    <div className="font-medium">
                      $9.99
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="farm-pickup"
                      name="deliveryOption"
                      value="pickup"
                      className="mr-3"
                    />
                    <label htmlFor="farm-pickup" className="flex-grow">
                      <div className="font-medium">Farm Pickup</div>
                      <div className="text-sm text-gray-600">Pick up directly from the farm</div>
                    </label>
                    <div className="font-medium">
                      Free
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Payment Information */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
              
              <div className="mb-4">
                <div className="space-y-4">
                  <div className="border rounded-md p-4 bg-green-50 border-green-200">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="credit-card"
                        name="paymentMethod"
                        value="credit_card"
                        checked={formData.paymentMethod === 'credit_card'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <label htmlFor="credit-card" className="flex-grow">
                        <div className="font-medium">Credit/Debit Card</div>
                      </label>
                      <div className="flex space-x-2">
                        <div className="w-8 h-5 bg-gray-200 rounded"></div>
                        <div className="w-8 h-5 bg-gray-200 rounded"></div>
                        <div className="w-8 h-5 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="paypal"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <label htmlFor="paypal" className="flex-grow">
                        <div className="font-medium">PayPal</div>
                      </label>
                      <div className="w-12 h-5 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {formData.paymentMethod === 'credit_card' && (
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <div className="mb-4">
                    <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="cardName" className="block text-gray-700 font-medium mb-2">
                      Name on Card *
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiryDate" className="block text-gray-700 font-medium mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
        
        {/* Order Summary */}
        <div className="md:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="max-h-60 overflow-y-auto mb-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between py-2 border-b border-gray-200">
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-500">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </div>
                    <div className="text-sm text-gray-500">{item.farmer}</div>
                  </div>
                  <div className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tax (7%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={loadingPayment}
              className="w-full py-3 px-4 bg-green-600 text-white text-center font-semibold rounded-md hover:bg-green-700 transition disabled:opacity-70"
            >
              {loadingPayment ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Place Order'
              )}
            </button>
            
            <div className="mt-4 text-sm text-gray-600">
              By placing this order, you agree to our <Link href="/terms" className="text-green-600 hover:text-green-700">Terms of Service</Link> and <Link href="/privacy" className="text-green-600 hover:text-green-700">Privacy Policy</Link>.
            </div>
            
            <div className="mt-6 flex justify-center">
              <Link href="/cart" className="text-green-600 hover:text-green-700">
                &larr; Return to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}