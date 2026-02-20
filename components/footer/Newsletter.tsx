"use client";

export const Newsletter = () => {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-32 w-[180px] h-[180px] bg-primary opacity-15 blur-[100px] rounded-full mix-blend-screen animate-pulse duration-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-1">
          <svg className="animate-bounce" width="45" height="54" viewBox="0 0 45 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 42C6.46875 42 5.58594 41.6328 4.85156 40.8984C4.11719 40.1641 3.75 39.2812 3.75 38.25V15.75C3.75 14.7188 4.11719 13.8359 4.85156 13.1016C5.58594 12.3672 6.46875 12 7.5 12H26.4375C26.3125 12.625 26.25 13.25 26.25 13.875C26.25 14.5 26.3125 15.125 26.4375 15.75H7.5L22.5 25.125L29.3438 20.8594C29.7812 21.2656 30.2578 21.6172 30.7734 21.9141C31.2891 22.2109 31.8281 22.4688 32.3906 22.6875L22.5 28.875L7.5 19.5V38.25H37.5V23.0625C38.2188 22.9062 38.8906 22.6875 39.5156 22.4062C40.1406 22.125 40.7188 21.7812 41.25 21.375V38.25C41.25 39.2812 40.8828 40.1641 40.1484 40.8984C39.4141 41.6328 38.5312 42 37.5 42H7.5ZM35.625 19.5C35.625 19.5 35.2344 19.5 34.4531 19.5C33.6719 19.5 32.7344 18.9531 31.6406 17.8594C30.5469 16.7656 30 15.4375 30 13.875C30 12.3125 30.5469 10.9844 31.6406 9.89062C32.7344 8.79688 34.0625 8.25 35.625 8.25C37.1875 8.25 38.5156 8.79688 39.6094 9.89062C40.7031 10.9844 41.25 12.3125 41.25 13.875C41.25 15.4375 40.7031 16.7656 39.6094 17.8594C38.5156 18.9531 37.1875 19.5 35.625 19.5Z" fill="white" />
          </svg>
        </div>
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
