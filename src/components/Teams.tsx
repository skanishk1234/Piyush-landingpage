const people = [
    {
      name: 'Duncan Davies',
      role: 'Chief Executive Officer',
      imageUrl: '/images/teams/t1.png',
    },
    {
      name: 'Billy Clarke',
      role: 'Chief Technology Officer',
      imageUrl: '/images/teams/t2.png',
    },
    {
      name: 'Oscar Wilson',
      role: 'Chief Marketing Officer',
      imageUrl: '/images/teams/t3.png',
    },
    {
      name: 'Dmitriy Sokolov',
      role: 'Chief Operating Officer',
      imageUrl: '/images/teams/t4.png',
    },
    {
      name: 'Taarush Bandyopadhyay',
      role: 'Chief Financial Officer',
      imageUrl: '/images/teams/t5.png',
    },
    {
      name: 'Vivaan Muhammad',
      role: 'Chief Information Officer',
      imageUrl: '/images/teams/t6.png',
    },
    {
      name: 'Aleksandr Kuznetsov',
      role: 'Chief Development Officer',
      imageUrl: '/images/teams/t7.png',
    },
    {
      name: 'Paul Farhi',
      role: 'Chief Communications Officer',
      imageUrl: '/images/teams/t8.png',
    },
  ];
  
    export default function Teams() {
      return (
        <div className="py-24 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#171717] to-[#1E1E1E]">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="relative top-0 left-0 w-full px-4 py-20 mx-auto text-center max-w-screen-2xl md:pt-40">
          <h1 className="pb-2 text-2xl font-bold text-transparent md:text-7xl bg-clip-text bg-gradient-to-tr from-green-500 via-green-600 to-green-800">
            Our Team
          </h1>
          <p className="max-w-5xl mx-auto mt-8 text-base md:text-xl text-white/90 dark:text-neutral-200">
          Meet the dedicated team behind Turtle Papa Token (TUPA), driving innovation, fostering community engagement, and steering the project towards its ambitious goals. With a wealth of experience and a passion for blockchain technology, our
team is committed to delivering transparency, sustainability, and value to our users.
          </p>
        </div>
            <ul
              role="list"
              className="grid max-w-2xl grid-cols-1 mx-auto mt-20 text-center gap-x-6 gap-y-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:mx-0 lg:max-w-none"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="hover:bg-green-500 h-[22rem] bg-gradient-to-br from-white/5 to-[#1C1C1C] border-[#252525] border-4 p-5 rounded-xl border-l-8 border-cta cursor-pointer hover:scale-105 transition-all ease-in-out duration-150">
                  <img className="w-48 h-48 mx-auto rounded-full" src={person.imageUrl} alt={person.name} />
                  <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-white uppercase">{person.name}</h3>
                  <p className="text-sm leading-6 text-gray-300">{person.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }
    