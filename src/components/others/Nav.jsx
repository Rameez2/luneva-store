"use client"
import Link from "next/link";
import { Heart, Search, ShoppingBag, User } from "lucide-react"
import { useState } from "react";


const Nav = () => {

  const [cartCount, setCartCount] = useState(2)


  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gradient-to-r from-purple-200 to-blue-200 shadow-lg shadow-purple-100/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            ✨ Store
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/shop"
              className="text-gray-700 hover:text-purple-600 transition-all duration-300 hover:scale-110 font-medium relative group"
            >
              Shop
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/categories"
              className="text-gray-700 hover:text-purple-600 transition-all duration-300 hover:scale-110 font-medium relative group"
            >
              Categories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-purple-600 transition-all duration-300 hover:scale-110 font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-700 hover:text-purple-600 transition-all duration-300 hover:scale-110 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:block relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-4 w-4 group-focus-within:text-purple-600 transition-colors" />
              <input
                type="search"
                placeholder="Search products..."
                className="pl-10 w-64 border border-purple-200 focus:border-purple-400 focus:ring-purple-200 bg-white/80 backdrop-blur-sm rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2"
              />
            </div>

            {[User, Heart].map((Icon, index) => (
              <button
                key={index}
                className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:scale-110 rounded-md"
              >
                <Icon className="h-5 w-5" />
              </button>
            ))}

            <Link href="/cart">
              <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:scale-110 relative group rounded-md cursor-pointer">
                <ShoppingBag className="h-5 w-5" />
                <span
                  className={`absolute -top-2 -right-2 h-5 w-5 rounded-full flex items-center justify-center text-xs bg-gradient-to-r from-orange-400 to-yellow-500 text-white animate-pulse ${cartCount > 0 ? "animate-bounce" : ""}`}
                >
                  {cartCount}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
