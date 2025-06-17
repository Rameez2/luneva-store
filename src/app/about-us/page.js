"use client"

import {
  Heart,
  Search,
  ShoppingBag,
  User,
  Users,
  Target,
  Truck,
  Shield,
  Star,
  Quote,
  CheckCircle,
  Zap,
  Leaf,
  Clock,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function AboutPage() {
  const [cartCount, setCartCount] = useState(2)
  const [isVisible, setIsVisible] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: "50K+", label: "Happy Customers", icon: Users },
    { number: "10K+", label: "Products Sold", icon: ShoppingBag },
    { number: "99%", label: "Customer Satisfaction", icon: Star },
    { number: "24/7", label: "Customer Support", icon: Clock },
  ]

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We carefully curate every product to ensure the highest quality standards for our customers.",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and sustainable sourcing for a better tomorrow.",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly evolving and embracing new technologies to enhance your shopping experience.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Heart,
      title: "Customer Love",
      description: "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
      color: "from-pink-500 to-rose-600",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Passionate about creating exceptional shopping experiences with over 10 years in e-commerce.",
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Award-winning designer focused on creating beautiful and functional user experiences.",
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Success",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Dedicated to ensuring every customer has an amazing experience with our products and service.",
    },
    {
      name: "David Kim",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Expert in product curation and market trends, bringing you the latest and greatest items.",
    },
  ]

  const testimonials = [
    {
      name: "Jessica Williams",
      role: "Verified Customer",
      content: "Amazing quality products and exceptional customer service. I've been shopping here for over 2 years!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Robert Thompson",
      role: "Verified Customer",
      content: "Fast shipping, great prices, and the products always exceed my expectations. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Maria Garcia",
      role: "Verified Customer",
      content: "The attention to detail and quality is outstanding. This is my go-to store for premium products.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900">About Us</span>
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
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">About Our Story</h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Discover the passion and dedication behind our curated collection of premium products designed for modern
              living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/products"
                className="bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-2xl hover:shadow-yellow-300/50 transition-all duration-300 hover:scale-110 rounded-lg flex items-center"
              >
                <ShoppingBag className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Shop Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-110 rounded-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Founded in 2020 with a simple mission: to bring you the finest curated products that enhance your
                everyday life. What started as a small passion project has grown into a trusted destination for quality
                and style.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                We believe that great products should be accessible to everyone. That's why we work directly with
                manufacturers and artisans to bring you exceptional quality at fair prices, while maintaining our
                commitment to sustainability and ethical practices.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: CheckCircle, text: "Quality Guaranteed" },
                  { icon: Truck, text: "Fast Shipping" },
                  { icon: Shield, text: "Secure Shopping" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center text-sm sm:text-base text-gray-700">
                    <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2" />
                    {feature.text}
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center"
                alt="Our Story"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Values</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`bg-gradient-to-r ${value.color} rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Meet Our Team</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              The passionate people behind our success, dedicated to bringing you the best shopping experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`group text-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{member.name}</h3>
                  <p className="text-sm sm:text-base text-purple-600 font-medium mb-2 sm:mb-3">{member.role}</p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              What Our Customers Say
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Real feedback from real customers who love shopping with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-4 sm:p-6 lg:p-8 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4"
                  />
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-purple-300 mb-3 sm:mb-4" />
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent animate-pulse"></div>

        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 text-center relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8">
            Join thousands of satisfied customers and discover your new favorite products today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/products"
              className="bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center text-sm sm:text-base"
            >
              <ShoppingBag className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Browse Products
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold transition-all duration-300 hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
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
