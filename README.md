Farm Produce E-Commerce

A modern Next.js + TypeScript e-commerce platform built for selling farm produce online.
This project demonstrates a headless commerce architecture, featuring product browsing, cart management, checkout flow, and a responsive UI with Tailwind CSS.

🚀 Features

Next.js 14 (App Router) – optimized for SEO, SSR, and fast rendering.

Product Browsing – clean catalog with categories and responsive grids.

Shopping Cart – add/remove products, update quantities, calculate totals.

Checkout Flow – secure order placement (integrated with backend API).

Authentication – basic login/register functionality.

API Integration – backend powered by Node.js/Express (or PHP service in this repo).

Responsive UI – styled with Tailwind CSS for mobile-first layouts.

Scalable Architecture – ready to extend with Stripe, GraphQL, or headless CMS.

🛠️ Tech Stack

Frontend: Next.js
 + TypeScript
 + Tailwind CSS

Backend: Node.js / PHP (API for products & checkout)

Database: MySQL

Version Control: GitHub (monorepo style with frontend + backend)

Deployment: Vercel
 (frontend), Azure/AWS/Node server (backend)

📸 Screenshots

(Add screenshots here of home page, product listing, cart, and checkout — will make your repo shine for Upwork clients!)

📦 Getting Started

Clone the repo:

git clone https://github.com/obedav/Farm-Produce-E-commerce.git
cd Farm-Produce-E-commerce


Install dependencies:

npm install


Run development server:

npm run dev


Open http://localhost:3000
 in your browser.

📂 Project Structure
/src
  /app          # Next.js App Router pages
  /components   # Reusable UI components (Navbar, ProductCard, Cart)
  /lib          # API utilities & helpers
  /styles       # Tailwind configs & global styles

/ecommerce-backend
  /api          # Backend APIs for products & checkout

🎯 Roadmap

 Integrate Stripe for secure payments

 Add GraphQL layer for product queries (Shopify-like structure)

 Implement wishlist & order history

 Deploy full-stack on Azure

👤 Author

David Makinde-George



📄 License

This project is licensed under the MIT License – feel free to use and adapt.
