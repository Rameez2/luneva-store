"use client"

import { Grid3X3, List, ChevronDown, X, SlidersHorizontal } from "lucide-react"
import { useState, useEffect } from "react"
import SearchSection from "@/components/shop/SearchSection"
import FiltersSection from "@/components/shop/FiltersSection"
import ProductsList from "@/components/shop/ProductsList"

export default function ProductListing() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedBrand, setSelectedBrand] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedRating, setSelectedRating] = useState(0)
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [allProducts, setAllProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch("/data/products.json")

        if (!res.ok) {
          throw new Error(`Failed to fetch products: ${res.status}`)
        }

        const data = await res.json()
        console.log("Fetched products:", data)

        setAllProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Extract unique categories and brands from fetched products
  const categories = ["All", ...new Set(allProducts.map((product) => product.category))]
  const brands = ["All", ...new Set(allProducts.map((product) => product.brand))]

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

  const clearFilters = () => {
    setSelectedCategory("All")
    setSelectedBrand("All")
    setPriceRange([0, 1000])
    setSelectedRating(0)
    setSearchQuery("")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading products...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 mb-4">
            <X className="h-16 w-16 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Products</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Search Section */}
      <SearchSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} isVisible={isVisible} />

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
          {/* Product Filters */}
          <FiltersSection
            categories={categories}
            brands={brands}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            showFilters={showFilters}
          />

          {/* Products List */}
          <ProductsList products={sortedProducts} viewMode={viewMode} clearFilters={clearFilters} />
        </div>
      </div>
    </div>
  )
}
