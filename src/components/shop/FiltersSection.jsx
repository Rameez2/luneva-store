"use client"

import { Star } from "lucide-react"

export default function FiltersSection({
  categories,
  brands,
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
  priceRange,
  setPriceRange,
  selectedRating,
  setSelectedRating,
  showFilters,
}) {
  return (
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
                          className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
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
  )
}
