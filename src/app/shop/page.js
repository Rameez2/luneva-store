"use client"

import { Heart, Search, ShoppingBag, Star, User, Grid3X3, List, ChevronDown, X, SlidersHorizontal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ProductListing() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedBrand, setSelectedBrand] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedRating, setSelectedRating] = useState(0)
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [cartCount, setCartCount] = useState(2)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

const allProducts = [
    {
      id: 1,
      name: "Premium Minimalist Watch",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
      rating: 4.8,
      reviews: 124,
      category: "Watches",
      brand: "TimeCraft",
      badge: "🔥 Hot",
      discount: 25,
      inStock: true,
    },
    {
      id: 2,
      name: "Leather Executive Wallet",
      price: 89,
      originalPrice: 120,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
      rating: 4.9,
      reviews: 89,
      category: "Accessories",
      brand: "LeatherLux",
      badge: "✨ New",
      discount: 26,
      inStock: true,
    },
    {
      id: 3,
      name: "Wireless Pro Earbuds",
      price: 199,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&crop=center",
      rating: 4.7,
      reviews: 203,
      category: "Electronics",
      brand: "SoundWave",
      discount: 20,
      inStock: true,
    },
    {
      id: 4,
      name: "Canvas Adventure Backpack",
      price: 129,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
      rating: 4.6,
      reviews: 156,
      category: "Bags",
      brand: "OutdoorGear",
      badge: "⚡ Limited",
      inStock: true,
    },
    {
      id: 5,
      name: "Smart Fitness Tracker",
      price: 159,
      originalPrice: 199,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop&crop=center",
      rating: 4.5,
      reviews: 98,
      category: "Electronics",
      brand: "FitTech",
      discount: 20,
      inStock: false,
    },
    {
      id: 6,
      name: "Designer Sunglasses",
      price: 179,
      originalPrice: 220,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center",
      rating: 4.4,
      reviews: 67,
      category: "Accessories",
      brand: "StyleVision",
      discount: 19,
      inStock: true,
    },
    {
      id: 7,
      name: "Mechanical Keyboard", 
      price: 149,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop&crop=center",
      rating: 4.7,
      reviews: 134,
      category: "Electronics",
      brand: "TechKeys",
      inStock: true,
    },
    {
      id: 8,
      name: "Luxury Pen Set",
      price: 79,
      originalPrice: 99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop&crop=center",
      rating: 4.3,
      reviews: 45,
      category: "Accessories",
      brand: "WriteWell",
      discount: 20,
      inStock: true,
    },
  ]
  const categories = ["All", "Watches", "Electronics", "Accessories", "Bags"]
  const brands = [
    "All",
    "TimeCraft",
    "LeatherLux",
    "SoundWave",
    "OutdoorGear",
    "FitTech",
    "StyleVision",
    "TechKeys",
    "WriteWell",
  ]

  // Filter products based on search and filters
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesBrand = selectedBrand === "All" || product.brand === selectedBrand
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesRating = selectedRating === 0 || product.rating >= selectedRating

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesRating
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id - a.id
      default:
        return 0
    }
  })

  const addToCart = () => {
    setCartCount((prev) => prev + 1)
  }

  const clearFilters = () => {
    setSelectedCategory("All")
    setSelectedBrand("All")
    setPriceRange([0, 1000])
    setSelectedRating(0)
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Hero Section */}
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

      {/* Filters and Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filters</span>
            </button>

            <div className="text-gray-600">
              <span className="font-medium">{sortedProducts.length}</span> products found
            </div>

            {(selectedCategory !== "All" || selectedBrand !== "All" || selectedRating > 0 || searchQuery) && (
              <button
                onClick={clearFilters}
                className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 transition-colors"
              >
                <X className="h-4 w-4" />
                <span>Clear Filters</span>
              </button>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "grid" ? "bg-white shadow-sm text-purple-600" : "text-gray-600 hover:text-purple-600"
                }`}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "list" ? "bg-white shadow-sm text-purple-600" : "text-gray-600 hover:text-purple-600"
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-64 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Brand</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="brand"
                        value={brand}
                        checked={selectedBrand === brand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                        className="text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                    className="w-full accent-purple-600"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Minimum Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1, 0].map((rating) => (
                    <label key={rating} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        checked={selectedRating === rating}
                        onChange={(e) => setSelectedRating(Number.parseInt(e.target.value))}
                        className="text-purple-600 focus:ring-purple-500"
                      />
                      <div className="ml-2 flex items-center">
                        {rating === 0 ? (
                          <span className="text-gray-700">All Ratings</span>
                        ) : (
                          <>
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                            <span className="ml-1 text-gray-700">& up</span>
                          </>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          <div className="flex-1">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
                <button
                  onClick={clearFilters}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div
                className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}
              >
                {sortedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden rounded-lg animate-fade-in-up ${
                      viewMode === "list" ? "flex" : ""
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
                      {product.badge && (
                        <span className="absolute top-3 left-3 z-20 bg-gradient-to-r from-orange-400 to-yellow-500 text-white animate-pulse border-0 shadow-lg px-2 py-1 rounded-full text-xs font-medium">
                          {product.badge}
                        </span>
                      )}

                      {product.discount && (
                        <div className="absolute top-3 right-12 z-20 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                          -{product.discount}%
                        </div>
                      )}

                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
                          <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                            Out of Stock
                          </span>
                        </div>
                      )}

                      <button className="absolute top-3 right-3 z-20 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-all duration-300 hover:scale-110 shadow-lg p-2 rounded-md">
                        <Heart className="h-4 w-4" />
                      </button>

                      <Link href={`/products/${product.id}`}>
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={400}
                          height={400}
                          className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                            viewMode === "list" ? "w-full h-48" : "w-full h-64"
                          }`}
                        />
                      </Link>
                    </div>

                    <div className={`p-4 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
                      <div>
                        <Link href="/product">
                          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                            {product.name}
                          </h3>
                        </Link>

                        <div className="flex items-center mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                } transition-colors duration-300`}
                              />
                            ))}
                            <span className="text-sm text-gray-600 ml-2">
                              {product.rating} ({product.reviews})
                            </span>
                          </div>
                        </div>

                        <div className="text-sm text-gray-500 mb-2">
                          {product.brand} • {product.category}
                        </div>
                      </div>

                      <div className={`${viewMode === "list" ? "flex items-center justify-between" : ""}`}>
                        <div className={`flex items-center space-x-2 ${viewMode === "list" ? "" : "mb-4"}`}>
                          <span className="text-lg font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                            ${product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                          )}
                        </div>

                        <button
                          onClick={addToCart}
                          disabled={!product.inStock}
                          className={`bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed ${
                            viewMode === "list" ? "ml-4" : "w-full"
                          }`}
                        >
                          <ShoppingBag className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                          {product.inStock ? "Add to Cart" : "Out of Stock"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
