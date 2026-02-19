import { Hero } from "@/app/landing/Hero";
import { TrustedBy } from "@/app/landing/TrustedBy";
import { TrendingStyles } from "@/app/landing/TrendingStyles";
import { Locations } from "@/app/landing/Locations";
import { CTA } from "@/app/landing/CTA";
import { Customization } from "@/app/landing/Customization";
import { Testimonials } from "@/app/landing/Testimonials";
import { Stats } from "@/app/landing/Stats";
import { Newsletter } from "@/app/landing/Newsletter";
import { PHONE_MODELS } from "@/data/phones";
import PhoneModelCard from "@/components/PhoneModelCard";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background">
      <Hero />
      <TrustedBy />
      <TrendingStyles />
      <Locations />
      <CTA />
      <Testimonials />
      <Customization />
      <Stats />
      <Newsletter />

      <main className="px-4 md:px-8 py-8 md:py-12">
        <div className="text-center mb-10 space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Select Your Device
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose your phone model to start designing your custom case.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {PHONE_MODELS.map((model) => (
            <PhoneModelCard key={model.id} model={model} />
          ))}
        </div>
      </main>
    </div>
  );
}
