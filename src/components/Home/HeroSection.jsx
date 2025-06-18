import Link from "next/link";
import { Heart, Search, ShoppingBag, Star, User, Sparkles, TrendingUp, Zap } from "lucide-react"
import { useEffect, useState } from "react";


const HeroSection = () => {

 const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

    return (
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent animate-pulse"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300/20 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-300/20 rounded-full animate-float-fast"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div
              className={`inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Sparkles className="h-4 w-4 text-yellow-300 animate-spin" />
              <span className="text-white text-sm font-medium">Limited Time Offers</span>
            </div>

            <h1
              className={`text-4xl md:text-6xl font-bold text-white mb-6 transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <span className="inline-block animate-slide-in-left">Curated</span>{" "}
              <span className="inline-block animate-slide-in-right">for</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-pulse inline-block animate-slide-in-up">
                You
              </span>
            </h1>

            <p
              className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              Discover our handpicked collection of premium products designed for the modern lifestyle
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <button className="bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-700 px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-yellow-300/50 transition-all duration-300 hover:scale-110 group animate-pulse-slow rounded-lg flex items-center cursor-pointer">
                <Zap className="mr-2 h-5 w-5 group-hover:animate-spin" />
                Shop Collection
              </button>

              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-110 animate-glow rounded-lg cursor-pointer">
                View Deals
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default HeroSection;
