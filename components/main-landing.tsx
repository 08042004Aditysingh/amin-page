"use client"

import { useState } from "react"
import { UserAccessModal } from "@/components/user-access-modal"
import { AdminAccessModal } from "@/components/admin-access-modal"

export function MainLanding() {
  const [showUserModal, setShowUserModal] = useState(false)
  const [showAdminModal, setShowAdminModal] = useState(false)

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#f5f3ff] via-[#e8f4f8] to-[#f0e8ff] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating orb top-right */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(100, 200, 200, 0.3) 0%, transparent 70%)",
            animation: "float 20s ease-in-out infinite",
          }}
        />

        {/* Floating orb bottom-left */}
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(150, 120, 200, 0.3) 0%, transparent 70%)",
            animation: "float 25s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />

        {/* Center floating orb */}
        <div
          className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-50"
          style={{
            background: "radial-gradient(circle, rgba(120, 200, 180, 0.25) 0%, transparent 70%)",
            animation: "float 22s ease-in-out infinite",
            animationDelay: "4s",
          }}
        />

        {/* Right side floating accent */}
        <div
          className="absolute top-1/2 -right-32 w-80 h-80 rounded-full blur-3xl opacity-50"
          style={{
            background: "radial-gradient(circle, rgba(180, 140, 220, 0.25) 0%, transparent 70%)",
            animation: "float 24s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-16 px-4">
        {/* App Name */}
        <div className="text-center space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#4a7c7e] via-[#2d5f7d] to-[#5a6b8f] bg-clip-text text-transparent text-balance animate-fade-in">
            PaySecure
          </h1>
          <div className="flex gap-2 justify-center">
            <div
              className="h-1 w-8 bg-gradient-to-r from-[#6fb3b0] to-[#4a7c7e] rounded-full animate-pulse"
              style={{ animationDuration: "3s" }}
            />
            <div
              className="h-1 w-8 bg-gradient-to-r from-[#7ca8c9] to-[#6fb3b0] rounded-full animate-pulse"
              style={{ animationDuration: "3s", animationDelay: "0.5s" }}
            />
            <div
              className="h-1 w-8 bg-gradient-to-r from-[#9d7eb8] to-[#7ca8c9] rounded-full animate-pulse"
              style={{ animationDuration: "3s", animationDelay: "1s" }}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 md:gap-16">
          {/* User Button */}
          <button
            onClick={() => setShowUserModal(true)}
            className="group relative px-10 py-5 text-lg font-semibold text-white rounded-3xl overflow-hidden transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
            style={{
              background: "linear-gradient(135deg, #6fb3b0 0%, #4a9d99 50%, #6fb3b0 100%)",
              backgroundSize: "200% 200%",
              boxShadow: "0 8px 30px rgba(107, 179, 176, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              animation: "gradient-shift 6s ease infinite",
            }}
          >
            <span className="relative z-10 block">User Access</span>
            {/* Shimmer animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.1)",
              }}
            />
          </button>

          {/* Admin Button */}
          <button
            onClick={() => setShowAdminModal(true)}
            className="group relative px-10 py-5 text-lg font-semibold text-white rounded-3xl overflow-hidden transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
            style={{
              background: "linear-gradient(135deg, #7ca8c9 0%, #5a8fb5 50%, #7ca8c9 100%)",
              backgroundSize: "200% 200%",
              boxShadow: "0 8px 30px rgba(124, 168, 201, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              animation: "gradient-shift 6s ease infinite",
              animationDelay: "1s",
            }}
          >
            <span className="relative z-10 block">Admin Access</span>
            {/* Shimmer animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.1)",
              }}
            />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-30px) translateX(20px);
          }
          50% {
            transform: translateY(-60px) translateX(-20px);
          }
          75% {
            transform: translateY(-30px) translateX(20px);
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>

      {/* Modals */}
      <UserAccessModal open={showUserModal} onOpenChange={setShowUserModal} />
      <AdminAccessModal open={showAdminModal} onOpenChange={setShowAdminModal} />
    </div>
  )
}
