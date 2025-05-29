// src/app/components/Header.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../contexts/CartContexts';

export default function Header() {
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isHelpDropdownOpen, setIsHelpDropdownOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  // Get cart data from context
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  // Agricultural categories for mega menu
  const megaMenuCategories = [
    {
      title: "Fresh Vegetables",
      route: "fresh-vegetables",
      items: [
        "Leafy Greens (Ugu, Spinach)",
        "Tomatoes & Peppers", 
        "Root Vegetables",
        "Onions & Garlic",
        "Okra & Garden Eggs",
        "Cucumber & Lettuce"
      ]
    },
    {
      title: "Fresh Fruits",
      route: "fresh-fruits",
      items: [
        "Citrus Fruits",
        "Tropical Fruits",
        "Berries & Grapes",
        "Seasonal Fruits",
        "Dried Fruits",
        "Fruit Bundles"
      ]
    },
    {
      title: "Grains & Cereals",
      route: "grains-cereals",
      items: [
        "Rice Varieties",
        "Corn & Maize",
        "Wheat & Flour",
        "Millet & Sorghum",
        "Beans & Legumes",
        "Quinoa & Others"
      ]
    },
    {
      title: "Dairy & Eggs",
      route: "dairy-eggs",
      items: [
        "Fresh Milk",
        "Free-Range Eggs",
        "Local Cheese",
        "Yogurt & Fermented",
        "Butter & Cream",
        "Dairy Bundles"
      ]
    },
    {
      title: "Meat & Poultry",
      route: "meat-poultry",
      items: [
        "Fresh Chicken",
        "Turkey & Duck",
        "Beef & Goat Meat",
        "Fish & Seafood",
        "Processed Meats",
        "Organic Meats"
      ]
    },
    {
      title: "Herbs & Spices",
      route: "herbs-spices",
      items: [
        "Fresh Herbs",
        "Dried Spices",
        "Spice Blends",
        "Medicinal Herbs",
        "Seasoning Mixes",
        "Organic Spices"
      ]
    },
    {
      title: "Nuts & Seeds",
      route: "nuts-seeds",
      items: [
        "Groundnuts",
        "Cashew Nuts",
        "Coconuts",
        "Sesame Seeds",
        "Pumpkin Seeds",
        "Mixed Nuts"
      ]
    },
    {
      title: "Beverages & Oils",
      route: "beverages-oils",
      items: [
        "Palm Oil",
        "Coconut Oil",
        "Groundnut Oil",
        "Fresh Juices",
        "Herbal Teas",
        "Natural Drinks"
      ]
    }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-green-700 flex items-center flex-shrink-0">
            <span className="mr-2">🌱</span> 
            <span className="hidden sm:inline">AgricFresh</span>
            <span className="sm:hidden">AF</span>
          </Link>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative flex">
              <input
                type="text"
                placeholder="Search products, brands and categories"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-r-md font-medium transition-colors">
                Search
              </button>
            </div>
          </div>
          
          {/* Right side navigation */}
          <div className="flex items-center space-x-1">
            {/* Account Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsAccountDropdownOpen(!isAccountDropdownOpen);
                  setIsHelpDropdownOpen(false);
                  setIsMegaMenuOpen(false);
                }}
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="hidden md:inline">Account</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isAccountDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-2">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 mx-2 rounded font-medium transition-colors">
                      Sign In
                    </button>
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link
                        href="/account"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50"
                        onClick={() => setIsAccountDropdownOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        My Account
                      </Link>
                      <Link
                        href="/orders"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50"
                        onClick={() => setIsAccountDropdownOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Orders
                      </Link>
                      <Link
                        href="/wishlist"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50"
                        onClick={() => setIsAccountDropdownOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        Wishlist
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Help Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsHelpDropdownOpen(!isHelpDropdownOpen);
                  setIsAccountDropdownOpen(false);
                  setIsMegaMenuOpen(false);
                }}
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="hidden md:inline">Help</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isHelpDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-2">
                    <Link
                      href="/help"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsHelpDropdownOpen(false)}
                    >
                      Help Center
                    </Link>
                    <Link
                      href="/place-order"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsHelpDropdownOpen(false)}
                    >
                      Place an order
                    </Link>
                    <Link
                      href="/payment-options"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsHelpDropdownOpen(false)}
                    >
                      Payment options
                    </Link>
                    <Link
                      href="/track-order"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsHelpDropdownOpen(false)}
                    >
                      Track an order
                    </Link>
                    <Link
                      href="/cancel-order"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsHelpDropdownOpen(false)}
                    >
                      Cancel an order
                    </Link>
                    <Link
                      href="/returns-refunds"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsHelpDropdownOpen(false)}
                    >
                      Returns & Refunds
                    </Link>
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <button className="flex items-center w-full px-4 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded mx-2 transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Live Chat
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Cart with Dynamic Counter */}
            <Link
              href="/cart"
              className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors relative"
            >
              <div className="relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs min-w-5 h-5 flex items-center justify-center rounded-full px-1 font-bold animate-pulse">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </div>
              <span className="hidden md:inline">Cart</span>
              {totalItems > 0 && (
                <span className="hidden md:inline text-sm text-orange-600 font-semibold">
                  ({totalItems})
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar with Mega Menu */}
      <div className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex items-center">
            {/* All Products Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => {
                setIsMegaMenuOpen(true);
                setIsAccountDropdownOpen(false);
                setIsHelpDropdownOpen(false);
              }}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button className="flex items-center px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors border-r border-gray-200">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="font-medium">All Products</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Menu Dropdown */}
              {isMegaMenuOpen && (
                <div className="absolute top-full left-0 w-screen max-w-6xl bg-white shadow-xl border border-gray-200 z-50">
                  <div className="flex">
                    {/* Left Sidebar */}
                    <div className="w-64 bg-gray-50 border-r border-gray-200">
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-3">Browse Categories</h3>
                        <ul className="space-y-2">
                          {megaMenuCategories.map((category, index) => (
                            <li key={index}>
                              <Link
                                href={`/products/category/${category.route}`}
                                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-100 rounded transition-colors"
                                onClick={() => setIsMegaMenuOpen(false)}
                              >
                                {category.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 p-6">
                      <div className="grid grid-cols-4 gap-6">
                        {megaMenuCategories.map((category, categoryIndex) => (
                          <div key={categoryIndex}>
                            <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                              {category.title}
                            </h4>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link
                                    href={`/products/category/${category.route}?subcategory=${encodeURIComponent(item)}`}
                                    className="text-gray-600 hover:text-green-600 text-sm transition-colors"
                                    onClick={() => setIsMegaMenuOpen(false)}
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      {/* Featured Products Section */}
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-4">Featured Products</h4>
                        <div className="grid grid-cols-4 gap-4">
                          {[
                            { name: "Organic Tomatoes", price: "₦1,800/kg", image: "🍅" },
                            { name: "Fresh Corn", price: "₦800/cob", image: "🌽" },
                            { name: "Free-Range Eggs", price: "₦2,800/dozen", image: "🥚" },
                            { name: "African Spinach", price: "₦1,200/bunch", image: "🥬" }
                          ].map((product, index) => (
                            <Link
                              key={index}
                              href={`/products/${index + 1}`}
                              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                              onClick={() => setIsMegaMenuOpen(false)}
                            >
                              <span className="text-2xl mr-3">{product.image}</span>
                              <div>
                                <div className="font-medium text-sm text-gray-900">{product.name}</div>
                                <div className="text-green-600 text-sm font-semibold">{product.price}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            <div className="flex space-x-6 ml-6">
              <Link href="/our-farmers" className="py-3 text-gray-700 hover:text-green-600 transition-colors">
                Our Farmers
              </Link>
              <Link href="/about" className="py-3 text-gray-700 hover:text-green-600 transition-colors">
                About
              </Link>
              <Link href="/recipes-tips" className="py-3 text-gray-700 hover:text-green-600 transition-colors">
                Recipes & Tips
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Click outside handler */}
      {(isAccountDropdownOpen || isHelpDropdownOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsAccountDropdownOpen(false);
            setIsHelpDropdownOpen(false);
          }}
        />
      )}
    </header>
  );
}