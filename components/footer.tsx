import Link from "next/link"

export function Footer() {
  return (
    <footer className="hidden lg:block bg-[#1a1a3e] text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <PawIcon className="h-10 w-10" />
              <span className="text-xl font-bold">HOPEFUL TAILS</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Connecting pets with loving families since 2020.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-white/70 hover:text-white transition-colors">Home</Link>
              <Link href="/pets" className="text-sm text-white/70 hover:text-white transition-colors">Available Pets</Link>
              <Link href="/stories" className="text-sm text-white/70 hover:text-white transition-colors">Success Stories</Link>
              <Link href="/steps" className="text-sm text-white/70 hover:text-white transition-colors">Adoption Process</Link>
            </nav>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/adopt" className="text-sm text-white/70 hover:text-white transition-colors">Adopt a Pet</Link>
              <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors">Volunteer</Link>
              <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors">Donate</Link>
              <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors">Contact Us</Link>
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <p>123 Pet Street</p>
              <p>Animal City, AC 12345</p>
              <p>info@hopefultails.org</p>
              <p>(555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/50">
          <p>&copy; 2024 Hopeful Tails. All rights reserved.</p>
        </div>
      </div>
    </footer>
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
