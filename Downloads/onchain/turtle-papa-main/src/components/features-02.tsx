'use client'

import { useState } from 'react'
import Image from 'next/image'
// import Illustration from '@/public/images/features-illustration-02.svg'
// import FeaturesImage from '@/public/images/features-image.png'

export default function Features02() {

  const [category, setCategory] = useState<string>('1')

  return (
    <section className="relative bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#171717] to-[#1E1E1E]">
      {/* Bg gradient: top */}
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 mt-40 pointer-events-none -z-10" aria-hidden="true">
        <Image src="../../images/features-illustration-02.svg" className="max-w-none" width="1440" height="453" alt="Features 02 Illustration" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-screen-2xl relative mx-auto py-20 md:pt-40 px-4 w-full text-center left-0 top-0">
          <h1 className="text-2xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-green-500 via-green-600 to-green-800 pb-2">
          Additional Strategic Initiatives
          </h1>
          <p className="max-w-5xl text-base mx-auto md:text-xl mt-8 text-white/90 dark:text-neutral-200">
          The Additional Strategic Initiatives outlines Turtle Papa Token&apos;s (TUPA) collaborative efforts with MEME MAFIA ecosystem, focusing on mutual promotion, exclusive feature development, and feedback loops to maximize community engagement and innovation. By fostering synergies between the two ecosystems, TUPA aims to amplify its impact, expand its reach, and pioneer collaborative growth in the meme token space.
          </p>
        </div>
          {/* Box */}
          <div className="bg-gradient-to-br from-white/5  to-[#1C1C1C] border-[#252525] border-4 rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-end md:items-start md:justify-between lg:space-x-20">
              <div className="md:min-w-[28rem] p-6 lg:p-10">
                {/* Filters */}
                <div className="mb-6 lg:mb-8">
                  <div className="flex flex-wrap -m-1.5">
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${category === '1' ? 'bg-gradient-to-tr from-green-500 via-green-600 to-green-800 hover:from-green-900 hover:via-green-600 hover:to-green-900 text-white' : 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#171717] to-[#1E1E1E] text-white hover:to-green-600'
                        }`}
                      onClick={() => setCategory('1')}
                    >
                      Cross-Promotion
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${category === '2' ? 'bg-gradient-to-tr from-green-500 via-green-600 to-green-800 hover:from-green-900 hover:via-green-600 hover:to-green-900 text-white' : 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#171717] to-[#1E1E1E] text-white hover:to-green-600'
                        }`}
                      onClick={() => setCategory('2')}
                    >
                      Development
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${category === '3' ? 'bg-gradient-to-tr from-green-500 via-green-600 to-green-800 hover:from-green-900 hover:via-green-600 hover:to-green-900 text-white' : 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#171717] to-[#1E1E1E] text-white hover:to-green-600'
                        }`}
                      onClick={() => setCategory('3')}
                    >
                      Feedback and Collaboration Loop
                    </button>
                  </div>
                </div>
                {/* Content */}
                <div>
                  <div className={`${category !== '1' && 'hidden'}`}>
                    <h3 className="text-xl mb-2 text-white">Cross-Promotion with MEME MAFIA</h3>
                    <div className="text-lg text-white/80 my-3">
                    Engage in mutual promotion and support activities with the MEME MAFIA ecosystem to maximize visibility and adoption of both ecosystems. This could include shared airdrops, collaborative marketing campaigns, and joint community events.
                    </div>
                  </div>
                  <div className={`${category !== '2' && 'hidden'}`}>
                    <h3 className="text-xl mb-2 text-white">Development of MEME MAFIA Exclusive Features</h3>
                    <div className="text-lg text-white/80 my-3">
                    Explore the creation of features or services exclusive to members of the MEME MAFIA and $TUPA communities. This could involve special access to beta features, exclusive NFT drops, or unique DeFi opportunities.
                    </div>
                  </div>
                  <div className={`${category !== '3' && 'hidden'}`}>
                    <h3 className="text-xl mb-2 text-white">Feedback and Collaboration Loop</h3>
                    <div className="text-lg text-white/80 my-3">
                    Establish a structured feedback loop between the $TUPA project team, the MEME MAFIA ecosystem, and their respective communities. This will ensure that the projects funded by the Innovation Fund are closely aligned with community interests and the evolving landscape of meme culture in the blockchain space.
                    </div>
                  </div>
                </div>
              </div>
              <Image src="/images/features.svg" className="h-[28rem] w-auto" width="480" height="414" alt="Feature" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}