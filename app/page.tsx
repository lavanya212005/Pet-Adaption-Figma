import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const featuredPets = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop",
    adopted: 250,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=200&fit=crop",
    adopted: 285,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=200&h=200&fit=crop",
    adopted: 259,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="relative bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-2xl lg:text-5xl font-bold text-[#1a1a3e] leading-tight text-balance mb-6">
                  {"You can't buy the love, But you can rescue it."}
                </h1>
                <p className="text-gray-600 text-sm lg:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                  Every pet deserves a loving home. Join us in making a difference, one adoption at a time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="rounded-full bg-[#1a1a3e] hover:bg-[#2a2a5e] px-8">
                    <Link href="/pets">Find a Pet</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full border-[#1a1a3e] text-[#1a1a3e] hover:bg-[#1a1a3e] hover:text-white px-8">
                    <Link href="/stories">Read Stories</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative h-64 lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop"
                    alt="Dog and cat together"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-sm lg:text-base text-gray-500 uppercase tracking-wider">Our Impact</h2>
            </div>
            <div className="flex justify-center gap-8 lg:gap-16">
              {featuredPets.map((pet) => (
                <div key={pet.id} className="flex flex-col items-center gap-3">
                  <div className="relative h-16 w-16 lg:h-24 lg:w-24 rounded-full overflow-hidden ring-4 ring-[#1a1a3e] shadow-lg">
                    <Image
                      src={pet.image}
                      alt="Pet"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xs lg:text-sm text-gray-500">Pets Adopted:</p>
                    <p className="text-lg lg:text-2xl font-bold text-[#1a1a3e]">{pet.adopted}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-12 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative h-64 lg:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop"
                  alt="Happy adopted pet"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-2xl lg:text-4xl font-bold text-[#1a1a3e] mb-6">Our Mission</h2>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
                  We connect pets with caring families, ensuring every animal finds a loving home. 
                  Through heartwarming stories and a simple adoption process, we inspire compassion 
                  and responsible pet ownership.
                </p>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-8">
                  Join us in giving every pet the love they deserve! Our dedicated team works 
                  tirelessly to match pets with their perfect families.
                </p>
                <Button asChild className="rounded-full bg-[#1a1a3e] hover:bg-[#2a2a5e] px-8">
                  <Link href="/pets">Join Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 lg:py-20 bg-[#1a1a3e] text-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-balance">
              Ready to Find Your Perfect Companion?
            </h2>
            <p className="text-white/80 text-sm lg:text-lg mb-8 max-w-2xl mx-auto">
              Browse our available pets and start your adoption journey today. 
              Every pet deserves a loving home, and you could be the one to provide it.
            </p>
            <Button asChild size="lg" className="rounded-full bg-white text-[#1a1a3e] hover:bg-gray-100 px-8">
              <Link href="/adopt">Start Adoption</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <BottomNav />
      <Footer />
    </div>
  )
}
