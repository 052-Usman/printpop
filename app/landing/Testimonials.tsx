export const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-36">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-36 left-32 w-[180px] h-[180px] bg-secondary opacity-20 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-4000"></div>
        <div className="absolute top-[calc(80%-128px)] right-32 w-[180px] h-[180px] bg-primary opacity-15 blur-[100px] rounded-full mix-blend-screen animate-pulse duration-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="font-neon text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-shadow-[0_0_30px_#5CE1E6]">CLIENT</span> <span className="text-neon-blue">SUCCESS</span> <span className="text-shadow-[0_0_30px_#5CE1E6]">STORIES</span>
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-secondary to-primary mx-auto rounded-full shadow-[0_0_10px_rgba(255,49,49,0.3)]"></div>
          <p className="mt-6 text-gray-400 font-comic text-lg max-w-2xl mx-auto">
            See how creators and rebels around the world are lighting up their devices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="p-8 rounded-2xl bg-[#112238] backdrop-blur-sm border border-white/5 relative group hover:border-secondary transition-all duration-300 hover:shadow-[0_0_30px_rgba(92,225,230,0.2)] animate-in fade-in slide-in-from-bottom-6 delay-100">
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-black rounded-full border-2 border-secondary flex items-center justify-center text-secondary shadow-[0_0_15px_rgba(92,225,230,0.5)]">
                <span className="material-symbols-outlined text-2xl">format_quote</span>
              </div>
            </div>
            <div className="mt-4 mb-6">
              <div className="flex text-primary mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm">star</span>
                ))}
              </div>
              <p className="text-gray-300 font-comic italic leading-relaxed">
                "The glow is actually insane. I work in a nightclub and my phone is literally a conversation starter every single time I pull it out."
              </p>
            </div>
            <div className="flex items-center border-t border-white/5 pt-6 mt-6">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-gray-700 to-black overflow-hidden mr-4 border border-white/10">
                <img
                  alt="Felix Night"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKaKwT3MF7KFPts3Ad3frHWCVqpgKQz_CBd9yEwi6K3beFUF2sXhnSA9Ek_vFLsfgGndkY0NF6Csy5ckVnd9t0Vn1-0HeRVhGo5Gn0ak3M4h9yNQkTYlcd9a_CUl-3NIDawBHKywzcsbcjjg6r6yUBrrv_burkrB99c-Y8SOFU9Hvop4XMf2V9xLTP2EJag5A1Zile5Ep8B91ef7RFeLZ34RCcFCCmZ2PRD20Af4AuoYSIzMSgEGcjTngf8TiI5DJVYwoZIYQeagGM"
                />
              </div>
              <div>
                <h4 className="text-white font-bold font-neon text-sm tracking-wide">Felix Night</h4>
                <span className="text-xs text-secondary uppercase font-bold tracking-wider">DJ / Producer</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-8 rounded-2xl bg-[#112238] backdrop-blur-sm border border-white/5 relative group hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,49,49,0.2)] animate-in fade-in slide-in-from-bottom-6 delay-200">
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-black rounded-full border-2 border-primary flex items-center justify-center text-primary shadow-[0_0_15px_rgba(255,49,49,0.5)]">
                <span className="material-symbols-outlined text-2xl">format_quote</span>
              </div>
            </div>
            <div className="mt-4 mb-6">
              <div className="flex text-primary mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm">star</span>
                ))}
              </div>
              <p className="text-gray-300 font-comic italic leading-relaxed">
                "I dropped my phone on concrete yesterday. Not a scratch on the case, and the neon print is still perfect. Printpop is the real deal."
              </p>
            </div>
            <div className="flex items-center border-t border-white/5 pt-6 mt-6">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-gray-700 to-black overflow-hidden mr-4 border border-white/10">
                <img
                  alt="Sarah V."
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASKRk2BafLn5SPF15sznydrfQ4QatwzwkFyQQA3LiwjvHecwKM7PhXF1Xw5K_o1F0vOtfaWvssiq_DwBnsvYzrEK02nKUV8o0R2jvJ-r1Vv2l9mR-WFf_Eha1ALTO24kDy7gsVYmJcr25TAD5DHUc3CZGNX3YvvI-XVBCk7nWH0TkrrovoR0gjXVcA3s9N3auHE1k-APHBIoP9VxiF3yGdK-Z9p4dQIP1iKwoZ-39PGFRofHVV8y-NmcU2oMFeaqURnbjHVZQVb3Oj"
                />
              </div>
              <div>
                <h4 className="text-white font-bold font-neon text-sm tracking-wide">Sarah V.</h4>
                <span className="text-xs text-primary uppercase font-bold tracking-wider">Graphic Designer</span>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="p-8 rounded-2xl bg-[#112238] backdrop-blur-sm border border-white/5 relative group hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] animate-in fade-in slide-in-from-bottom-6 delay-300">
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-black rounded-full border-2 border-purple-500 flex items-center justify-center text-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                <span className="material-symbols-outlined text-2xl">format_quote</span>
              </div>
            </div>
            <div className="mt-4 mb-6">
              <div className="flex text-primary mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm">star</span>
                ))}
              </div>
              <p className="text-gray-300 font-comic italic leading-relaxed">
                "The custom builder was so easy to use. Uploaded my art, tweaked the neon borders, and it arrived looking better than on screen."
              </p>
            </div>
            <div className="flex items-center border-t border-white/5 pt-6 mt-6">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-gray-700 to-black overflow-hidden mr-4 border border-white/10">
                <img
                  alt="Marcus K."
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3PyZboDXZc-M10wIjwuHS-1sbn-UtORuLSHBIzV7zF9ORivyxITwv_afsZErJ97cmBpwb18Mb7YCUHF9bWx8D2eSR5xbeuSL6T8YZSrSHQ-OFJY9F7BT5Oq64j6U8UIvZJuh80C6z4CXcy7ccHyoKJ0INjWsAYDeTUR8KEdNKh9SwypTXFGttus9aH5k8VppiWTHkebj6gIgfppaXCiUtVpQy0gmByvM9mXKlH2Thzl_t5bjUCdXCIe7Qc3QHllKTGDIWbw23E-P7"
                />
              </div>
              <div>
                <h4 className="text-white font-bold font-neon text-sm tracking-wide">Marcus K.</h4>
                <span className="text-xs text-purple-500 uppercase font-bold tracking-wider">Digital Artist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
