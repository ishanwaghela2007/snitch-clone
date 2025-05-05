'use client'
import { useState } from "react";
import { ShoppingBag, User, Search, Menu, X, ChevronRight, Instagram, Facebook, Twitter } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SnitchCloneLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const Router = useRouter();

  const handleSubscribe = () => {

    console.log("Subscribed:", email);
    setEmail("");
  };

  const featuredProducts = [
    {
      id: 1,
      name: "Modern Fit Oxford Shirt",
      price: "$49.99",
      category: "Shirts",
      image: "/api/placeholder/400/500"
    },
    {
      id: 2,
      name: "Slim Tapered Trousers",
      price: "$59.99",
      category: "Bottoms",
      image: "/api/placeholder/400/500"
    },
    {
      id: 3,
      name: "Essential Crew Neck Tee",
      price: "$24.99",
      category: "T-shirts",
      image: "/api/placeholder/400/500"
    },
    {
      id: 4,
      name: "Urban Bomber Jacket",
      price: "$89.99",
      category: "Outerwear",
      image: "/api/placeholder/400/500"
    }
  ];

  const collections = [
    { name: "Summer Essentials", image: "/api/placeholder/600/400" },
    { name: "Urban Streetwear", image: "/api/placeholder/600/400" },
    { name: "Business Casual", image: "/api/placeholder/600/400" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 font-bold text-xl tracking-tight">SNITCH </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-gray-600">Men</a>
              <a href="#" className="text-gray-900 hover:text-gray-600">Women</a>
              <a href="#" className="text-gray-900 hover:text-gray-600">New Arrivals</a>
              <a href="#" className="text-gray-900 hover:text-gray-600">Collections</a>
              <a href="#" className="text-gray-900 hover:text-gray-600">Sale</a>
            </nav>
            
            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 cursor-pointer" onClick={()=>{Router.push("/pages/search")}} />
              <User className="h-5 w-5 cursor-pointer" onClick={()=>{Router.push("/pages/login")}} />
              <button 
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? 
                  <X className="h-6 w-6" /> : 
                  <Menu className="h-6 w-6" />
                }
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100">Men</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100">Women</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100">New Arrivals</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100">Collections</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100">Sale</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2025-01/njbhyh.jpg" 
            alt="Hero fashion image" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Redefine Your Style
            </h1>
            <p className="text-lg sm:text-xl mb-8">
              Contemporary clothing for the modern individual. Express yourself through our curated collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="bg-white text-gray-900 px-8 py-3 rounded-sm font-medium text-center hover:bg-gray-100"
              >
                Shop Men
              </a>
              <a 
                href="#" 
                className="bg-transparent border border-white text-white px-8 py-3 rounded-sm font-medium text-center hover:bg-white hover:text-gray-900"
              >
                Shop Women
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Products</h2>
            <a href="#" className="flex items-center text-gray-900 font-medium hover:underline">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map(product => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 p-4">
                    <button className="w-full bg-white py-2 px-4 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                  <h3 className="font-medium mb-1">{product.name}</h3>
                  <p className="font-semibold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Banner */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Shop Our Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {collections.map((collection, index) => (
              <div key={index} className="relative overflow-hidden group">
                <img 
                  src={collection.image} 
                  alt={collection.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-bold mb-3">{collection.name}</h3>
                    <a 
                      href="#" 
                      className="inline-block bg-white text-gray-900 px-6 py-2 text-sm font-medium hover:bg-gray-100"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to receive updates on new arrivals, special offers, and styling tips.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              onClick={handleSubscribe}
              className="bg-white text-gray-900 px-6 py-2 font-medium hover:bg-gray-100"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Crafted with the finest materials for lasting comfort and style.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick shipping with tracking on all orders worldwide.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Multiple payment options with secure checkout process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">SNITCH CLONE</h3>
              <p className="text-gray-600 mb-4">Contemporary clothing for the modern individual.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-900">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">All Products</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">New Arrivals</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Best Sellers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Sale</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Help</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Shipping</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Returns</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Story</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Sustainability</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms & Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-sm text-gray-500 text-center">
            <p>&copy; {new Date().getFullYear()} Snitch Clone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}