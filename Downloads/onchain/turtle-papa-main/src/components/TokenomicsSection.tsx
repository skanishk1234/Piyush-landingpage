import Image from "next/image";

export default function TokenomicsSection() {
  return (
    <div
      id="tokenomics"
      className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#171717] to-[#1E1E1E] flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
    >
      <div className="mt-16 flex max-w-7xl flex-col items-center justify-center space-y-12 rounded-xl border-8 border-white/10 bg-black/30 px-6 py-8 md:flex-row md:space-x-24 md:space-y-0 md:px-16 md:py-12">
        <div className="flex-1">
          <div>
            <h3 className={`text-2xl font-bold md:text-4xl text-white`}>
              $TUPA Tokenomics Overview
            </h3>
            <p className="mt-2 text-base  text-white/80">
              Total Supply: 1,000,000,000 $TUPA Allocation
            </p>
          </div>
          <Image
            src="/images/graph.svg"
            width={600}
            height={600}
            alt="third"
            className="mt-6 lg:mt-12"
          />
          <div className="mt-8 flow-root">
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div className="overflow-hidden shadow ring-1 ring-white/10 sm:rounded-lg">
          <table className="min-w-full divide-y divide-white/10">
            <thead className="bg-white/10">
              <tr>
                <th scope="col" className="py-1.5 pl-4 pr-3 text-left text-xs font-semibold text-white sm:pl-6">Token Metrics</th>
                <th scope="col" className="px-3 py-1.5 text-left text-xs font-semibold text-white">$TUPA in % of total supply</th>
                <th scope="col" className="px-3 py-1.5 text-left text-xs font-semibold text-white">$TUPA In Token</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 bg-white/5">
              <tr>
                <td className="whitespace-nowrap py-2 pl-4 pr-3 text-xs font-medium text-white/80 sm:pl-6">Team</td>
                <td className="whitespace-nowrap px-3 py-2 text-xs text-white/80">10%</td>
                <td className="whitespace-nowrap px-3 py-2 text-xs text-white/80">10,00,00,000</td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-2 pl-4 pr-3 text-xs font-medium text-white/80 sm:pl-6">Marketing + CEX listing</td>
                <td className="whitespace-nowrap px-3 py-2 text-xs text-white/80">10.78%</td>
                <td className="whitespace-nowrap px-3 py-2 text-xs text-white/80">10,77,50,000</td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-2 pl-4 pr-3 text-xs font-medium text-white/80 sm:pl-6">Airdrop</td>
                <td className="whitespace-nowrap px-3 py-2 text-xs text-white/80">5%</td>
                <td className="whitespace-nowrap px-3 py-2 text-xs text-white/80">5,00,00,000</td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-2 pl-4 pr-3 text-xs font-medium text-white/80 sm:pl-6">Total Supply</td>
                <td className="whitespace-nowrap px-3 py-2 text-xs text-white/80">100%</td>
                <td className="whitespace-nowrap px-3 py-2 text-xs text-white/80">1,00,00,00,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
          {/* <div className="flex mt-4 flex-col space-y-6">
            <ul className="list-disc">
              <li>
              <span className="mt-2 font-medium text-white/80">
              Presale + Liquidity	: 500,000,000 $TUPA
            </span>
              </li>
              <li>
              <span className="mt-2 font-medium text-white/80">
              Airdrop Rewards (35%): 350,000,000 $TUPA
            </span>
              </li>
              <li>
              <span className="mt-2 font-medium text-white/80">
              Centralized Exchange (CEX) Launches (10%): 100,000,000 $TUPA
            </span>
              </li>
              <li>
              <span className="mt-2 font-medium text-white/80">
              Decentralized Exchange (DEX) Liquidity (5%): 50,000,000 $TUPA
            </span>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="flex flex-1 flex-col space-y-6">
          <div className="flex max-w-lg cursor-pointer flex-col rounded-xl border-l-2 border-cta bg-white/10 hover:bg-gradient-to-tr from-green-500 via-green-600 to-green-800 px-6 py-4 transition-all duration-75 ease-in-out hover:scale-105 hover:text-white">
            <span className="text-base text-white">
              To drive awareness, adoption, and engagement through various
              marketing channels. This allocation will support promotional
              activities, partnerships, influencer campaigns, and community
              events to bolster the $TUPA brand across the Solana ecosystem and
              beyond.
            </span>
          </div>
          <div className="flex max-w-lg cursor-pointer flex-col rounded-xl border-l-2 border-cta bg-white/10 hover:bg-gradient-to-tr from-green-500 via-green-600 to-green-800 px-6 py-4 transition-all duration-75 ease-in-out hover:scale-105 hover:text-white">
            <span className="text-base text-white">
              To distribute a significant portion of $TUPA tokens through
              airdrops to the TUPA community, rewarding early adopters and
              contributors. This greatest airdrop in history aims to incentivize
              participation and loyalty, providing a solid foundation for the
              token&apos;s user base.
            </span>
          </div>
          <div className="flex max-w-lg cursor-pointer flex-col rounded-xl border-l-2 border-cta bg-white/10 hover:bg-gradient-to-tr from-green-500 via-green-600 to-green-800 px-6 py-4 transition-all duration-75 ease-in-out hover:scale-105 hover:text-white">
            <span className="text-base text-white">
              Reserved for facilitating listings on top centralized exchanges.
              This liquidity is crucial for enhancing $TUPA&apos;s accessibility
              and trading volume, providing a gateway for a broader investor
              base.
            </span>
          </div>
          <div className="flex max-w-lg cursor-pointer flex-col rounded-xl border-l-2 border-cta bg-white/10 hover:bg-gradient-to-tr from-green-500 via-green-600 to-green-800 px-6 py-4 transition-all duration-75 ease-in-out hover:scale-105 hover:text-white">
            <span className="text-base text-white">
              To ensure sufficient liquidity on decentralized exchanges at
              launch. This allocation is essential for smooth trading
              experiences, minimizing slippage, and maintaining price stability.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
