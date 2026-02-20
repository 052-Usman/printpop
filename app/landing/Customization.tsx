import Link from "next/link";
import { SectionCard } from "@/components/landing/SectionCard";
import customizationCover from "@/public/images/printpop-customization-cover.jpg"

export const Customization = () => {
  return (
    <section className="relative pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionCard className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-8 animate-in fade-in slide-in-from-left-4 duration-1000">
            <div className="space-y-2">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                Create Your Own
              </span>
              <h2 className="font-neon text-3xl md:text-4xl font-bold text-white mb-6 uppercase leading-tight">
                <span className="text-shadow-[0_0_30px_rgba(92,225,230,0.8)]">Customize Your</span> <br />
                <span className="text-shadow-[0_0_30px_rgba(92,225,230,0.8)] text-neon-blue">Mobile Phone</span>
              </h2>
            </div>

            <p className="text-gray-400 font-comic text-lg leading-relaxed max-w-md">
              Upload your art, choose your neon accents, and build a case that is uniquely yours.
              Our high-quality printing ensures your design glows as bright as your ideas.
            </p>

            <ul className="space-y-4 font-comic text-gray-300">
              <li className="flex items-center group/item transition-colors">
                <span className="material-symbols-outlined text-secondary mr-3 text-xl group-hover:scale-110 transition-transform">check_circle</span>
                <span className="group-hover:text-white transition-colors">Military-grade drop protection</span>
              </li>
              <li className="flex items-center group/item transition-colors">
                <span className="material-symbols-outlined text-secondary mr-3 text-xl group-hover:scale-110 transition-transform">check_circle</span>
                <span className="group-hover:text-white transition-colors">Scratch-resistant glossy finish</span>
              </li>
              <li className="flex items-center group/item transition-colors">
                <span className="material-symbols-outlined text-secondary mr-3 text-xl group-hover:scale-110 transition-transform">check_circle</span>
                <span className="group-hover:text-white transition-colors">Lifetime print warranty</span>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/customize"
                className="inline-block px-10 py-4 btn-brand-gradient text-white font-black rounded-[8px] shadow-[0_0_20px_rgba(92,225,230,0.3)] hover:shadow-[0_0_35px_rgba(92,225,230,0.6)] transition-all duration-300 uppercase tracking-widest text-sm"
              >
                Start Designing
              </Link>
            </div>
          </div>

          <div className="hidden md:block md:w-1/2 relative group animate-in fade-in slide-in-from-right-4 duration-1000">
            <div className="absolute inset-0 bg-linear-to-tr from-primary to-secondary blur-[80px] opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-700"></div>
            <img
              alt="Custom Phone Case Builder - Create Your Own Design"
              className="relative z-10 w-full rounded-2xl border-2 border-gray-700 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              src={customizationCover.src}
            />
          </div>
        </SectionCard>
      </div>
    </section>
  );
};
