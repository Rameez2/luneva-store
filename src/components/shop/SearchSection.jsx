"use client"

import { Search } from "lucide-react"

export default function SearchSection({ searchQuery, setSearchQuery, isVisible }) {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`text-4xl md:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          Discover Amazing Products
        </h1>
        <p
          className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          Find exactly what you're looking for with our advanced search and filtering options
        </p>

        {/* Search Bar */}
        <div
          className={`max-w-2xl mx-auto relative transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 text-lg rounded-xl border-0 focus:ring-4 focus:ring-white/20 bg-white/90 backdrop-blur-sm focus:bg-white transition-all duration-300 focus:outline-none"
          />
        </div>
      </div>
    </section>
  )
}
