"use client"

import {
  Heart,
  Search,
  ShoppingBag,
  User,
  ArrowLeft,
  Plus,
  Minus,
  X,
  Gift,
  Tag,
  Truck,
  Shield,
  Check,
  Star,
  ShoppingCart,
  Trash2,
  RefreshCw,
  Lock,
  CreditCard,
  ChevronRight,
  Menu,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function CartPage() {
  const [cartCount, setCartCount] = useState(3)
  const [isVisible, setIsVisible] = useState(false)
  const [promoCode, setPromoCode] = useState("")
  const [promoApplied, setPromoApplied] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Minimalist Watch",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
      quantity: 1,
      color: "Black",
      size: "M",
      inStock: true,
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Wireless Pro Earbuds",
      price: 199,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&crop=center",
      quantity: 2,
      color: "White",
      inStock: true,
      rating: 4.7,
      reviews: 203,
    },
    {
      id: 3,
      name: "Leather Executive Wallet",
      price: 89,
      originalPrice: 120,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
      quantity: 1,
      color: "Brown",
      inStock: false,
      rating: 4.9,
      reviews: 89,
    },
  ])

  const relatedProducts = [
    {
      id: 4,
      name: "Canvas Adventure Backpack",
      price: 129,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&crop=center",
      rating: 4.6,
      reviews: 156,
    },
    {
      id: 5,
      name: "Smart Fitness Tracker",
      price: 159,
      originalPrice: 199,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=300&h=300&fit=crop&crop=center",
      rating: 4.5,
      reviews: 98,
    },
    {
      id: 6,
      name: "Designer Sunglasses",
      price: 179,
      originalPrice: 220,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop&crop=center",
      rating: 4.4,
      reviews: 67,
    },
    {
      id: 7,
      name: "Mechanical Gaming Keyboard",
      price: 149,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop&crop=center",
      rating: 4.7,
      reviews: 134,
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = promoApplied ? 50 : 0
  const shipping = subtotal > 100 ? 0 : 15
  const tax = Math.round((subtotal - discount) * 0.08 * 100) / 100
  const total = subtotal - discount + shipping + tax

  const updateQuantity = async (id, newQuantity) => {
    if (newQuantity < 1) return

    setIsUpdating(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    setIsUpdating(false)
  }

  const removeItem = async (id) => {
    setIsUpdating(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 300))

    setCartItems((prev) => prev.filter((item) => item.id !== id))
    setCartCount((prev) => prev - 1)
    setIsUpdating(false)
  }

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save50") {
      setPromoApplied(true)
    }
  }

  const addToCart = () => {
    setCartCount((prev) => prev + 1)
  }

  const clearCart = () => {
    setCartItems([])
    setCartCount(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Breadcrumb - Responsive */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 overflow-x-auto">
          <Link href="/" className="hover:text-purple-600 transition-colors whitespace-nowrap">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900 whitespace-nowrap">Shopping Cart</span>
        </div>
      </div>

      {/* Back Button - Responsive */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 mb-4 sm:mb-6">
        <Link
          href="/products"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors group text-sm sm:text-base"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Continue Shopping
        </Link>
      </div>

      {/* Main Content - Fully Responsive */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 pb-8 sm:pb-16">
        {cartItems.length === 0 ? (
          /* Empty Cart State - Responsive */
          <div
            className={`text-center py-12 sm:py-16 px-4 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <ShoppingCart className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base">
              Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
            </p>
            <Link
              href="/products"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              <ShoppingBag className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Left Column - Cart Items - Responsive */}
            <div className="xl:col-span-2 space-y-4 sm:space-y-6">
              {/* Cart Header - Responsive */}
              <div
                className={`bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 transform transition-all duration-1000 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
              >
                <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center justify-between mb-4 sm:mb-6">
                  <div>
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                      Shopping Cart
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <button
                      onClick={clearCart}
                      className="flex items-center text-red-600 hover:text-red-700 transition-colors text-xs sm:text-sm"
                    >
                      <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      Clear Cart
                    </button>

                    <button
                      onClick={() => window.location.reload()}
                      className="flex items-center text-purple-600 hover:text-purple-700 transition-colors text-xs sm:text-sm"
                    >
                      <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      Refresh
                    </button>
                  </div>
                </div>

                {/* Free Shipping Progress - Responsive */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">
                      {subtotal >= 100 ? (
                        <span className="text-green-600 flex items-center">
                          <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          You qualify for free shipping!
                        </span>
                      ) : (
                        <span className="block sm:inline">
                          Add ${(100 - subtotal).toFixed(2)} more for free shipping
                        </span>
                      )}
                    </span>
                    <Truck className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 flex-shrink-0" />
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-1.5 sm:h-2 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((subtotal / 100) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Cart Items - Fully Responsive */}
              <div className="space-y-3 sm:space-y-4">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 transform transition-all duration-1000 ${
                      isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                    } ${!item.inStock ? "opacity-75" : ""}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      {/* Product Image - Responsive */}
                      <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={120}
                          height={120}
                          className="rounded-lg sm:rounded-xl object-cover w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
                        />

                        {!item.inStock && (
                          <div className="absolute inset-0 bg-black/50 rounded-lg sm:rounded-xl flex items-center justify-center">
                            <span className="bg-white text-gray-900 px-2 py-1 rounded-full text-xs font-medium">
                              Out of Stock
                            </span>
                          </div>
                        )}

                        {item.originalPrice && (
                          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
                            {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                          </div>
                        )}
                      </div>

                      {/* Product Details - Responsive */}
                      <div className="flex-1 space-y-2 sm:space-y-3 text-center sm:text-left">
                        <div>
                          <Link href="/product">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 hover:text-purple-600 transition-colors line-clamp-2">
                              {item.name}
                            </h3>
                          </Link>

                          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">
                            <span>Color: {item.color}</span>
                            {item.size && <span>Size: {item.size}</span>}
                            {item.inStock ? (
                              <span className="text-green-600 flex items-center">
                                <Check className="h-3 w-3 mr-1" />
                                In Stock
                              </span>
                            ) : (
                              <span className="text-red-600">Out of Stock</span>
                            )}
                          </div>

                          {/* Rating - Responsive */}
                          <div className="flex items-center justify-center sm:justify-start mt-1 sm:mt-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 sm:h-4 sm:w-4 ${
                                    i < Math.floor(item.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                              <span className="text-xs sm:text-sm text-gray-600 ml-1 sm:ml-2">
                                {item.rating} ({item.reviews})
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Price and Controls - Responsive */}
                        <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                          <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                              ${item.price}
                            </span>
                            {item.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                            )}
                            {item.originalPrice && (
                              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">
                                Save ${item.originalPrice - item.price}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
                            {/* Quantity Controls - Mobile Optimized */}
                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1 || isUpdating}
                                className="p-2 sm:p-2 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                              >
                                <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                              </button>
                              <span className="px-3 sm:px-4 py-2 font-medium min-w-[2.5rem] sm:min-w-[3rem] text-center text-sm sm:text-base">
                                {isUpdating ? (
                                  <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4 animate-spin mx-auto" />
                                ) : (
                                  item.quantity
                                )}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                disabled={isUpdating || !item.inStock}
                                className="p-2 sm:p-2 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                              >
                                <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                              </button>
                            </div>

                            {/* Remove Button - Touch Optimized */}
                            <button
                              onClick={() => removeItem(item.id)}
                              disabled={isUpdating}
                              className="p-2 sm:p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                            >
                              <X className="h-4 w-4 sm:h-5 sm:w-5" />
                            </button>
                          </div>
                        </div>

                        {/* Item Total - Responsive */}
                        <div className="text-center sm:text-right pt-2 border-t border-gray-100 sm:border-t-0 sm:pt-0">
                          <span className="text-base sm:text-lg font-bold text-purple-600">
                            Subtotal: ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Order Summary - Responsive */}
            <div className="xl:col-span-1 order-first xl:order-last">
              <div
                className={`bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 xl:sticky xl:top-24 transform transition-all duration-1000 delay-300 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Order Summary</h3>

                {/* Promo Code - Responsive */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Tag className="h-4 w-4 inline mr-1" />
                    Promo Code
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="bg-purple-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors flex items-center touch-manipulation"
                    >
                      <span className="hidden sm:inline">Apply</span>
                      <span className="sm:hidden">+</span>
                    </button>
                  </div>
                  {promoApplied && (
                    <div className="mt-2 text-sm text-green-600 flex items-center">
                      <Check className="h-4 w-4 mr-1" />
                      Promo code "SAVE50" applied!
                    </div>
                  )}
                </div>

                {/* Price Breakdown - Responsive */}
                <div className="space-y-2 sm:space-y-3 border-t border-gray-200 pt-4 mb-4 sm:mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Estimated Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base sm:text-lg font-bold text-purple-600 border-t border-gray-200 pt-3">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button - Touch Optimized */}
                <Link
                  href="/checkout"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group mb-4 text-sm sm:text-base touch-manipulation"
                >
                  <Lock className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" />
                  Secure Checkout
                  <ChevronRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Payment Methods - Responsive */}
                <div className="text-center mb-4 sm:mb-6">
                  <p className="text-xs text-gray-600 mb-2 sm:mb-3">We accept</p>
                  <div className="flex justify-center space-x-2 sm:space-x-3">
                    {[CreditCard, Shield, Lock].map((Icon, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded flex items-center justify-center"
                      >
                        <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security Features - Responsive */}
                <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-2">
                    <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-green-600 flex-shrink-0" />
                    <span>Secure SSL Encryption</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-2">
                    <Truck className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-blue-600 flex-shrink-0" />
                    <span>Free shipping on orders over $100</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <Gift className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-purple-600 flex-shrink-0" />
                    <span>30-day return policy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Related Products - Fully Responsive */}
        {cartItems.length > 0 && (
          <div className="mt-12 sm:mt-16">
            <div
              className={`text-center mb-6 sm:mb-8 transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">You might also like</h2>
              <p className="text-gray-600 text-sm sm:text-base">Complete your purchase with these popular items</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {relatedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 bg-white overflow-hidden rounded-lg sm:rounded-xl animate-fade-in-up`}
                  style={{ animationDelay: `${(index + 3) * 150}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <button className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-all duration-300 hover:scale-110 shadow-lg p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100">
                      <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </div>

                  <div className="p-3 sm:p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors text-sm sm:text-base line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center mb-2 sm:mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 sm:h-4 sm:w-4 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-xs sm:text-sm text-gray-600 ml-1 sm:ml-2">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <span className="text-sm sm:text-lg font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs sm:text-sm text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={addToCart}
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 px-3 sm:px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group flex items-center justify-center text-xs sm:text-sm touch-manipulation"
                    >
                      <ShoppingBag className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:animate-bounce" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .touch-manipulation {
          touch-action: manipulation;
        }
      `}</style>
    </div>
  )
}
