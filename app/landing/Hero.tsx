import Link from "next/link";

export const Hero = () => {
    return (
        <div className="relative overflow-hidden min-h-[600px] flex items-center pb-16">
            {/* Background Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-16 left-32 w-[250px] h-[250px] bg-secondary opacity-20 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-4000"></div>
                <div className="absolute top-[60%] right-[36%] w-[180px] h-[180px] bg-primary opacity-15 blur-[100px] rounded-full mix-blend-screen animate-pulse duration-4000"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="text-left space-y-6">
                    <span
                        className="inline-block px-4 py-1 border border-primary text-primary rounded-full text-sm font-bold tracking-wider uppercase bg-primary/10 shadow-[0_0_10px_rgba(92,225,230,0.3)]">
                        New Collection Drop
                    </span>
                    <h1
                        className="font-neon text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-white via-gray-200 to-gray-500 leading-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                        Your phone <br /><span className="bg-linear-to-r from-[#5CE1E6] to-[#FF3131] bg-clip-text text-transparent">Your Vibe.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-comic max-w-lg leading-relaxed">
                        Custom cases that turn your device into a statement piece. Durable protection meets electric style.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link href="/shop" className="px-8 py-4 btn-brand-gradient text-white font-bold text-base rounded-full shadow-[0_0_20px_rgba(255,49,49,0.5)] hover:shadow-[0_0_30px_rgba(255,49,49,0.8)] transition-all duration-300 text-center uppercase tracking-wider">
                            Shop Now
                        </Link>
                        <Link href="/customize" className="p-[2px] rounded-full bg-linear-to-r from-[#5CE1E6] to-[#FF3131] group transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                            <div className="bg-black text-white px-8 py-4 rounded-full transition-all duration-300 group-hover:bg-white flex items-center justify-center">
                                <span className="text-brand-gradient group-hover:text-initial group-hover:text-black font-bold text-base uppercase tracking-wider transition-all duration-300">
                                    Customize Yours
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Right Content - Hero Image */}
                <div className="hidden lg:flex relative lg:h-[600px] items-center justify-center">
                    <div
                        className="relative w-80 h-[500px] bg-linear-to-br from-gray-900 to-black rounded-[3rem] border-4 border-gray-800 shadow-[0_0_50px_rgba(92,225,230,0.3)] transform -rotate-12 hover:rotate-0 transition-all duration-700 z-10">
                        <img alt="Neon Phone Case Blue"
                            className="w-full h-full object-cover rounded-[2.8rem] opacity-80 hover:opacity-100 transition-opacity"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXVCMWj2NjqTDu6WKruhDhtsMtfe7VULXU2qRsb5wbXEAEd1583X2SXVW5UT8rhwRJXEDhZR9QMu8G-9jM4iu7QxVeHPuhWc6HpkdySHHiUN5G8aZYWMbIDYr1xUwWansPq-JJljc9vVPzbJnjmLWwMbuJQsePtnJLs2zA-EBOwbwtRF5ACCfLw2vP-KhgXrWXkCzYPXDqohg1BIJOzUJSiP7gw50EiWQgGWPT-O1hQQqJW2IQpIkfgpri6WQy7wonT1ksApN2cPin" />
                        <div className="absolute inset-0 rounded-[2.8rem] ring-1 ring-white/10"></div>
                    </div>
                    <div
                        className="absolute top-20 right-10 w-72 h-[450px] bg-linear-to-br from-gray-900 to-black rounded-[2.5rem] border-4 border-gray-800 shadow-[0_0_50px_rgba(255,49,49,0.3)] transform rotate-6 hover:rotate-0 transition-all duration-700 z-0">
                        <img alt="Neon Phone Case Red"
                            className="w-full h-full object-cover rounded-[2.3rem] opacity-80 hover:opacity-100 transition-opacity"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN1nPtufifb4gMpXN1jrvHpQ8zqdOviRmBn9vQDLQRYEBQ38M2PNoP_Dr6OrbcizSBjhmPqYkUlyVXmD9181jj0sLlUvECXyNRqS7AuTW-sh-FeI1CzWTVgTBDSYjSfsHOen_MINfE3_D85WH5qFX59QUFdsRyJo7tTsRSueLLVBHn7BZPsghO3p81n2b9tujhiCPIxY1r5WSTzxqp_KscrHRPYdfT4BQLSbYY6KdKvjiaEkVaDHlfwu4-uPPPKnRbRODPL9RtFKqq" />
                    </div>
                </div>
            </div>
        </div>
    );
};
