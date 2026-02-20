import Link from "next/link";
import printpop_popular_group1 from "@/public/images/printpop-popular-group1.png";
import printpop_popular_group2 from "@/public/images/printpop-popular-group2.png";
import printpop_popular_group3 from "@/public/images/printpop-popular-group3.png";

export const PopularProducts = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-40">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-32 left-32 w-[180px] h-[180px] bg-secondary opacity-20 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-4000"></div>
        <div className="absolute top-[calc(80%-128px)] right-32 w-[180px] h-[180px] bg-primary opacity-15 blur-[100px] rounded-full mix-blend-screen animate-pulse duration-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="font-neon text-3xl md:text-4xl font-bold text-white mb-6 tracking-tighter">
            <span className="text-neon-red">POPULAR</span> <span className="text-shadow-[0_0_30px_#FF2E63]">PRODUCTS</span>
          </h2>
          <div className="h-1.5 w-24 bg-linear-to-r from-primary to-secondary mx-auto rounded-full shadow-[0_0_10px_rgba(92,225,230,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Cyberpunk Card */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer h-[350px] xl:h-[400px] transition-all duration-500 hover:shadow-[0_0_30px_rgba(92,225,230,0.2)] border border-white/5">
            <img
              alt="Cyberpunk Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={printpop_popular_group1.src}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>

            <div className="absolute bottom-0 left-0 p-10 w-full transform transition-transform duration-500">
              <h3 className="font-neon text-3xl text-white mb-3 group-hover:text-primary transition-colors duration-300">
                Group of 2
              </h3>
              <p className="text-gray-300 font-comic text-sm mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 line-clamp-2">
                High-tech, low-life aesthetics for the modern rebel.
              </p>
              <Link href="/collection/cyberpunk" className="inline-flex items-center text-primary font-bold uppercase tracking-widest text-xs border-b-2 border-primary/30 hover:border-primary pb-1 transition-all duration-300">
                start designing <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
              </Link>
            </div>

            <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10 shadow-2xl">
              <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Best Seller</span>
            </div>
          </div>

          {/* Vaporwave Card - Elevated */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer h-[400px] xl:h-[500px] md:-mt-12 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,49,49,0.2)] border-2 border-transparent hover:border-secondary/30 z-20">
            <img
              alt="Vaporwave Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={printpop_popular_group2.src}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>

            <div className="absolute bottom-0 left-0 p-10 w-full">
              <h3 className="font-neon text-3xl text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                Group of 3
              </h3>
              <p className="text-gray-300 font-comic text-sm mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 line-clamp-2">
                Retro-futuristic nostalgia glitch art gems.
              </p>
              <Link href="/collection/vaporwave" className="inline-flex items-center text-secondary font-bold uppercase tracking-widest text-xs border-b-2 border-secondary/30 hover:border-secondary pb-1 transition-all duration-300">
                start designing <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Minimal Neon Card */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer h-[350px] xl:h-[400px] transition-all duration-500 hover:shadow-[0_0_30px_rgba(92,225,230,0.2)] border border-white/5">
            <img
              alt="Minimal Neon Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={printpop_popular_group3.src}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>

            <div className="absolute bottom-0 left-0 p-10 w-full">
              <h3 className="font-neon text-3xl text-white mb-3 group-hover:text-primary transition-colors duration-300">
                Group of 4
              </h3>
              <p className="text-gray-300 font-comic text-sm mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 line-clamp-2">
                Clean lines with a striking electric punch.
              </p>
              <Link href="/collection/minimal" className="inline-flex items-center text-primary font-bold uppercase tracking-widest text-xs border-b-2 border-primary/30 hover:border-primary pb-1 transition-all duration-300">
                start designing <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
