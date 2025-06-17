"use client"

import {
  Heart,
  Search,
  ShoppingBag,
  User,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ContactPage() {
  const [cartCount, setCartCount] = useState(2)
  const [isVisible, setIsVisible] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@store.com",
      description: "Send us an email anytime",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Commerce St, NY 10001",
      description: "Our flagship store",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Headphones,
      title: "Live Chat",
      content: "Available 24/7",
      description: "Instant support online",
      color: "from-pink-500 to-rose-600",
    },
  ]

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all items in original condition with tags attached.",
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 50 countries worldwide. International shipping times vary by location.",
    },
    {
      question: "How can I track my order?",
      answer: "You'll receive a tracking number via email once your order ships. You can track it on our website.",
    },
  ]

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900">Contact Us</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center relative">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">Get in Touch</h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact-form"
                className="bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-2xl hover:shadow-yellow-300/50 transition-all duration-300 hover:scale-110 rounded-lg flex items-center"
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Send Message
              </a>
              <a
                href="tel:+15551234567"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-110 rounded-lg flex items-center"
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the method that works best for you. We're here to help with any questions or concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`bg-gradient-to-r ${info.color} rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <info.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-base sm:text-lg font-semibold text-purple-600 mb-1">{info.content}</p>
                <p className="text-sm sm:text-base text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div
              id="contact-form"
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a Message</h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Map & Info */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Map Placeholder */}
                <div className="h-64 sm:h-80 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 sm:h-16 sm:w-16 text-purple-600 mx-auto mb-4" />
                    <p className="text-base sm:text-lg font-semibold text-gray-700">Interactive Map</p>
                    <p className="text-sm sm:text-base text-gray-600">123 Commerce St, NY 10001</p>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Visit Our Store</h4>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Address</p>
                        <p className="text-gray-600 text-sm sm:text-base">123 Commerce Street, New York, NY 10001</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Store Hours</p>
                        <div className="text-gray-600 text-sm sm:text-base">
                          <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                          <p>Saturday: 10:00 AM - 6:00 PM</p>
                          <p>Sunday: 12:00 PM - 5:00 PM</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-600 text-sm sm:text-base">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-200">
                    <p className="font-semibold text-gray-900 mb-4">Follow Us</p>
                    <div className="flex space-x-4">
                      {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                        <a
                          key={index}
                          href="#"
                          className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Quick answers to common questions. Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-4 sm:p-6 transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{faq.question}</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
