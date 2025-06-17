"use client"

import {
  Heart,
  Search,
  ShoppingBag,
  User,
  Edit3,
  Save,
  X,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Package,
  Settings,
  LogOut,
  Camera,
  Menu,
  Eye,
  EyeOff,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ProfilePage() {
  const [cartCount, setCartCount] = useState(2)
  const [isVisible, setIsVisible] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState("profile")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, New York, NY 10001",
    joinDate: "January 2023",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  })

  const [editProfile, setEditProfile] = useState({ ...userProfile })

  const recentOrders = [
    {
      id: "#12345",
      date: "Dec 15, 2024",
      status: "Delivered",
      total: "$299.00",
      items: 2,
    },
    {
      id: "#12344",
      date: "Dec 10, 2024",
      status: "Shipped",
      total: "$89.00",
      items: 1,
    },
    {
      id: "#12343",
      date: "Dec 5, 2024",
      status: "Processing",
      total: "$199.00",
      items: 3,
    },
  ]

  const savedItems = [
    {
      id: 1,
      name: "Premium Minimalist Watch",
      price: 299,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop&crop=center",
    },
    {
      id: 2,
      name: "Wireless Pro Earbuds",
      price: 199,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&h=200&fit=crop&crop=center",
    },
  ]

  const handleSave = async () => {
    setIsSaving(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setUserProfile({ ...editProfile })
    setIsEditing(false)
    setIsSaving(false)
  }

  const handleCancel = () => {
    setEditProfile({ ...userProfile })
    setIsEditing(false)
  }

  const handleInputChange = (field, value) => {
    setEditProfile((prev) => ({ ...prev, [field]: value }))
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "text-green-600 bg-green-100"
      case "Shipped":
        return "text-blue-600 bg-blue-100"
      case "Processing":
        return "text-orange-600 bg-orange-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const tabs = [
    { id: "profile", name: "Profile", icon: User },
    { id: "orders", name: "Orders", icon: Package },
    { id: "wishlist", name: "Wishlist", icon: Heart },
    { id: "settings", name: "Settings", icon: Settings },
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
          <span className="text-gray-900">My Profile</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 pb-8 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar - Mobile Tabs / Desktop Sidebar */}
          <div className="lg:col-span-1">
            {/* Mobile Tabs */}
            <div className="lg:hidden mb-6">
              <div className="flex overflow-x-auto space-x-1 bg-gray-100 rounded-lg p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-white text-purple-600 shadow-sm"
                        : "text-gray-600 hover:text-purple-600"
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{tab.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Sidebar */}
            <div
              className={`hidden lg:block bg-white rounded-2xl shadow-lg p-6 sticky top-24 transform transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Profile Summary */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <Image
                    src={userProfile.avatar || "/placeholder.svg"}
                    alt={userProfile.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
                  />
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{userProfile.name}</h3>
                <p className="text-sm text-gray-600">Member since {userProfile.joinDate}</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>

              {/* Logout Button */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-300">
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div
                className={`bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 transform transition-all duration-1000 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Profile Information</h2>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base"
                    >
                      <Edit3 className="h-4 w-4" />
                      <span>Edit Profile</span>
                    </button>
                  ) : (
                    <div className="flex space-x-3">
                      <button
                        onClick={handleCancel}
                        className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
                      >
                        <X className="h-4 w-4" />
                        <span>Cancel</span>
                      </button>
                      <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 text-sm sm:text-base"
                      >
                        {isSaving ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        ) : (
                          <Save className="h-4 w-4" />
                        )}
                        <span>{isSaving ? "Saving..." : "Save"}</span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                  {/* Avatar Section */}
                  <div className="text-center">
                    <div className="relative inline-block mb-4">
                      <Image
                        src={userProfile.avatar || "/placeholder.svg"}
                        alt={userProfile.name}
                        width={120}
                        height={120}
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mx-auto"
                      />
                      {isEditing && (
                        <button className="absolute bottom-0 right-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                          <Camera className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{userProfile.name}</h3>
                    <p className="text-sm text-gray-600">Member since {userProfile.joinDate}</p>
                  </div>

                  {/* Profile Form */}
                  <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editProfile.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                          />
                        ) : (
                          <p className="text-gray-900 py-3 text-sm sm:text-base">{userProfile.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        {isEditing ? (
                          <input
                            type="email"
                            value={editProfile.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                          />
                        ) : (
                          <p className="text-gray-900 py-3 flex items-center text-sm sm:text-base">
                            <Mail className="h-4 w-4 mr-2 text-gray-500" />
                            {userProfile.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={editProfile.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                        />
                      ) : (
                        <p className="text-gray-900 py-3 flex items-center text-sm sm:text-base">
                          <Phone className="h-4 w-4 mr-2 text-gray-500" />
                          {userProfile.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      {isEditing ? (
                        <textarea
                          value={editProfile.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                          rows={3}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                        />
                      ) : (
                        <p className="text-gray-900 py-3 flex items-start text-sm sm:text-base">
                          <MapPin className="h-4 w-4 mr-2 text-gray-500 mt-1 flex-shrink-0" />
                          {userProfile.address}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div
                className={`bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 transform transition-all duration-1000 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Recent Orders</h2>

                <div className="space-y-4">
                  {recentOrders.map((order, index) => (
                    <div
                      key={order.id}
                      className="border border-gray-200 rounded-xl p-4 sm:p-6 hover:border-purple-300 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">Order {order.id}</h3>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                                order.status,
                              )}`}
                            >
                              {order.status}
                            </span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {order.date}
                            </span>
                            <span>{order.items} items</span>
                            <span className="font-semibold text-gray-900">{order.total}</span>
                          </div>
                        </div>
                        <div className="flex space-x-3">
                          <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors text-sm">
                            <Package className="h-4 w-4" />
                            <span>Track</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 transition-colors text-sm">
                            <span>View Details</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === "wishlist" && (
              <div
                className={`bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 transform transition-all duration-1000 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Saved Items</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {savedItems.map((item) => (
                    <div
                      key={item.id}
                      className="border border-gray-200 rounded-xl overflow-hidden hover:border-purple-300 transition-colors group"
                    >
                      <div className="relative">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={200}
                          height={200}
                          className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-red-500 hover:text-red-600 transition-colors">
                          <Heart className="h-4 w-4 fill-current" />
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{item.name}</h3>
                        <p className="text-lg font-bold text-purple-600 mb-3">${item.price}</p>
                        <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 text-sm">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div
                className={`bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 transform transition-all duration-1000 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Account Settings</h2>

                <div className="space-y-6 sm:space-y-8">
                  {/* Password Change */}
                  <div className="border-b border-gray-200 pb-6 sm:pb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                            placeholder="Enter current password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                          <input
                            type="password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                            placeholder="Enter new password"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                          <input
                            type="password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                            placeholder="Confirm new password"
                          />
                        </div>
                      </div>
                      <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base">
                        Update Password
                      </button>
                    </div>
                  </div>

                  {/* Notifications */}
                  <div className="border-b border-gray-200 pb-6 sm:pb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
                    <div className="space-y-4">
                      {[
                        { id: "email", label: "Email notifications", description: "Receive order updates via email" },
                        { id: "sms", label: "SMS notifications", description: "Get shipping updates via text" },
                        { id: "marketing", label: "Marketing emails", description: "Receive promotional offers" },
                      ].map((setting) => (
                        <div key={setting.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900 text-sm sm:text-base">{setting.label}</p>
                            <p className="text-sm text-gray-600">{setting.description}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Danger Zone */}
                  <div>
                    <h3 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h3>
                    <div className="border border-red-200 rounded-lg p-4 sm:p-6 bg-red-50">
                      <h4 className="font-semibold text-red-900 mb-2">Delete Account</h4>
                      <p className="text-sm text-red-700 mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
