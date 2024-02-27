"use client";

import Image from "next/image";
import { Tabs } from "./tabs";

export function RoadmapSection2() {
  const tabs = [
    {
      title: "Innovation Fund Launch",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full p-10 bg-gradient-to-br from-[#171717] to-[#1E1E1E] border-[#252525] border-4 rounded-2xl">
          <Innovation />
        </div>
      ),
    },
    {
      title: "Global Meetups and Conferences",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full p-10 bg-gradient-to-br from-[#171717] to-[#1E1E1E] border-[#252525] border-4 rounded-2xl">
          <Meetups />
        </div>
      ),
    },
    {
      title: "Continuous Improvement",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full p-10 bg-gradient-to-br from-[#171717] to-[#1E1E1E] border-[#252525] border-4 rounded-2xl">
          <Improvement />
        </div>
      ),
    },
  ];

  return (
    <div className="pb-40">
      <div className="h-[80rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
      <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

const Innovation = () => {
  return (
    <div className="">
        <div className="lg:max-w-4xl">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Innovation Fund Launch</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">Create a fund to invest in innovative projects within the $TUPA ecosystem, fostering growth and development of new utilities and applications. In partnership with the MEME MAFIA ecosystem, this initiative aims to synergize with like-minded projects and communities in the meme and broader crypto space. By leveraging the networks, resources, and creativity of both ecosystems, the Innovation Fund will prioritize investments in projects that - </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div className="relative pl-9">
              <dt className="inline">
                <svg className="absolute left-1 top-1 h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                </svg>
              </dt>
              <dd className="inline text-gray-200">Enhance the utility and adoption of $TUPA across different platforms and sectors.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline">
                <svg className="absolute left-1 top-1 h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                </svg>
              </dt>
              <dd className="inline text-gray-200">Promote the values and cultural impact of the meme crypto community, driving mainstream awareness and engagement.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline">
                <svg className="absolute left-1 top-1 h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                  <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                </svg>
              </dt>
              <dd className="inline text-gray-200">Explore novel DeFi, NFT, and social gaming integrations that can benefit from the unique characteristics of meme tokens and the vibrant communities behind them.</dd>
            </div>
          </dl>
        </div>
      </div>
  );
};
const Meetups = () => {
  return (
    <div className="">
        <div className="lg:max-w-4xl">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Global Meetups and Conferences</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">Organize and participate in global crypto events to strengthen the $TUPA community and attract international attention. Collaborative events with the MEME MAFIA ecosystem will be a cornerstone of this effort, showcasing the power of partnerships in the meme token sector.</p>
        </div>
      </div>
  );
};
const Improvement = () => {
  return (
    <div className="">
        <div className="lg:max-w-4xl">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Continuous Improvement</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">Regularly update the community on developments, improvements, and new features based on technological advancements and community feedback. This will include lessons learned and successes from the Innovation Fund&apos;s investments, especially those connected with the MEME MAFIA ecosystem, to ensure that $TUPA remains at the forefront of innovation and community engagement. </p>
        </div>
      </div>
  );
};
