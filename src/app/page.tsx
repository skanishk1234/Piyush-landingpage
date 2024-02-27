"use client";
import HeroSection from "@/components/HeroSection";
import { HeroParallax } from "../components/hero-parallax";

import React, { useState } from "react";
import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import Stats from "@/components/Stats";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import TokenomicsSection from "@/components/TokenomicsSection";
import SliderSection from "@/components/SliderSection";
import Features from "@/components/features";
import Features02 from "@/components/features-02";
import FinalThoughts from "@/components/FinalThoughts";
import Teams from "@/components/Teams";
import Image from "next/image";
import StorySection from "@/components/StorySection";
import LogoSection from "@/components/LogoSection";
import BuySection from "@/components/BuySection";
import RoadmapSection from "@/components/RoadmapSection";
import { LampDemo } from "@/components/lamp";
import { RoadmapSection2 } from "@/components/RoadmapSection2";

const products = [
  {
    title: "Moonbeam",
    link: "#",
    thumbnail: "/images/memes/m1.png",
  },
  {
    title: "Cursor",
    link: "#",
    thumbnail: "/images/memes/m2.png",
  },
  {
    title: "Rogue",
    link: "#",
    thumbnail: "/images/memes/m3.png",
  },

  {
    title: "Editorially",
    link: "#",
    thumbnail: "/images/memes/m4.png",
  },
  {
    title: "Editrix AI",
    link: "#",
    thumbnail: "/images/memes/m5.png",
  },
  {
    title: "Pixel Perfect",
    link: "#",
    thumbnail: "/images/memes/m6.png",
  },
  {
    title: "Algochurn",
    link: "#",
    thumbnail: "/images/memes/m7.png",
  },
  {
    title: "Aceternity UI",
    link: "#",
    thumbnail: "/images/memes/m8.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "#",
    thumbnail: "/images/memes/m9.png",
  },
  {
    title: "SmartBridge",
    link: "#",
    thumbnail: "/images/memes/m10.png",
  },
  {
    title: "Renderwork Studio",
    link: "#",
    thumbnail: "/images/memes/m11.png",
  },

  {
    title: "Creme Digital",
    link: "#",
    thumbnail: "/images/memes/m12.png",
  },
  {
    title: "Moonbeam",
    link: "#",
    thumbnail: "/images/memes/m13.png",
  },
  {
    title: "Cursor",
    link: "#",
    thumbnail: "/images/memes/m14.png",
  },
  {
    title: "Rogue",
    link: "#",
    thumbnail: "/images/memes/m15.png",
  },

  {
    title: "Editorially",
    link: "#",
    thumbnail: "/images/memes/m16.png",
  },
  {
    title: "Editrix AI",
    link: "#",
    thumbnail: "/images/memes/m17.png",
  },
  {
    title: "Pixel Perfect",
    link: "#",
    thumbnail: "/images/memes/m18.png",
  },
  {
    title: "Pixel Perfect",
    link: "#",
    thumbnail: "/images/memes/m19.png",
  },
  {
    title: "Pixel Perfect",
    link: "#",
    thumbnail: "/images/memes/m20.png",
  },
  {
    title: "Pixel Perfect",
    link: "#",
    thumbnail: "/images/memes/m21.png",
  },
];

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <LogoSection />
      <HeroParallax products={products} />
      <div id="features" className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#171717] to-[#1E1E1E]">
        <div className="max-w-screen-2xl relative mx-auto py-20 md:pt-40 px-4 w-full text-center left-0 top-0">
          <h1 className="text-2xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-green-500 via-green-600 to-green-800 pb-2">
            Key Features
          </h1>
          <p className="max-w-5xl text-base mx-auto md:text-xl mt-8 text-white/90 dark:text-neutral-200">
            Blockchain technology ensures the immutability of ownership records.
            Once a meme is tokenized as an NFT, its ownership history is
            securely stored on the blockchain.
          </p>
        </div>
        <BentoGridDemo />
      </div>
      <BuySection />
      <Teams />
      {/* <SliderSection /> */}
      <Features />
      <Features02 />
      <FinalThoughts />
      {/* <Stats /> */}
      <LampDemo />
      <TokenomicsSection />
      <RoadmapSection />
      {/* <RoadmapSection2 /> */}
      <CtaSection />
    </main>
  );
}

function BentoGridDemo() {
  return (
    <BentoGrid className="container 2xl:max-w-screen-2xl pb-20 px-4 sm:px-6 lg:px-8 md:pb-40 mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          // icon={item.icon}
          className={i === 2 || i === 6 ? "md:row-span-1" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Staking = () => (
  <div className="w-24 h-24 flex items-center justify-center rounded-xl shadow-inner bg-gradient-to-br from-neutral-900 to-neutral-900">
    <Image
      src="/images/features/staking.svg"
      className="w-16 h-16"
      width="480"
      height="414"
      alt="staking"
    />
  </div>
);
const Airdrops = () => (
  <div className="w-24 h-24 flex items-center justify-center rounded-xl shadow-inner bg-gradient-to-br from-neutral-900 to-neutral-900">
    <Image
      src="/images/features/airdrop.svg"
      className="w-16 h-16"
      width="480"
      height="414"
      alt="airdrop"
    />
  </div>
);
const Governance = () => (
  <div className="w-24 h-24 flex items-center justify-center rounded-xl shadow-inner bg-gradient-to-br from-neutral-900 to-neutral-900">
    <Image
      src="/images/features/governance.svg"
      className="w-16 h-16"
      width="480"
      height="414"
      alt="governance"
    />
  </div>
);

const items = [
  {
    title: "Staking",
    description:
      "Users can actively participate in staking activities to earn rewards and contribute to the network's security and stability.",
    header: <Staking />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Airdrops",
    description:
      "The Turtle Papa Project rewards its community through airdrops, distributing tokens to early adopters, contributors, and loyal supporters, incentivizing participation and fostering a strong and engaged community.",
    header: <Airdrops />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Governance",
    description:
      "Turtle Papa Project holders have the opportunity to participate in governance decisions, allowing them to vote on proposals and shape the future direction of the project, ensuring transparency and community involvement.",
    header: <Governance />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
