"use client"

import Image from "next/image"
import { Plus, X } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import faqIcon from "@/public/printpop-fqs-icon.svg"

const faqData = [
  {
    question: "How long does it take to make my custom case?",
    answer: "Most designs are ready within 15-30 minutes at our kiosks. If you order online, printing and shipping take 2-3 business days depending on your location.",
  },
  {
    question: "Can I use my own photo or artwork?",
    answer: "Absolutely! You can upload any JPEG or PNG file to our customizer. For the best results, we recommend high-resolution images.",
  },
  {
    question: "What materials are the cases made of?",
    answer: "Our cases are made from high-grade polycarbonate and TPU, providing military-grade drop protection while remaining slim and stylish.",
  },
  {
    question: "Do you support all phone models?",
    answer: "We support over 200+ models from Apple, Samsung, Google, and more. Check our model selector in the customizer to find yours.",
  },
  {
    question: "What if I'm not happy with my design?",
    answer: "We offer a 100% satisfaction guarantee. If your case doesn't meet your expectations, let us know and we'll make it right.",
  },
]

export const FAQs = () => {
  return (
    <section className="relative py-24 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-neon text-3xl md:text-4xl font-bold text-white mb-6 uppercase leading-tight">
            <span className="text-neon-blue text-shadow-[0_0_30px_rgba(92,225,230,0.8)]">Frequently Asked Questions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Illustration */}
          <div className="hidden lg:block relative group animate-in fade-in slide-in-from-left-4 duration-1000 order-2 lg:order-1">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute -top-28 left-[70%] w-[180px] h-[180px] bg-secondary opacity-20 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-4000"></div>
            </div>
            <div className="relative z-10 p-4">
              <Image
                src={faqIcon}
                alt="FAQ Illustration"
                width={350}
                height={350}
              />
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="animate-in fade-in slide-in-from-right-4 duration-1000 order-1 lg:order-2">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none bg-[#112238] rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                >
                  <AccordionTrigger
                    hideIcon
                    className="flex justify-between items-center px-6 py-5 hover:no-underline group data-[state=open]:bg-[#112238]"
                  >
                    <span className="font-comic text-left text-lg text-white group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                    <div className="ml-4 shrink-0">
                      <Plus className="h-5 w-5 text-white block group-data-[state=open]:hidden" />
                      <X className="h-5 w-5 text-white hidden group-data-[state=open]:block" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="font-comic text-gray-400 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
