"use client"

import {
  Heart,
  Search,
  ShoppingBag,
  User,
  ArrowRight,
  TrendingUp,
  Star,
  Grid3X3,
  List,
  ChevronDown,
  Menu,
  X,
  Tag,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function CategoriesPage() {
  const [cartCount, setCartCount] = useState(2)
  const [isVisible, setIsVisible] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("popular")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const mainCategories = [
    {
      id: "electronics",
      name: "Electronics",
      description: "Latest tech gadgets and devices",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop&crop=center",
      productCount: 156,
      trending: true,
      color: "from-blue-500 to-purple-600",
      icon: "📱",
    },
    {
      id: "fashion",
      name: "Fashion & Style",
      description: "Trendy clothing and accessories",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center",
      productCount: 234,
      trending: false,
      color: "from-pink-500 to-rose-600",
      icon: "👗",
    },
    {
      id: "home",
      name: "Home & Living",
      description: "Furniture and home decor",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center",
      productCount: 189,
      trending: true,
      color: "from-green-500 to-teal-600",
      icon: "🏠",
    },
    {
      id: "sports",
      name: "Sports & Fitness",
      description: "Athletic gear and equipment",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
      productCount: 98,
      trending: false,
      color: "from-orange-500 to-red-600",
      icon: "⚽",
    },
    {
      id: "beauty",
      name: "Beauty & Care",
      description: "Skincare and cosmetics",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop&crop=center",
      productCount: 145,
      trending: true,
      color: "from-purple-500 to-indigo-600",
      icon: "💄",
    },
    {
      id: "books",
      name: "Books & Media",
      description: "Literature and entertainment",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop&crop=center",
      productCount: 67,
      trending: false,
      color: "from-amber-500 to-orange-600",
      icon: "📚",
    },
  ]

  const subCategories = {
    electronics: [
      {
        name: "Smartphones",
        count: 45,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
      },
      {
        name: "Laptops",
        count: 32,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
      },
      {
        name: "Headphones",
        count: 28,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
      },
      {
        name: "Cameras",
        count: 19,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop",
      },
      {
        name: "Gaming",
        count: 24,
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=200&fit=crop",
      },
      {
        name: "Smart Home",
        count: 8,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      },
    ],
    fashion: [
      {
        name: "Men's Clothing",
        count: 78,
        image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=300&h=200&fit=crop",
      },
      {
        name: "Women's Clothing",
        count: 92,
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&h=200&fit=crop",
      },
      {
        name: "Shoes",
        count: 34,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=200&fit=crop",
      },
      {
        name: "Accessories",
        count: 21,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop",
      },
      {
        name: "Bags",
        count: 9,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop",
      },
    ],
    home: [
      {
        name: "Furniture",
        count: 56,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
      },
      {
        name: "Decor",
        count: 43,
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop",
      },
      {
        name: "Kitchen",
        count: 38,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop",
      },
      {
        name: "Lighting",
        count: 29,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      },
      {
        name: "Bedding",
        count: 23,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=200&fit=crop",
      },
    ],
    sports: [
      {
        name: "Fitness Equipment",
        count: 34,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      },
      {
        name: "Outdoor Gear",
        count: 28,
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop",
      },
      {
        name: "Team Sports",
        count: 19,
        image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=300&h=200&fit=crop",
      },
      {
        name: "Athletic Wear",
        count: 17,
        image: "https://images.unsplash.com/photo-1506629905607-d9c36e0a3f90?w=300&h=200&fit=crop",
      },
    ],
    beauty: [
      {
        name: "Skincare",
        count: 67,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop",
      },
      {
        name: "Makeup",
        count: 45,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=200&fit=crop",
      },
      {
        name: "Hair Care",
        count: 23,
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=200&fit=crop",
      },
      {
        name: "Fragrance",
        count: 10,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=200&fit=crop",
      },
    ],
    books: [
      {
        name: "Fiction",
        count: 28,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
      },
      {
        name: "Non-Fiction",
        count: 19,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      },
      {
        name: "Educational",
        count: 12,
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
      },
      {
        name: "Comics",
        count: 8,
        image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=200&fit=crop",
      },
    ],
  }

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      category: "electronics",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Designer Leather Jacket",
      price: 189,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
      category: "fashion",
      rating: 4.6,
      reviews: 89,
      badge: "Trending",
    },
    {
      id: 3,
      name: "Modern Table Lamp",
      price: 79,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      category: "home",
      rating: 4.7,
      reviews: 156,
      badge: "New",
    },
    {
      id: 4,
      name: "Yoga Mat Pro",
      price: 49,
      originalPrice: 69,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      category: "sports",
      rating: 4.5,
      reviews: 203,
      badge: "Sale",
    },
  ]

  const filteredCategories =
    selectedCategory === "all" ? mainCategories : mainCategories.filter((cat) => cat.id === selectedCategory)

  const sortedCategories = [...filteredCategories].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)
      case "products":
        return b.productCount - a.productCount
      case "trending":
        return b.trending - a.trending
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900">Categories</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent animate-pulse"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-300/20 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-orange-300/20 rounded-full animate-float-fast"></div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center relative">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Tag className="h-4 w-4 text-yellow-300" />
              <span className="text-white text-sm font-medium">Shop by Category</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Explore Our Categories
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Discover thousands of products organized into carefully curated categories for easy shopping
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/products"
                className="bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-2xl hover:shadow-yellow-300/50 transition-all duration-300 hover:scale-110 rounded-lg flex items-center"
              >
                <ShoppingBag className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Browse All Products
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-110 rounded-lg">
                View Trending
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 sm:py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", name: "All Categories" },
                { id: "electronics", name: "Electronics" },
                { id: "fashion", name: "Fashion" },
                { id: "home", name: "Home" },
                { id: "sports", name: "Sports" },
                { id: "beauty", name: "Beauty" },
                { id: "books", name: "Books" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedCategory(filter.id)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedCategory === filter.id
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* View Mode */}
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

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="popular">Most Popular</option>
                  <option value="name">Name A-Z</option>
                  <option value="products">Most Products</option>
                  <option value="trending">Trending</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {selectedCategory === "all"
                ? "All Categories"
                : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Category`}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              {selectedCategory === "all"
                ? "Browse through our complete collection of product categories"
                : `Explore our ${selectedCategory} collection with various subcategories`}
            </p>
          </div>

          {/* Categories Grid */}
          <div
            className={`grid gap-6 sm:gap-8 ${
              viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
            }`}
          >
            {sortedCategories.map((category, index) => (
              <div
                key={category.id}
                className={`group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                } ${viewMode === "list" ? "flex" : ""}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
                  {/* Category Image */}
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={600}
                    height={400}
                    className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                      viewMode === "list" ? "w-full h-48" : "w-full h-48 sm:h-56 lg:h-64"
                    }`}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {category.trending && (
                      <span className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center animate-pulse">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </span>
                    )}
                    <span className="bg-white/90 text-gray-900 text-xs font-medium px-2 py-1 rounded-full">
                      {category.productCount} Products
                    </span>
                  </div>

                  {/* Category Icon */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center text-white text-xl shadow-lg`}
                    >
                      {category.icon}
                    </div>
                  </div>

                  {/* Category Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg sm:text-xl font-bold mb-1">{category.name}</h3>
                    <p className="text-sm opacity-90 mb-2">{category.description}</p>
                  </div>
                </div>

                {/* Category Details */}
                <div className={`p-4 sm:p-6 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
                  {viewMode === "list" && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center">
                          <ShoppingBag className="h-4 w-4 mr-1" />
                          {category.productCount} Products
                        </span>
                        {category.trending && (
                          <span className="flex items-center text-orange-600">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            Trending
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Subcategories Preview */}
                  {subCategories[category.id] && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Popular in {category.name}:</h4>
                      <div className="flex flex-wrap gap-1">
                        {subCategories[category.id].slice(0, 3).map((sub, subIndex) => (
                          <span
                            key={subIndex}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full hover:bg-purple-100 hover:text-purple-600 transition-colors cursor-pointer"
                          >
                            {sub.name}
                          </span>
                        ))}
                        {subCategories[category.id].length > 3 && (
                          <span className="text-xs text-gray-500">+{subCategories[category.id].length - 3} more</span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <Link
                    href={`/products?category=${category.id}`}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group text-sm sm:text-base"
                  >
                    <span>Explore {category.name}</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subcategories Section */}
      {selectedCategory !== "all" && subCategories[selectedCategory] && (
        <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Subcategories
              </h3>
              <p className="text-base sm:text-lg text-gray-600">
                Dive deeper into specific areas of {selectedCategory}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
              {subCategories[selectedCategory].map((sub, index) => (
                <Link
                  key={index}
                  href={`/products?category=${selectedCategory}&subcategory=${sub.name.toLowerCase()}`}
                  className={`group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={sub.image || "/placeholder.svg"}
                      alt={sub.name}
                      width={300}
                      height={200}
                      className="w-full h-24 sm:h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="text-white text-xs font-medium">{sub.count} items</span>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-purple-600 transition-colors">
                      {sub.name}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Products */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Featured Products</h3>
            <p className="text-base sm:text-lg text-gray-600">Handpicked products from our most popular categories</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badge */}
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-orange-400 to-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {product.badge}
                  </span>

                  {/* Wishlist */}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-4 sm:p-6">
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors text-sm sm:text-base">
                    {product.name}
                  </h4>

                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 sm:h-4 sm:w-4 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-xs sm:text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-base sm:text-lg font-bold text-purple-600">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs sm:text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
