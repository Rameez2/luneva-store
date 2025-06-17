import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Star } from "lucide-react"


const FeaturedSection = () => {

  const featuredProducts = [
    {
      id: 1,
      name: "Minimalist Watch",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
      rating: 4.8,
      reviews: 124,
      badge: "🔥 Hot",
      discount: 25,
      color: "from-orange-400 to-yellow-500",
    },
    {
      id: 2,
      name: "Leather Wallet",
      price: 89,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
      rating: 4.9,
      reviews: 89,
      badge: "✨ New",
      color: "from-purple-400 to-indigo-500",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: 199,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&crop=center",
      rating: 4.7,
      reviews: 203,
      discount: 20,
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: 4,
      name: "Canvas Backpack",
      price: 129,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
      rating: 4.6,
      reviews: 156,
      badge: "⚡ Limited",
      color: "from-green-400 to-emerald-500",
    },
  ]


    const addToCart = () => {
        setCartCount((prev) => prev + 1)
    }

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-yellow-500 text-white rounded-full px-4 py-2 mb-4 animate-pulse">
                        <span className="text-sm font-medium">🔥 Trending Now</span>
                    </div>

                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Featured Products
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our most loved items, carefully selected for their quality and design
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className={`group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white overflow-hidden rounded-lg animate-fade-in-up`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="p-0">
                                <div className="relative overflow-hidden">
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

                                    <button className="absolute top-3 right-3 z-20 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-all duration-300 hover:scale-110 shadow-lg p-2 rounded-md">
                                        <Heart className="h-4 w-4" />
                                    </button>

                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10`}
                                    ></div>

                                    <Image
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        width={400}
                                        height={400}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                                        {product.name}
                                    </h3>

                                    <div className="flex items-center mb-3">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} transition-colors duration-300`}
                                                />
                                            ))}
                                            <span className="text-sm text-gray-600 ml-2">
                                                {product.rating} ({product.reviews})
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-lg font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                                ${product.price}
                                            </span>
                                            {product.originalPrice && (
                                                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        onClick={addToCart}
                                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group flex items-center justify-center"
                                    >
                                        <ShoppingBag className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedSection;
