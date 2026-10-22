'use client'
import React from 'react'
import Image from 'next/image'

export default function OpenNowMenu() {
  return (
    <section className="relative bg-[#1E3227] overflow-hidden py-32">
      {/* Wavy Top Divider */}


      {/* Scrolling Wavy Background Text */}
      <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden opacity-[0.07]">
        <style jsx>{`
                    @keyframes scroll-left {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes wave-y {
                        0%, 100% { transform: translateY(-30px); }
                        50% { transform: translateY(30px); }
                    }
                    .animate-scroll {
                        animation: scroll-left 30s linear infinite;
                    }
                    .animate-wave {
                        animation: wave-y 4s ease-in-out infinite;
                    }
                `}</style>
        <div className="flex whitespace-nowrap animate-scroll">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="text-white text-[18rem] font-black mx-12 uppercase tracking-tighter inline-block animate-wave"
              style={{ animationDelay: `${i * -0.4}s` }}
            >
              Open Now!
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black text-[#F5F4E0] uppercase tracking-tighter leading-none mb-4">
            Discover Our <span className="text-[#E25439]">Menu</span>
          </h2>
          <p className="text-[#F5F4E0]/60 text-lg font-medium tracking-wide uppercase">
            Authentic Artisan Pizza
          </p>
        </div>

        {/* Menu Image Container */}
        <div className="max-w-7xl mx-auto">
          {/* Two menu pages: side by side on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* Page 1: main pizza menu */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] border-4 border-[#F5F4E0]/10 hover:border-[#E25439]/50 transition-colors duration-500">
              <Image
                src="/menu/knead-menu-pizza.webp"
                alt="Knead Pizzeria menu: starters, artisan sourdough pizzas and extras"
                width={1414}
                height={2000}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Page 2: San-Dough's (highlighted, weekend lunch) */}
            <div id="san-dough" className="relative scroll-mt-28">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap rounded-full bg-[#E25439] px-6 py-2 text-[#F5F4E0] font-black uppercase tracking-widest text-xs md:text-sm shadow-xl">
                New &middot; San-Dough&rsquo;s &middot; Sat &amp; Sun 12&ndash;3pm
              </div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_0_60px_rgba(226,84,57,0.35)] border-4 border-[#E25439] transition-colors duration-500">
                <Image
                  src="/menu/knead-menu-san-dough.webp"
                  alt="Knead San-Dough's menu: sourdough sandos, available Saturday and Sunday 12pm to 3pm"
                  width={1414}
                  height={2000}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-[#F5F4E0]/80 mb-8 max-w-xl mx-auto text-lg italic">
              "Every pizza starts with high-quality ingredients and a lot of patience."
            </p>
            <a
              href="https://knead-pizzerria.square.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-5 bg-[#E25439] text-[#123218] rounded-full font-black uppercase tracking-widest text-sm hover:bg-[#c94733] hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Order This Deliciousness
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
