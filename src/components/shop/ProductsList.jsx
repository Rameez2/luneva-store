"use client"

import { Heart, Search, ShoppingBag, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProductsList({ products, viewMode, clearFilters }) {
  if (products.length === 0) {
    return (
      <div className="flex-1">
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
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
        {products.map((product, index) => (
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
