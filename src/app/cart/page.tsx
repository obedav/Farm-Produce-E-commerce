// src/app/cart/page.tsx
'use client';

import Link from 'next/link';
import { useCart } from '../contexts/CartContexts';

export default function CartPage() {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalItems, 
    getTotalPrice 
  } = useCart();

  // Calculate totals
  const subtotal = getTotalPrice();
  const shipping = cartItems.length > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
        {cartItems.length > 0 && (
          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-700 text-sm underline"
          >
            Clear Cart
          </button>
        )}
      </div>
      
      {cartItems.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link
            href="/products"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="hidden md:grid md:grid-cols-12 bg-gray-50 p-4 text-gray-600 text-sm font-medium">
                <div className="md:col-span-6">Product</div>
                <div className="md:col-span-2 text-center">Price</div>
                <div className="md:col-span-2 text-center">Quantity</div>
                <div className="md:col-span-2 text-right">Total</div>
              </div>
              
              {cartItems.map((item, index) => (
                <div key={item.id} className={`p-4 ${index !== cartItems.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <div className="md:grid md:grid-cols-12 gap-4 items-center">
                    {/* Product Info */}
                    <div className="md:col-span-6 flex items-center">
                      <div className="w-20 h-20 bg-green-100 rounded-lg flex-shrink-0 mr-4 overflow-hidden">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-green-700 text-xs font-bold p-2 text-center">
                            {item.name.split(' ').map(word => word[0]).join('')}
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <Link 
                          href={`/products/${item.id}`} 
                          className="font-medium text-gray-900 hover:text-green-600 transition-colors block"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">{item.farmer}</p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 text-sm mt-2 md:hidden transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="md:col-span-2 flex md:block md:text-center mt-4 md:mt-0">
                      <span className="md:hidden text-sm text-gray-600 mr-2">Price:</span>
                      <span className="font-medium">${item.price.toFixed(2)} / {item.unit}</span>
                    </div>
                    
                    {/* Quantity */}
                    <div className="md:col-span-2 flex md:justify-center mt-4 md:mt-0">
                      <span className="md:hidden text-sm text-gray-600 mr-2">Quantity:</span>
                      <div className="flex items-center border rounded-md overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          −
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => {
                            const newQuantity = parseInt(e.target.value);
                            if (!isNaN(newQuantity) && newQuantity > 0) {
                              updateQuantity(item.id, newQuantity);
                            }
                          }}
                          min="1"
                          max="99"
                          className="w-16 text-center border-x py-2 focus:outline-none focus:bg-gray-50"
                        />
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= 99}
                          className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    {/* Total & Remove */}
                    <div className="md:col-span-2 flex items-center justify-between md:justify-end md:text-right mt-4 md:mt-0">
                      <div className="flex items-center">
                        <span className="md:hidden text-sm text-gray-600 mr-2">Total:</span>
                        <span className="font-semibold text-lg">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 ml-4 hidden md:block p-1 transition-colors"
                        title="Remove item"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="p-4 bg-gray-50">
                <Link 
                  href="/products" 
                  className="text-green-600 hover:text-green-700 flex items-center font-medium transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Subtotal ({getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'})
                  </span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping > 0 ? `$${shipping.toFixed(2)}` : 'Free'}
                  </span>
                </div>
                {subtotal < 50 && subtotal > 0 && (
                  <div className="text-sm text-green-600 bg-green-50 p-3 rounded">
                    Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                  </div>
                )}
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between font-semibold text-xl">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Link
                href="/checkout"
                className="block w-full py-3 px-4 bg-green-600 text-white text-center font-semibold rounded-md hover:bg-green-700 transition-colors mb-3"
              >
                Proceed to Checkout
              </Link>
              
              <div className="text-center text-sm text-gray-500">
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Secure checkout
                </div>
                <p>Free returns within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}