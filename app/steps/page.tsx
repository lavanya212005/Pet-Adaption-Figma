import Link from "next/link"
import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, Heart, Home, FileCheck, Apple, Users, Headphones } from "lucide-react"

const adoptionSteps = [
  {
    number: 1,
    title: "Browse Available Pets",
    description: "Explore our database of pets looking for their forever homes.",
    icon: Search,
  },
  {
    number: 2,
    title: "Submit an Adoption Application",
    description: "Fill out our simple application form to start the process.",
    icon: FileText,
  },
  {
    number: 3,
    title: "Meet Your Future Pet",
    description: "Schedule a meet and greet to see if you're a perfect match.",
    icon: Heart,
  },
  {
    number: 4,
    title: "Home Visit & Approval",
    description: "We'll visit to ensure your home is pet-ready.",
    icon: Home,
  },
  {
    number: 5,
    title: "Complete Adoption & Paperwork",
    description: "Finalize the adoption with necessary documentation.",
    icon: FileCheck,
  },
  {
    number: 6,
    title: "Nutrition and Feeding",
    description: "Learn about proper nutrition for your new family member.",
    icon: Apple,
  },
  {
    number: 7,
    title: "Welcome Your New Family Member",
    description: "Bring your new pet home and start your journey together.",
    icon: Users,
  },
  {
    number: 8,
    title: "Post-Adoption Support",
    description: "We're here to help with any questions after adoption.",
    icon: Headphones,
  },
]

export default function StepsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="bg-gray-50 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-2xl lg:text-5xl font-bold text-[#1a1a3e] mb-4">Adoption Process Steps</h1>
            <p className="text-gray-600 text-sm lg:text-lg max-w-2xl mx-auto">
              Our adoption process is designed to ensure every pet finds the perfect home. 
              Follow these simple steps to bring home your new family member.
            </p>
          </div>
        </section>
        
        {/* Steps Grid */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {adoptionSteps.map((step) => (
                <Card key={step.number} className="relative hover:shadow-xl transition-shadow border-0 shadow-md overflow-visible">
                  <div className="absolute -top-4 left-6">
                    <div className="h-8 w-8 rounded-full bg-[#1a1a3e] text-white flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="h-12 w-12 rounded-full bg-[#1a1a3e]/10 flex items-center justify-center mb-4">
                      <step.icon className="h-6 w-6 text-[#1a1a3e]" />
                    </div>
                    <h3 className="font-bold text-[#1a1a3e] mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button asChild size="lg" className="rounded-full bg-[#1a1a3e] hover:bg-[#2a2a5e] px-8">
                <Link href="/adopt">Start Adoption Form</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Info Section */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-xl lg:text-3xl font-bold text-[#1a1a3e] mb-4">Questions About the Process?</h2>
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
              Our team is here to guide you through every step of the adoption journey. 
              Don't hesitate to reach out if you need any assistance.
            </p>
            <Button variant="outline" className="rounded-full border-[#1a1a3e] text-[#1a1a3e] hover:bg-[#1a1a3e] hover:text-white px-8">
              Contact Us
            </Button>
          </div>
        </section>
      </main>
      
      <BottomNav />
      <Footer />
    </div>
  )
}
