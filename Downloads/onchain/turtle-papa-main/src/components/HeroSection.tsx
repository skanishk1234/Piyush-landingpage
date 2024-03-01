import Header from "@/components/Header";

export default function HeroSection() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#171717] to-[#1E1E1E]">
      <Header />
      <div className="relative isolate overflow-hidden pt-14">
        <img
          src="images/box-bg.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-white/30 to-white/10 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto flex flex-col items-center text-center">
              <div className="flex">
                <img
                  src="/images/float-icon-1.png"
                  alt="App screenshot"
                  width={200}
                  height={200}
                  className="hidden lg:block mt-8 w-auto h-40"
                />
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-tr from-green-500 via-green-600 to-green-800">
                  World&apos;s Best Community Driven Coin
                </h1>
                <img
                  src="/images/float-icon-2.png"
                  alt="App screenshot"
                  width={200}
                  height={200}
                  className="hidden lg:block mt-8 w-auto h-40"
                />
              </div>
              <img
                src="/images/turtle-papa-hero.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="lg:-mt-24 mt-4 w-auto h-20"
              />
              <p className="mt-6 flex text-lg items-center leading-8 text-gray-300">
                Powered By:
                <img
                  src="images/solana.svg"
                  alt="App screenshot"
                  className="ml-3 h-8 w-auto"
                />
                <img
                  src="images/bnb.svg"
                  alt="App screenshot"
                  className="ml-3 h-8 w-auto"
                />
                <img
                  src="images/etherium.svg"
                  alt="App screenshot"
                  className="ml-3 h-8 w-auto"
                />
              </p>
              <img
                src="/images/hero-turtle-papa.png"
                alt="App screenshot"
                className="mt-6 h-auto max-w-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
