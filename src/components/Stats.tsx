const stats = [
  {
    name: "99K+",
    description: "Artwork",
  },
  {
    name: "72K+",
    description: "Auction",
  },
  {
    name: "35K+",
    description: "Artist",
  },
  {
    name: "128K+",
    description: "NFTs Created",
  },
];

export default function Stats() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.name}>
              <div className="flex items-center">
                <svg
                  viewBox="0 0 4 4"
                  className="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                <div className="flex flex-col items-center">
                  <p className="text-4xl font-bold leading-8 tracking-tight text-white">
                    {" "}
                    {item.name}
                  </p>
                  <p className="mt-1 text-base leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-white/30 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
