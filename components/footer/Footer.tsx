import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import { Newsletter } from "@/components/footer/Newsletter";

export function Footer() {
  return (
    <>
      <Newsletter />
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block relative">
              <Image
                src="/printpop-logo.svg"
                alt="PrintPop"
                width={160}
                height={50}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              We don't just protect phones; we turn them into glowing artifacts of
              your personality. Designed in Tokyo, shipped worldwide.
            </p>
          </div>

          {/* Shop Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-linear-to-b from-[#FF3131] to-[#FF3131]/0 rounded-full" />
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Shop
              </h3>
            </div>
            <ul className="space-y-4">
              {["New Arrivals", "Best Sellers", "Neon Series", "Gift Cards"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-[#FF3131] transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="text-gray-400 group-hover:text-[#FF3131] transition-colors">
                        ›
                      </span>
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-linear-to-b from-[#5CE1E6] to-[#5CE1E6]/0 rounded-full" />
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Support
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "Shipping & Returns",
                "Track Order",
                "FAQ",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-[#5CE1E6] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="text-gray-400 group-hover:text-[#5CE1E6] transition-colors">
                      ›
                    </span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-linear-to-b from-[#D946EF] to-[#D946EF]/0 rounded-full" />
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Connect
              </h3>
            </div>
            <div className="flex gap-4">
              {[
                {
                  icon: Twitter,
                  href: "#",
                  hoverClass:
                    "hover:bg-[#5CE1E6] hover:text-[#112238] shadow-[#5CE1E6]/25",
                },
                {
                  icon: Instagram,
                  href: "#",
                  hoverClass:
                    "hover:bg-[#FF3131] hover:text-white shadow-[#FF3131]/25",
                },
                {
                  icon: Linkedin,
                  href: "#",
                  hoverClass:
                    "hover:bg-purple-600 hover:text-white shadow-purple-600/25",
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 transition-all hover:scale-110 shadow-lg ${social.hoverClass}`}
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
            <p className="text-gray-500 text-xs">
              Tag us @PrintPop for a chance to be featured!
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Printpop Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-200 text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-200 text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
