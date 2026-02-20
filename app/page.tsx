import { Hero } from "@/app/landing/Hero";
import { TrustedBy } from "@/app/landing/TrustedBy";
import { TrendingStyles } from "@/app/landing/TrendingStyles";
import { Locations } from "@/app/landing/Locations";
import { CTA } from "@/app/landing/CTA";
import { DesignCase } from "@/app/landing/DesignCase";
import { Customization } from "@/app/landing/Customization";
import { Testimonials } from "@/app/landing/Testimonials";
import { Stats } from "@/app/landing/Stats";
import { PopularProducts } from "@/app/landing/PopularProducts";
import { FAQs } from "@/app/landing/FAQs";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background">
      <Hero />
      <TrustedBy />
      <TrendingStyles />
      <Locations />
      <CTA />
      <DesignCase />
      <Testimonials />
      <PopularProducts />
      <Customization />
      <Stats />
      <FAQs />
    </div>
  );
}
