export default function LogoSection() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#171717] to-[#1E1E1E] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-screen-2xl relative mx-auto py-10 px-4 w-full text-center left-0 top-0">
          <h1 className="text-2xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-green-500 via-green-600 to-green-800 pb-2">
            Turtle papa powered by{" "}
          </h1>
          <p className="max-w-5xl text-base mx-auto md:text-xl mt-8 text-white/90 dark:text-neutral-200">
            Turtle Papa Token (TUPA) is powered by leading platforms CoinGecko,
            CoinMarketCap, and Solana, ensuring visibility, liquidity, and
            seamless integration within the cryptocurrency ecosystem. With the
            support of these trusted partners, TUPA offers users a secure and
            accessible gateway to participate in the Solana blockchain
            ecosystem.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none">
          <img
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            src="/images/logos/coingecko.png"
            alt="coingecko"
            width={200}
            height={64}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/images/logos/coinmarketcap.png"
            alt="coinmarketcap"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/images/logos/Solana.png"
            alt="Solana"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="/images/logos/uniswap.png"
            alt="uniswap"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="/images/logos/jupiter.png"
            alt="jupiter"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="/images/logos/ethereum.png"
            alt="ethereum"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="/images/logos/raydium.png"
            alt="raydium"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-40 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="/images/logos/binance.svg"
            alt="binance"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
