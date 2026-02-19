"use client";

export const Newsletter = () => {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-32 w-[180px] h-[180px] bg-primary opacity-15 blur-[100px] rounded-full mix-blend-screen animate-pulse duration-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <span className="material-symbols-outlined text-6xl text-white mb-6 animate-bounce inline-block">
          mark_email_unread
        </span>
        <h2 className="font-neon text-4xl font-bold leading-1.5 text-white mb-4 tracking-tighter">
          <span className="text-shadow-[0_0_30px_#5CE1E6]">JOIN THE </span><span className="text-neon-blue">PRINTPOP</span> <span className="text-shadow-[0_0_30px_#5CE1E6]">CLUB</span>
        </h2>
        <p className="text-gray-400 font-comic mb-8 text-lg max-w-2xl mx-auto">
          Get 15% off your first order and be the first to know about our limited edition drops.
        </p>
        <form className="max-w-md mx-auto relative group">
          <input
            className="w-full bg-white/5 border border-gray-700 rounded-full py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary font-comic transition-all"
            placeholder="Enter your email address"
            type="email"
          />
          <button
            className="absolute right-2 top-2 bottom-2 px-6 btn-brand-gradient cursor-pointer text-base text-black font-bold rounded-full hover:bg-white transition-colors shadow-[0_0_15px_rgba(255,49,49,0.4)] hover:shadow-[0_0_20px_rgba(92,225,230,0.6)]"
            type="button"
          >
            JOIN
          </button>
        </form>
      </div>
    </section>
  );
};
