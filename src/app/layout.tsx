// src/app/layout.tsx
import './globals.css';
import Header from './components/Header';
import { CartProvider } from './contexts/CartContexts';

export const metadata = {
  title: 'AgricFresh - Farm to Table Agricultural Marketplace',
  description: 'Buy fresh produce directly from local farmers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)]">
        <CartProvider>
          <Header />
          <main>{children}</main>
          
          <footer className="bg-[var(--primary-dark)] text-white mt-12 py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">AgricFresh</h3>
                  <p className="text-[var(--primary-light)]">
                    Connecting you directly with local farmers for the freshest produce available.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="/products" className="text-[var(--primary-light)] hover:text-white">
                        Browse Products
                      </a>
                    </li>
                    <li>
                      <a href="/our-farmers" className="text-[var(--primary-light)] hover:text-white">
                        Meet Our Farmers
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="text-[var(--primary-light)] hover:text-white">
                        About Us
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                  <address className="not-italic text-[var(--primary-light)]">
                    <p>123 Farm Road</p>
                    <p>Harvest Valley, FV 12345</p>
                    <p className="mt-2">Email: info@agricfresh.com</p>
                    <p>Phone: (123) 456-7890</p>
                  </address>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                  <p className="text-[var(--primary-light)] mb-2">
                    Subscribe for updates on seasonal produce and farm events.
                  </p>
                  <div className="flex">
                    <input 
                      type="email"
                      placeholder="Your email"
                      className="px-3 py-2 rounded-l text-[var(--text)] w-full"
                    />
                    <button className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] px-4 py-2 rounded-r">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-[var(--primary)] text-center text-[var(--primary-light)]">
                <p>&copy; 2025 AgricFresh Agricultural Marketplace. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}