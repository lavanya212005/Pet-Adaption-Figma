import Image from "next/image"
import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

const stories = [
  {
    id: 1,
    title: "Earning Bella's Trust",
    author: "Sarah M.",
    excerpt: "Bella flinched at every touch, her past filled with neglect. With patience and gentle words, I let her come to me. The day she rested her head on my lap, I knew she was finally home.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    title: "Milo's Fear of Love",
    author: "James T.",
    excerpt: "Milo flinched at every touch, fearing love, afraid. Instead of forcing affection, I gave him time. Weeks later, Milo finally leaned into my touch. It was more rewarding than words could express.",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    title: "Luna's Journey Home",
    author: "Emily R.",
    excerpt: "Luna was found wandering the streets, thin and scared. After months of rehabilitation, she transformed into the most loving cat. Her purrs are the soundtrack to our home.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    title: "Max's New Beginning",
    author: "Michael D.",
    excerpt: "When Max arrived at the shelter, he wouldn't make eye contact. Through patience and treats, we built trust. Now he greets every morning with tail wags and kisses.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=200&h=200&fit=crop",
  },
  {
    id: 5,
    title: "Whiskers' Second Chance",
    author: "Anna K.",
    excerpt: "Found in an alley on a rainy night, Whiskers was barely surviving. Today, she rules our home with love and fills every corner with her playful spirit.",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=200&h=200&fit=crop",
  },
  {
    id: 6,
    title: "Buddy's Forever Family",
    author: "David L.",
    excerpt: "Buddy had been returned twice before we adopted him. People said he was difficult. We saw a dog that just needed understanding. Now he's the heart of our family.",
    image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=200&h=200&fit=crop",
  },
]

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="bg-gray-50 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl lg:text-5xl font-bold text-[#1a1a3e] mb-4">Healing with Love:</h1>
                <p className="text-gray-600 text-sm lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Every adoption tells a story. These are the journeys of pets who found their forever homes 
                  and the caretakers who opened their hearts.
                </p>
              </div>
              
              <div className="flex justify-center">
                <div className="relative h-56 w-44 lg:h-80 lg:w-64 rounded-lg overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                  <Image
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop"
                    alt="My Life - Pet Stories Book"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1a1a3e]/85 flex items-center justify-center">
                    <div className="text-center text-white">
                      <p className="text-sm lg:text-base opacity-80">Story of</p>
                      <p className="text-2xl lg:text-4xl font-bold">MY LIFE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stories Section */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-xl lg:text-3xl font-bold text-[#1a1a3e] mb-8 text-center">
              Caretakers Share Their Journey
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {stories.map((story) => (
                <Card key={story.id} className="hover:shadow-xl transition-shadow border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="relative h-16 w-16 lg:h-20 lg:w-20 rounded-full overflow-hidden shrink-0 ring-4 ring-[#1a1a3e]/10">
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-[#1a1a3e] text-sm lg:text-base mb-1">{`"${story.title}"`}</h3>
                        <p className="text-xs text-gray-500 mb-2">by {story.author}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mt-4">
                      {story.excerpt}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Share Story CTA */}
        <section className="py-12 lg:py-16 bg-[#1a1a3e] text-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-balance">Have Your Own Story?</h2>
            <p className="text-white/80 text-sm lg:text-lg mb-6 max-w-2xl mx-auto">
              We would love to hear about your journey with your adopted pet. 
              Share your story and inspire others to adopt.
            </p>
          </div>
        </section>
      </main>
      
      <BottomNav />
      <Footer />
    </div>
  )
}
