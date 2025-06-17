"use client"

import {
  Heart,
  Search,
  ShoppingBag,
  Star,
  User,
  ArrowLeft,
  Plus,
  Minus,
  Share2,
  Shield,
  Truck,
  RotateCcw,
  Check,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("M")
  const [selectedColor, setSelectedColor] = useState("Black")
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [cartCount, setCartCount] = useState(2)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const product = {
    id: 1,
    name: "Premium Minimalist Watch",
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.8,
    reviews: 124,
    inStock: true,
    description:
      "Crafted with precision and designed for the modern lifestyle, this minimalist watch combines elegance with functionality. Features a premium stainless steel case, sapphire crystal glass, and Swiss movement for unparalleled accuracy.",
    features: [
      "Swiss Quartz Movement",
      "Sapphire Crystal Glass",
      "Water Resistant 50M",
      "Premium Leather Strap",
      "2 Year Warranty",
    ],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&h=600&fit=crop&crop=center",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown", "Navy", "Silver"],
  }

  const relatedProducts = [
    {
      id: 2,
      name: "Leather Wallet",
      price: 89,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&crop=center",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Canvas Backpack",
      price: 129,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&crop=center",
      rating: 4.6,
    },
    {
      id: 4,
      name: "Wireless Earbuds",
      price: 199,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop&crop=center",
      rating: 4.7,
    },
  ]

  const addToCart = () => {
    setCartCount((prev) => prev + 1)
  }

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">


      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-purple-600 transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-gray-900">Watches</span>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 group">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {product.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full animate-bounce">
                    -{product.discount}% OFF
                  </div>
                )}

                <button
                  onClick={toggleWishlist}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    isWishlisted ? "bg-red-500 text-white" : "bg-white/80 text-gray-600 hover:text-red-500"
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? "border-purple-500 scale-105"
                        : "border-gray-200 hover:border-purple-300"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="space-y-6">
              {/* Title and Rating */}
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {product.inStock && (
                    <div className="flex items-center text-green-600">
                      <Check className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">In Stock</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.discount && (
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-medium">
                    Save ${product.originalPrice - product.price}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              {/* Color Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                        selectedColor === color
                          ? "border-purple-500 bg-purple-50 text-purple-700"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
                <div className="flex space-x-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg border-2 transition-all duration-300 font-medium ${
                        selectedSize === size
                          ? "border-purple-500 bg-purple-500 text-white"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={addToCart}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                >
                  <ShoppingBag className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Add to Cart - ${product.price * quantity}
                </button>

                <div className="flex space-x-4">
                  <button className="flex-1 border-2 border-purple-500 text-purple-600 hover:bg-purple-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                    Buy Now
                  </button>
                  <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <Truck className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">Free Shipping</p>
                  <p className="text-xs text-gray-600">On orders over $100</p>
                </div>

                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <RotateCcw className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">30-Day Returns</p>
                  <p className="text-xs text-gray-600">Hassle-free returns</p>
                </div>

                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">2-Year Warranty</p>
                  <p className="text-xs text-gray-600">Full coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">You Might Also Like</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct, index) => (
              <div
                key={relatedProduct.id}
                className={`group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white overflow-hidden rounded-lg animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <button className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-all duration-300 hover:scale-110 shadow-lg p-2 rounded-md">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {relatedProduct.name}
                  </h3>

                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(relatedProduct.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">{relatedProduct.rating}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      ${relatedProduct.price}
                    </span>
                    <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
