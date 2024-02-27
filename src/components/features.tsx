'use client'

import { useEffect } from 'react'
import Image from 'next/image'
// import Illustration from '@/public/images/features-illustration.svg'
// import FeaturesIcon01 from '@/public/images/features/liquidity.svg'
// import FeaturesIcon02 from '@/public/images/features-icon-02.svg'
// import FeaturesIcon03 from '@/public/images/features-icon-03.svg'
// import FeaturesIcon04 from '@/public/images/features-icon-04.svg'

// Import Swiper
import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
Swiper.use([Autoplay, Navigation])

export default function Features() {

  useEffect(() => {
    const carousel = new Swiper('.carousel', {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 3.5,
        },
      },
      grabCursor: true,
      loop: true,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
  }, [])

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#171717] to-[#1E1E1E]">
      {/* Bg illustration */}
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none -mt-20 -z-10" aria-hidden="true">
        <Image src="/images/features-illustration.svg" className="max-w-none" width="1440" height="440" alt="Illustration" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-screen-2xl relative mx-auto py-20 md:pt-40 px-4 w-full text-center left-0 top-0">
          <h1 className="text-2xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-green-500 via-green-600 to-green-800 pb-2">
          Strategic Initiatives
          </h1>
          <p className="max-w-5xl text-base mx-auto md:text-xl mt-8 text-white/90 dark:text-neutral-200">
          The Strategic Initiatives highlights Turtle Papa Token&apos;s (TUPA) key strategies, including marketing campaigns, airdrop distributions, exchange listings, and liquidity provisioning, aimed at fostering community growth, enhancing market accessibility, and ensuring sustainable development. Through these initiatives, TUPA seeks to solidify its presence within the blockchain ecosystem while delivering tangible benefits to its stakeholders.
          </p>
        </div>
          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="carousel swiper-container">
            <div className="swiper-wrapper">
              {/* Carousel items */}
              <div className="swiper-slide !h-[25rem] flex flex-col bg-gradient-to-br from-white/5 to-[#1C1C1C] border-[#252525] border-4 p-6 rounded-2xl hover:bg-green-600">
                <Image className="mb-3" src="/images/features/marketing.svg" width={56} height={56} alt="Icon 01" />
                <div className="grow">
                  <div className="font-hkgrotesk text-white font-bold text-xl">Marketing Initiatives</div>
                  <div className="text-white/80 my-3">
                  The marketing fund will prioritize growing the $TUPA community, leveraging social media, crypto-focused platforms, and meme culture to engage potential users. Collaborations with influencers and other Solana projects will be key to expanding reach.
                  </div>
                </div>
                {/* <div className="text-right">
                  <a className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group" href="#0">
                    Learn More{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a>
                </div> */}
              </div>
              <div className="swiper-slide !h-[25rem] flex flex-col bg-gradient-to-br from-white/5 to-[#1C1C1C] border-[#252525] border-4 p-6 rounded-2xl hover:bg-green-600">
                <Image className="mb-3" src="/images/features/airdrop-f.svg" width={56} height={56} alt="Icon 02" />
                <div className="grow">
                  <div className="font-hkgrotesk  text-white font-bold text-xl">Airdrop Distribution</div>
                  <div className="text-white/80 my-3">
                  The airdrop strategy involves multiple phases to reward community members, from early supporters to new joiners, ensuring a wide and fair distribution. Special attention will be given to anti-sybil mechanisms to prevent abuse.
                  </div>
                </div>
                {/* <div className="text-right">
                  <a className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group" href="#0">
                    Learn More{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a>
                </div> */}
              </div>
              <div className="swiper-slide !h-[25rem] flex flex-col bg-gradient-to-br from-white/5 to-[#1C1C1C] border-[#252525] border-4 p-6 rounded-2xl hover:bg-green-600">
                <Image className="mb-3" src="/images/features/exchange.svg" width={56} height={56} alt="Icon 03" />
                <div className="grow">
                  <div className="font-hkgrotesk  text-white font-bold text-xl">Exchange Listings</div>
                  <div className="text-white/80 my-3">
                  Engaging with both centralized and decentralized exchanges from the beginning ensures $TUPA is readily available across the market, attracting a diverse group of traders and investors.
                  </div>
                </div>
                {/* <div className="text-right">
                  <a className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group" href="#0">
                    Learn More{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a>
                </div> */}
              </div>
              <div className="swiper-slide !h-[25rem] flex flex-col bg-gradient-to-br from-white/5 to-[#1C1C1C] border-[#252525] border-4 p-6 rounded-2xl hover:bg-green-600">
                <Image className="mb-3" src="/images/features/liquidity.svg" width={56} height={56} alt="Icon 04" />
                <div className="grow">
                  <div className="font-hkgrotesk  text-white font-bold text-xl">Liquidity Provisioning</div>
                  <div className="text-white/80 my-3">
                  A careful approach to liquidity will help manage the token&apos;s market entry, supporting price discovery and reducing volatility. The liquidity reserved for DEXs will also support the creation of a sustainable DeFi ecosystem around $TUPA.
                  </div>
                </div>
                {/* <div className="text-right">
                  <a className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group" href="#0">
                    Learn More{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a>
                </div> */}
              </div>
              <div className="swiper-slide !h-[25rem] flex flex-col bg-gradient-to-br from-white/5 to-[#1C1C1C] border-[#252525] border-4 p-6 rounded-2xl hover:bg-green-600">
                <Image className="mb-3" src="/images/features/marketing.svg" width={56} height={56} alt="Icon 01" />
                <div className="grow">
                  <div className="font-hkgrotesk text-white font-bold text-xl">Marketing Initiatives</div>
                  <div className="text-white/80 my-3">
                  The marketing fund will prioritize growing the $TUPA community, leveraging social media, crypto-focused platforms, and meme culture to engage potential users. Collaborations with influencers and other Solana projects will be key to expanding reach.
                  </div>
                </div>
                {/* <div className="text-right">
                  <a className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group" href="#0">
                    Learn More{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a>
                </div> */}
              </div>
              <div className="swiper-slide !h-[25rem] flex flex-col bg-gradient-to-br from-white/5 to-[#1C1C1C] border-[#252525] border-4 p-6 rounded-2xl hover:bg-green-600">
                <Image className="mb-3" src="/images/features/airdrop-f.svg" width={56} height={56} alt="Icon 02" />
                <div className="grow">
                  <div className="font-hkgrotesk  text-white font-bold text-xl">Airdrop Distribution</div>
                  <div className="text-white/80 my-3">
                  The airdrop strategy involves multiple phases to reward community members, from early supporters to new joiners, ensuring a wide and fair distribution. Special attention will be given to anti-sybil mechanisms to prevent abuse.
                  </div>
                </div>
                {/* <div className="text-right">
                  <a className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group" href="#0">
                    Learn More{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a>
                </div> */}
              </div>
              <div className="swiper-slide !h-[25rem] flex flex-col bg-gradient-to-br from-white/5 to-[#1C1C1C] border-[#252525] border-4 p-6 rounded-2xl hover:bg-green-600">
                <Image className="mb-3" src="/images/features/exchange.svg" width={56} height={56} alt="Icon 03" />
                <div className="grow">
                  <div className="font-hkgrotesk  text-white font-bold text-xl">Exchange Listings</div>
                  <div className="text-white/80 my-3">
                  Engaging with both centralized and decentralized exchanges from the beginning ensures $TUPA is readily available across the market, attracting a diverse group of traders and investors.
                  </div>
                </div>
                {/* <div className="text-right">
                  <a className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group" href="#0">
                    Learn More{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a>
                </div> */}
              </div>
              <div className="swiper-slide !h-[25rem] flex flex-col bg-gradient-to-br from-white/5 to-[#1C1C1C] border-[#252525] border-4 p-6 rounded-2xl hover:bg-green-600">
                <Image className="mb-3" src="/images/features/liquidity.svg" width={56} height={56} alt="Icon 04" />
                <div className="grow">
                  <div className="font-hkgrotesk  text-white font-bold text-xl">Liquidity Provisioning</div>
                  <div className="text-white/80 my-3">
                  A careful approach to liquidity will help manage the token&apos;s market entry, supporting price discovery and reducing volatility. The liquidity reserved for DEXs will also support the creation of a sustainable DeFi ecosystem around $TUPA.
                  </div>
                </div>
                {/* <div className="text-right">
                  <a className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group" href="#0">
                    Learn More{' '}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          {/* Arrows */}
          <div className="flex mt-12 space-x-4 justify-end">
            <button className="carousel-prev relative z-20 w-16 h-16 rounded-2xl hover:bg-green-600-full flex items-center justify-center group bg-gradient-to-br from-white/5  to-[#1C1C1C] border-[#252525] border-4 hover:bg-slate-700 transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg className="w-4 h-4 fill-slate-400 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-16 h-16 rounded-2xl hover:bg-green-600-full flex items-center justify-center group bg-gradient-to-br from-white/5  to-[#1C1C1C] border-[#252525] border-4 hover:bg-slate-700 transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
              <svg className="w-4 h-4 fill-slate-400 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}