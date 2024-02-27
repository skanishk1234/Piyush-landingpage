import { CheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { RoadmapSection2 } from "./RoadmapSection2";

const steps = [
  {
    name: "Q1 2024",
    step: "01",
    description: "Launch Phase",
    status: "phaseOne",
  },
  {
    name: "Q2 2024",
    step: "02",
    description: "Community and Ecosystem Development",
    status: "phaseTwo",
  },
  {
    name: "Q3 2024",
    step: "03",
    description: "Expansion and Utility Enhancement",
    status: "phaseThree",
  },
  {
    name: "Q4 2024",
    step: "04",
    description: "Scalability and Sustainability",
    status: "phaseFour",
  },
];

const phaseOneTexts = [
  "Token Generation Event (TGE): Official minting of 1 billion $TUPA tokens.",
  "DEX Listing: List $TUPA on leading Solana-based decentralized exchanges (DEXs) to ensure initial liquidity.",
  "Marketing Blitz: Initiate aggressive marketing campaigns across social media, crypto forums, and influencer networks to build awareness.",
];
const phaseTwoTexts = [
  "Community Rewards Program: Introduce ongoing rewards for community engagement, content creation, and social sharing.",
  "Partnership Announcements: Reveal strategic partnerships with other Solana projects and platforms to enhance the $TUPA ecosystem.",
  "First Major Update: Release updates on the utility and governance features of $TUPA, including staking mechanisms or participation in governance decisions.",
];
const phaseThreeTexts = [
  "CEX Listings: Secure listings on multiple top-tier centralized exchanges to increase $TUPA's accessibility and liquidity.",
  "Launch of $TUPA-based DApps: Support the development and launch of decentralized applications (DApps) utilizing $TUPA for transactions, governance, or utility.",
  "Community DAO: Establish a Decentralized Autonomous Organization (DAO) for $TUPA holders to participate in project governance, decision-making, and treasury management.",
];
const phaseFourTexts = [
  "Cross-Chain Integrations: Expand $TUPA's utility by integrating with other blockchains, enhancing interoperability, and accessing broader DeFi ecosystems.",
  "Sustainability Initiatives: Implement initiatives aimed at long-term sustainability, including liquidity pools, yield farming options, and partnerships with eco-friendly projects.",
  "Second Airdrop and Rewards Adjustment: Conduct a second airdrop to attract new users and adjust the rewards program based on community feedback and tokenomics performance.",
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function RoadmapSection() {
  return (
    <>
      <div id="roadmap" className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#171717] to-[#1E1E1E]">
        <div className="max-w-screen-2xl relative mx-auto py-20 md:pt-40 px-4 w-full text-center left-0 top-0">
          <h1 className="text-2xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-green-500 via-green-600 to-green-800 pb-2">
            Our Roadmap
          </h1>
          <p className="max-w-5xl text-base mx-auto md:text-xl mt-8 text-white/90 dark:text-neutral-200">
          The Roadmap provides a comprehensive timeline for Turtle Papa Token (TUPA), detailing key milestones such as token generation, exchange listings, community development, and long-term scalability efforts, ensuring transparency and guiding stakeholders on the project&apos;s trajectory. With a strategic roadmap in place, TUPA aims to navigate the evolving cryptocurrency landscape, drive adoption, and realize its vision of becoming a prominent player within the blockchain ecosystem.
          </p>
        </div>
        <div className="max-w-7xl mx-auto pb-40">
          <nav aria-label="Progress">
            <ol role="list" className="overflow-hidden">
              {steps.map((step, stepIdx) => (
                <li
                  key={step.name}
                  className={classNames(
                    stepIdx !== steps.length - 1 ? "pb-20" : "",
                    "relative"
                  )}
                >
                  {step.status === "phaseOne" ? (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div
                          className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-800"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div
                        className="group relative flex flex-col md:flex-row items-start"
                        aria-current="step"
                      >
                        <div className="flex">
                        <span
                          className="flex h-9 items-center"
                          aria-hidden="true"
                        >
                          <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-green-600 bg-white">
                            <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                          </span>
                        </span>
                        <span className="ml-4 flex min-w-fit md:flex-col">
                          <span className="text-lg font-medium text-green-600">
                            {step.name}
                          </span>
                          <span className="ml-4 text-lg text-gray-500">
                            {step.step}
                          </span>
                        </span>
                        </div>
                        
                        <div className="md:ml-12 mt-6 md:mt-0 space-y-12 bg-gradient-to-br from-white/5 to-[#1C1C1C] md:border-[#252525] md:border-4 p-4 md:p-16 rounded-3xl">
                          <span className="ml-4 text-4xl bg-clip-text text-transparent bg-gradient-to-tr from-green-500 via-green-600 to-green-800 pb-2 font-bold">
                            {step.description}
                          </span>
                          <div className="ml-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {phaseOneTexts.map((text, index) => (
                              <div key={index} className="flex space-x-2">
                                <Image
                                  src="/images/green-tick.png"
                                  width={16}
                                  height={16}
                                  className="h-6 w-6"
                                  alt={`Icon ${index + 2}`}
                                />
                                <p className="text-base text-white">{text}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : step.status === "phaseTwo" ? (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div
                          className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-800"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div
                        className="group relative flex flex-col md:flex-row items-start"
                        aria-current="step"
                      >
                        <div className="flex">
                        <span
                          className="flex h-9 items-center"
                          aria-hidden="true"
                        >
                          <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-green-600 bg-white">
                            <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                          </span>
                        </span>
                        <span className="ml-4 flex min-w-fit md:flex-col">
                          <span className="text-lg font-medium text-green-600">
                            {step.name}
                          </span>
                          <span className="ml-4 text-lg text-gray-500">
                            {step.step}
                          </span>
                        </span>
                        </div>
                        
                        <div className="md:ml-12 mt-6 md:mt-0 space-y-12 bg-gradient-to-br from-white/5 to-[#1C1C1C] md:border-[#252525] md:border-4 p-4 md:p-16 rounded-3xl">
                          <p className="pl-4 text-4xl bg-clip-text text-transparent bg-gradient-to-tr from-green-500 via-green-600 to-green-800 pb-2 font-bold">
                            {step.description}
                          </p>
                          <div className="ml-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {phaseTwoTexts.map((text, index) => (
                              <div key={index} className="flex space-x-2">
                                <Image
                                  src="/images/green-tick.png"
                                  width={16}
                                  height={16}
                                  className="h-6 w-6"
                                  alt={`Icon ${index + 2}`}
                                />
                                <p className="text-base text-white">{text}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : step.status === "phaseThree" ? (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div
                          className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-800"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div
                        className="group relative flex flex-col md:flex-row items-start"
                        aria-current="step"
                      >
                        <div className="flex">
                        <span
                          className="flex h-9 items-center"
                          aria-hidden="true"
                        >
                          <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-green-600 bg-white">
                            <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                          </span>
                        </span>
                        <span className="ml-4 flex min-w-fit md:flex-col">
                          <span className="text-lg font-medium text-green-600">
                            {step.name}
                          </span>
                          <span className="ml-4 text-lg text-gray-500">
                            {step.step}
                          </span>
                        </span>
                        </div>
                        
                        <div className="md:ml-12 mt-6 md:mt-0 space-y-12 bg-gradient-to-br from-white/5 to-[#1C1C1C] md:border-[#252525] md:border-4 p-4 md:p-16 rounded-3xl">
                          <p className="pl-4 text-4xl bg-clip-text text-transparent bg-gradient-to-tr from-green-500 via-green-600 to-green-800 pb-2 font-bold">
                            {step.description}
                          </p>
                          <div className="ml-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {phaseThreeTexts.map((text, index) => (
                              <div key={index} className="flex space-x-2">
                                <Image
                                  src="/images/green-tick.png"
                                  width={16}
                                  height={16}
                                  className="h-6 w-6"
                                  alt={`Icon ${index + 2}`}
                                />
                                <p className="text-base text-white">{text}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div
                          className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-800"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div
                        className="group relative flex flex-col md:flex-row items-start"
                        aria-current="step"
                      >
                        <div className="flex">
                        <span
                          className="flex h-9 items-center"
                          aria-hidden="true"
                        >
                          <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-green-600 bg-white">
                            <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                          </span>
                        </span>
                        <span className="ml-4 flex min-w-fit md:flex-col">
                          <span className="text-lg font-medium text-green-600">
                            {step.name}
                          </span>
                          <span className="ml-4 text-lg text-gray-500">
                            {step.step}
                          </span>
                        </span>
                        </div>
                        
                        <div className="md:ml-12 mt-6 md:mt-0 space-y-12 bg-gradient-to-br from-white/5 to-[#1C1C1C] md:border-[#252525] md:border-4 p-4 md:p-16 rounded-3xl">
                          <p className="ml-4 text-4xl bg-clip-text text-transparent bg-gradient-to-tr from-green-500 via-green-600 to-green-800 pb-2 font-bold">
                            {step.description}
                          </p>
                          <div className="ml-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {phaseFourTexts.map((text, index) => (
                              <div key={index} className="flex space-x-2">
                                <Image
                                  src="/images/green-tick.png"
                                  width={16}
                                  height={16}
                                  className="h-6 w-6"
                                  alt={`Icon ${index + 2}`}
                                />
                                <p className="text-base text-white">{text}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
        <RoadmapSection2 />
      </div>
    </>
  );
}
