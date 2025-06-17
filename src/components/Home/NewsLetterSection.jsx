import { Sparkles } from "lucide-react"

const NewsLetterSection = () => {
    return (
      <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent animate-pulse"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-yellow-300 animate-spin" />
            <span className="text-white text-sm font-medium">Exclusive Offers</span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-white/90 mb-8">Get notified about new products, exclusive offers, and style tips</p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/90 backdrop-blur-sm border-0 focus:bg-white transition-all duration-300 px-4 py-2 rounded-lg focus:outline-none"
            />
            <button className="bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-6 py-2 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    );
}

export default NewsLetterSection;
