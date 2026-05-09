"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Check } from "lucide-react"

export default function AdoptPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    reason: "",
  })
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/adopt/success")
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="bg-gray-50 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-2xl lg:text-5xl font-bold text-[#1a1a3e] mb-4">Adoption Application</h1>
            <p className="text-gray-600 text-sm lg:text-lg max-w-2xl mx-auto">
              Take the first step towards bringing home your new best friend. 
              Fill out the form below and we will be in touch soon.
            </p>
          </div>
        </section>
        
        {/* Form Section */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Image */}
              <div className="hidden lg:block">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=800&fit=crop"
                    alt="Happy pet"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-8 bg-[#1a1a3e]/5 rounded-2xl p-6">
                  <h3 className="font-bold text-[#1a1a3e] mb-3">What happens next?</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>We will review your application within 24-48 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>A team member will contact you to schedule a meet and greet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Home visit will be arranged at your convenience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Complete the adoption and welcome your new family member</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Form */}
              <Card className="border-0 shadow-xl">
                <CardHeader className="text-center pb-2">
                  <div className="flex justify-center mb-4">
                    <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-10 w-10 text-green-600" />
                    </div>
                  </div>
                  <CardTitle className="text-xl lg:text-2xl text-[#1a1a3e]">Adoption Form</CardTitle>
                </CardHeader>
                <CardContent className="px-6 lg:px-8 pb-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-sm font-medium text-[#1a1a3e]">Full name:</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="border-[#1a1a3e]/30 focus:border-[#1a1a3e] focus:ring-[#1a1a3e]"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-sm font-medium text-[#1a1a3e]">Address:</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="border-[#1a1a3e]/30 focus:border-[#1a1a3e] focus:ring-[#1a1a3e]"
                        placeholder="Enter your address"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-[#1a1a3e]">Phone:</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="border-[#1a1a3e]/30 focus:border-[#1a1a3e] focus:ring-[#1a1a3e]"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="reason" className="text-sm font-medium text-[#1a1a3e]">Why you need to Adopt the pet?</Label>
                      <Textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                        className="min-h-[120px] border-[#1a1a3e]/30 focus:border-[#1a1a3e] focus:ring-[#1a1a3e] resize-none"
                        placeholder="Tell us why you want to adopt..."
                      />
                    </div>
                    
                    <div className="flex justify-center pt-4">
                      <Button type="submit" size="lg" className="rounded-full bg-[#1a1a3e] hover:bg-[#2a2a5e] px-12">
                        Submit Application
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <BottomNav />
      <Footer />
    </div>
  )
}
