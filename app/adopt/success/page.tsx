import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pb-20 lg:pb-0">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Success Message */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                {/* Success Checkmark */}
                <div className="relative mb-8">
                  <div className="h-32 w-32 lg:h-40 lg:w-40 rounded-full border-4 border-green-500 flex items-center justify-center bg-green-50">
                    <Check className="h-16 w-16 lg:h-20 lg:w-20 text-green-500" strokeWidth={3} />
                  </div>
                </div>
                
                <h1 className="text-2xl lg:text-4xl font-bold text-[#1a1a3e] mb-4">Application Submitted!</h1>
                
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-8 max-w-md">
                  {"You're very welcome! We're glad you're interested in adopting. If you need anything else, feel free to reach out. Best of luck with the pet adoption process!"}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="rounded-full bg-[#1a1a3e] hover:bg-[#2a2a5e] px-8">
                    <Link href="/">Back to Home</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full border-[#1a1a3e] text-[#1a1a3e] hover:bg-[#1a1a3e] hover:text-white px-8">
                    <Link href="/pets">Browse More Pets</Link>
                  </Button>
                </div>
              </div>
              
              {/* Image */}
              <div className="order-1 lg:order-2">
                <div className="relative h-64 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop"
                    alt="Happy pets"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* What's Next */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-xl lg:text-3xl font-bold text-[#1a1a3e] mb-4">What Happens Next?</h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="h-12 w-12 rounded-full bg-[#1a1a3e]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[#1a1a3e]">1</span>
                </div>
                <h3 className="font-semibold text-[#1a1a3e] mb-2">Review</h3>
                <p className="text-gray-600 text-sm">Our team will review your application within 24-48 hours.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="h-12 w-12 rounded-full bg-[#1a1a3e]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[#1a1a3e]">2</span>
                </div>
                <h3 className="font-semibold text-[#1a1a3e] mb-2">Contact</h3>
                <p className="text-gray-600 text-sm">We will reach out to schedule a meet and greet with your chosen pet.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="h-12 w-12 rounded-full bg-[#1a1a3e]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[#1a1a3e]">3</span>
                </div>
                <h3 className="font-semibold text-[#1a1a3e] mb-2">Welcome Home</h3>
                <p className="text-gray-600 text-sm">Complete the adoption and bring your new family member home!</p>
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
