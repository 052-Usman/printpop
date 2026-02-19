export const TrustedBy = () => {
  return (
    <div className="pb-16 border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <p className="text-gray-500 font-comic uppercase tracking-widest text-sm mb-12 font-bold">
          Trusted Protection For Devices By
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center">
          {/* Apple / iPhone */}
          <div className="group flex flex-col items-center justify-center p-6 rounded-4xl bg-zinc-900/50 border border-gray-800 w-full h-32 hover:border-white/50 transition-all duration-500 relative overflow-hidden cursor-pointer shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <svg
              className="h-12 w-auto fill-gray-500 group-hover:fill-white transition-all duration-300 transform group-hover:scale-110"
              viewBox="0 0 384 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
            </svg>
            <span className="mt-2 text-xs text-gray-600 group-hover:text-white uppercase tracking-wider font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              iPhone Series
            </span>
          </div>

          {/* Samsung */}
          <div className="group flex flex-col items-center justify-center p-6 rounded-4xl bg-zinc-900/50 border border-gray-800 w-full h-32 hover:border-[#1428a0] transition-all duration-500 relative overflow-hidden cursor-pointer shadow-[0_0_0_rgba(20,40,160,0)] hover:shadow-[0_0_20px_rgba(20,40,160,0.5)]">
            <div className="absolute inset-0 bg-linear-to-b from-[#1428a0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <svg
              className="h-12 w-auto fill-gray-500 group-hover:fill-[#1428a0] transition-all duration-300 transform group-hover:scale-110"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Samsung</title>
              <path d="M19.8166 10.2808l.0459 2.6934h-.023l-.7793-2.6934h-1.2837v3.3925h.8481l-.0458-2.785h.023l.8366 2.785h1.2264v-3.3925zm-16.149 0l-.6418 3.427h.9284l.4699-3.1175h.0229l.4585 3.1174h.9169l-.6304-3.4269zm5.1805 0l-.424 2.6132h-.023l-.424-2.6132H6.5788l-.0688 3.427h.8596l.023-3.0832h.0114l.573 3.0831h.8711l.5731-3.083h.023l.0228 3.083h.8596l-.0802-3.4269zm-7.2664 2.4527c.0343.0802.0229.1949.0114.2522-.0229.1146-.1031.2292-.3324.2292-.2177 0-.3438-.126-.3438-.3095v-.3323H0v.2636c0 .7679.6074.9971 1.2493.9971.6189 0 1.1346-.2178 1.2149-.7794.0458-.298.0114-.4928 0-.5616-.1605-.722-1.467-.9283-1.5588-1.3295-.0114-.0688-.0114-.1375 0-.1834.023-.1146.1032-.2292.3095-.2292.2063 0 .321.126.321.3095v.2063h.8595v-.2407c0-.745-.6762-.8596-1.1576-.8596-.6074 0-1.1117.2063-1.2034.7564-.023.149-.0344.2866.0114.4585.1376.7106 1.364.9169 1.5358 1.3524m11.152 0c.0343.0803.0228.1834.0114.2522-.023.1146-.1032.2292-.3324.2292-.2178 0-.3438-.126-.3438-.3095v-.3323h-.917v.2636c0 .7564.596.9857 1.2379.9857.6189 0 1.1232-.2063 1.2034-.7794.0459-.298.0115-.4814 0-.5616-.1375-.7106-1.4327-.9284-1.5243-1.318-.0115-.0688-.0115-.1376 0-.1835.0229-.1146.1031-.2292.3094-.2292.1948 0 .321.126.321.3095v.2063h.848v-.2407c0-.745-.6647-.8596-1.146-.8596-.6075 0-1.1004.1948-1.192.7564-.023.149-.023.2866.0114.4585.1376.7106 1.341.9054 1.513 1.3524m2.8882.4585c.2407 0 .3094-.1605.3323-.2522.0115-.0343.0115-.0917.0115-.126v-2.533h.871v2.4642c0 .0688 0 .1948-.0114.2292-.0573.6419-.5616.8482-1.192.8482-.6303 0-1.1346-.2063-1.192-.8482 0-.0344-.0114-.1604-.0114-.2292v-2.4642h.871v2.533c0 .0458 0 .0916.0115.126 0 .0917.0688.2522.3095.2522m7.1518-.0344c.2522 0 .3324-.1605.3553-.2522.0115-.0343.0115-.0917.0115-.126v-.4929h-.3553v-.5043H24v.917c0 .0687 0 .1145-.0115.2292-.0573.6303-.596.8481-1.2034.8481-.6075 0-1.1461-.2178-1.2034-.8481-.0115-.1147-.0115-.1605-.0115-.2293v-1.444c0-.0574.0115-.172.0115-.2293.0802-.6419.596-.8482 1.2034-.8482s1.1347.2063 1.2034.8482c.0115.1031.0115.2292.0115.2292v.1146h-.8596v-.1948s0-.0803-.0115-.1261c-.0114-.0802-.0802-.2521-.3438-.2521-.2521 0-.321.1604-.3438.2521-.0115.0458-.0115.1032-.0115.1605v1.5702c0 .0458 0 .0916.0115.126 0 .0917.0917.2522.3323.2522" />
            </svg>
            <span className="mt-2 text-xs text-gray-600 group-hover:text-[#1428a0] uppercase tracking-wider font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              Galaxy Series
            </span>
          </div>

          {/* Google / Pixel */}
          <div className="group flex flex-col items-center justify-center p-6 rounded-4xl bg-zinc-900/50 border border-gray-800 w-full h-32 hover:border-white transition-all duration-500 relative overflow-hidden cursor-pointer shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_20px_rgba(66,133,244,0.4)]">
            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <svg
              className="h-12 w-auto fill-gray-500 group-hover:fill-white transition-all duration-300 transform group-hover:scale-110"
              viewBox="0 0 488 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
            </svg>
            <span className="mt-2 text-xs text-gray-600 group-hover:text-white uppercase tracking-wider font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              Pixel
            </span>
          </div>

          {/* OnePlus */}
          <div className="group flex flex-col items-center justify-center p-6 rounded-4xl bg-zinc-900/50 border border-gray-800 w-full h-32 hover:border-red-500 transition-all duration-500 relative overflow-hidden cursor-pointer shadow-[0_0_0_rgba(235,0,40,0)] hover:shadow-[0_0_20px_rgba(235,0,40,0.5)]">
            <div className="absolute inset-0 bg-linear-to-b from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center justify-center h-12 w-12 border-2 border-gray-500 group-hover:border-red-500 rounded-md transition-all duration-300 transform group-hover:scale-110">
              <span className="text-xl font-bold text-gray-500 group-hover:text-red-500 transition-colors">
                1+
              </span>
            </div>
            <span className="mt-2 text-xs text-gray-600 group-hover:text-red-500 uppercase tracking-wider font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              OnePlus
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
