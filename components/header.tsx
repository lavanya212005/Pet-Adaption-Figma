"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Bell, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pets", label: "Pets" },
  { href: "/stories", label: "Stories" },
  { href: "/steps", label: "Adoption Steps" },
  { href: "/adopt", label: "Adopt Now" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-[#1a1a3e] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <PawIcon className="h-10 w-10 lg:h-12 lg:w-12" />
          <span className="hidden md:block text-xl font-bold tracking-wide">HOPEFUL TAILS</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-opacity hover:opacity-80",
                pathname === link.href ? "opacity-100" : "opacity-70"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-[#1a1a3e] text-white border-[#1a1a3e]">
              <div className="flex items-center gap-3 mb-8">
                <PawIcon className="h-10 w-10" />
                <span className="text-lg font-bold">HOPEFUL TAILS</span>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-lg font-medium transition-opacity hover:opacity-80 py-2",
                      pathname === link.href ? "opacity-100" : "opacity-70"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function PawIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="50" cy="65" rx="25" ry="20" />
      <ellipse cx="25" cy="35" rx="12" ry="15" />
      <ellipse cx="75" cy="35" rx="12" ry="15" />
      <ellipse cx="15" cy="55" rx="10" ry="12" />
      <ellipse cx="85" cy="55" rx="10" ry="12" />
    </svg>
  )
}
