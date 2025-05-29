// src/app/checkout/confirmation/page.tsx
import Link from 'next/link';

export default function OrderConfirmationPage() {
  // In a real app, this would come from your order API
  const orderInfo = {
    orderId: '12345678',
    orderDate: new Date().toLocaleDateString(),
    estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString(), // 2 days from now
    items: [
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
    ],
    subtotal: 15.93,
    shipping: 5.99,
    tax: 1.12,
    total: 23.04,
    shippingAddress: {
      name: 'John Doe',
      address: '123 Main St',
      city: 'Anytown',
      state: 'ST',
      zipCode: '12345',
      country: 'United States'
    },
    paymentMethod: 'Credit Card (ending in 1234)'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-green-50 rounded-lg p-6 mb-8 border border-green-200 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-lg text-gray-700">
            Thank you for your order. We've received it and will begin processing it immediately.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Order Details</h2>
            <span className="text-gray-500">Order #{orderInfo.orderId}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Order Information</h3>
              <div className="text-gray-600">
                <p><span className="font-medium">Order Date:</span> {orderInfo.orderDate}</p>
                <p><span className="font-medium">Est. Delivery:</span> {orderInfo.estimatedDelivery}</p>
                <p><span className="font-medium">Payment Method:</span> {orderInfo.paymentMethod}</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Shipping Address</h3>
              <div className="text-gray-600">
                <p>{orderInfo.shippingAddress.name}</p>
                <p>{orderInfo.shippingAddress.address}</p>
                <p>{orderInfo.shippingAddress.city}, {orderInfo.shippingAddress.state} {orderInfo.shippingAddress.zipCode}</p>
                <p>{orderInfo.shippingAddress.country}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-medium text-gray-900 mb-4">Order Items</h3>
            <div className="space-y-4">
              {orderInfo.items.map(item => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.farmer}</p>
                    <p className="text-sm text-gray-500">${item.price.toFixed(2)} / {item.unit} x {item.quantity}</p>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 mt-6 pt-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span>${orderInfo.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping</span>
                <span>${orderInfo.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tax</span>
                <span>${orderInfo.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t border-gray-200 pt-4 mt-2">
                <span>Total</span>
                <span>${orderInfo.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4">
                1
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Order Processing</h3>
                <p className="text-gray-600"> We're preparing your items for shipment. This usually takes 1-2 business days.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4">
                2
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Shipment</h3>
                <p className="text-gray-600">Your order will be packaged with care to maintain freshness during transit.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4">
                3
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Delivery</h3>
                <p className="text-gray-600">You'll receive an email with tracking information once your order ships.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            If you have any questions about your order, please email us at<br />
            <a href="mailto:support@farmfresh.com" className="text-green-600 hover:text-green-700">support@farmfresh.com</a>
          </p>
          
          <div className="flex justify-center space-x-4">
            <Link 
              href="/products" 
              className="inline-block px-6 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition"
            >
              Continue Shopping
            </Link>
            <Link 
              href="/account/orders" 
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              View My Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}