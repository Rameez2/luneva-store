"use client"

import CollectionsSection from "@/components/Home/CollectionsSection"
import FeaturedSection from "@/components/Home/FeaturedSection"
import HeroSection from "@/components/Home/HeroSection"
import NewsLetterSection from "@/components/Home/NewsLetterSection"

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Hero Section */}
      <HeroSection/>

      {/* Collections */}
      <CollectionsSection/>

      {/* Featured Products */}
      <FeaturedSection/>

      {/* Newsletter */}
      <NewsLetterSection/>

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
        
        @keyframes slide-in-left {
          from { 
            opacity: 0; 
            transform: translateX(-50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slide-in-right {
          from { 
            opacity: 0; 
            transform: translateX(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slide-in-up {
          from { 
            opacity: 0; 
            transform: translateY(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
          50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.8); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out 0.5s forwards;
          opacity: 0;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out 0.7s forwards;
          opacity: 0;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 1s ease-out 0.9s forwards;
          opacity: 0;
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
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
