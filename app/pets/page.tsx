import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const pets = [
  {
    id: 1,
    name: "Tom",
    breed: "Ragdoll",
    age: "1 year",
    gender: "Male",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Luna",
    breed: "Persian",
    age: "2 years",
    gender: "Female",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Max",
    breed: "Golden Retriever",
    age: "3 years",
    gender: "Male",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Bella",
    breed: "Labrador",
    age: "2 years",
    gender: "Female",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Whiskers",
    breed: "Tabby",
    age: "1 year",
    gender: "Male",
    image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Buddy",
    breed: "Beagle",
    age: "4 years",
    gender: "Male",
    image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=400&h=400&fit=crop",
  },
]

export default function PetsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="bg-gray-50 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-2xl lg:text-5xl font-bold text-[#1a1a3e] mb-4">Explore Your Pets</h1>
            <p className="text-gray-600 italic text-sm lg:text-lg max-w-xl mx-auto">
              {'" A wagging tail is a universal language of happiness "'}
            </p>
          </div>
        </section>
        
        {/* Pets Grid */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {pets.map((pet) => (
                <Card key={pet.id} className="overflow-hidden hover:shadow-xl transition-shadow border-0 shadow-md">
                  <div className="relative h-48 lg:h-64">
                    <Image
                      src={pet.image}
                      alt={pet.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4 lg:p-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-[#1a1a3e]">{pet.name}</h3>
                        <span className="text-xs bg-[#1a1a3e]/10 text-[#1a1a3e] px-2 py-1 rounded-full">{pet.gender}</span>
                      </div>
                      <p className="text-gray-600 text-sm"><span className="font-medium">Breed:</span> {pet.breed}</p>
                      <p className="text-gray-600 text-sm"><span className="font-medium">Age:</span> {pet.age}</p>
                    </div>
                    <Button asChild className="w-full mt-4 rounded-full bg-[#1a1a3e] hover:bg-[#2a2a5e]">
                      <Link href="/adopt">Adopt {pet.name}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Rescue Story */}
        <section className="py-12 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative h-64 lg:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop"
                  alt="Rescue cat"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-2xl lg:text-4xl font-bold text-[#1a1a3e] mb-4">Rescue Story</h2>
                <h3 className="text-lg lg:text-xl font-semibold text-[#1a1a3e] mb-4">{'"Whiskers\' Second Chance"'}</h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
                  One rainy night, I found a tiny, shivering cat in an alley, her weak cries begging for help. 
                  I took her home, nursing her back to health with patience and love. At first, she was scared, 
                  barely eating, but slowly, she learned to trust again.
                </p>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-8">
                  The day she purred in my arms, I knew she had chosen me. Now, Whiskers fills my home with love, 
                  proving that sometimes, the ones we rescue end up rescuing us.
                </p>
                <Button asChild className="rounded-full bg-[#1a1a3e] hover:bg-[#2a2a5e] px-8">
                  <Link href="/adopt">Adopt</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <BottomNav />
      <Footer />
    </div>
  )
}
