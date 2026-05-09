"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, PawPrint, Heart, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/pets", icon: PawPrint, label: "Pets" },
  { href: "/stories", icon: Heart, label: "Stories" },
]

export function BottomNav() {
  const pathname = usePathname()
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 lg:hidden">
      <div className="flex items-center justify-around py-3 max-w-md mx-auto">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1 text-gray-500 hover:text-[#1a1a3e] transition-colors p-2",
              pathname === item.href && "text-[#1a1a3e]"
            )}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
        
        <button
          onClick={() => window.history.back()}
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-[#1a1a3e] transition-colors p-2"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="text-xs">Back</span>
        </button>
      </div>
    </nav>
  )
}
