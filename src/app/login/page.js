"use client"

import { useState, useEffect } from "react"
import { Eye, EyeOff, Mail, Lock, Sparkles, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", { email, password })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent animate-pulse"></div>

      {/* Floating Elements */}
      <div
        className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-yellow-300/20 rounded-full animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-300/20 rounded-full animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      ></div>
      <div
        className="absolute bottom-40 right-1/3 w-14 h-14 bg-pink-300/20 rounded-full animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
      ></div>

      <div
        className={`w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0 rounded-lg transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"}`}
      >
        {/* Header */}
        <div className="text-center space-y-4 p-6 pb-0">
          <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-400 to-yellow-500 text-white rounded-full px-4 py-2 mx-auto animate-pulse">
            <Sparkles className="h-4 w-4 animate-spin" />
            <span className="text-sm font-medium">Welcome Back</span>
          </div>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Sign In
          </h1>

          <p className="text-gray-600">Enter your credentials to access your account</p>
        </div>

        {/* Content */}
        <div className="space-y-6 p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-gray-700 font-medium block text-sm">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-gray-700 font-medium block text-sm">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group flex items-center justify-center"
            >
              <Zap className="mr-2 h-4 w-4 group-hover:animate-spin" />
              Sign In
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-all duration-300 hover:scale-105">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-all duration-300 hover:scale-105">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>

          <div className="text-center">
            <span className="text-gray-600">{"Don't have an account? "}</span>
            <Link href="/register" className="text-purple-600 hover:text-purple-700 font-medium transition-colors">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
