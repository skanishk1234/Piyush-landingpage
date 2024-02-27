import Image from 'next/image'
import Link from 'next/link';

export default function StorySection() {

  return (
    <div id="story" className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#171717] to-[#1E1E1E] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-screen-2xl relative mx-auto mb-16 px-4 w-full text-center left-0 top-0">
          <h1 className="text-2xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-green-500 via-green-600 to-green-800 pb-2">
            Our Story
          </h1>
          <p className="max-w-5xl text-base mx-auto md:text-xl mt-8 text-white/90 dark:text-neutral-200">
          Introducing Turtle Papa Token (TUPA): Embodying the resilience and wisdom of its namesake, TUPA offers a comprehensive ecosystem with features like staking, airdrops, and governance, fostering community engagement and driving positive impact.
          </p>
        </div>

        <section>
          <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
            <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
              <div className="flex flex-col items-start gap-2">
                <p className="text-sm text-white/90 sm:text-xl">
                Once upon a time, in the depths of a tranquil sewer beneath the bustling city, lived a wise and gentle creature known as Turtle Papa. He wasn&apos;t just any turtle, though. Turtle Papa was the proud guardian of four remarkable Turtles - Leonard, Raph, Donnie, and Mikey.
                </p>
                <p className="text-sm text-white/90 sm:text-xl mt-4">
                Turtle Papa had seen many adventures in his long life, but nothing quite like the joy and challenge of raising his energetic and unique sons. Each of them had their own distinct personalities and talents, yet they all shared a common goal - to safeguard the city from the shadows and uphold justice, all while enjoying the occasional slice of pie.
                </p>
                <div className="flex  mt-6 font-semibold sm:flex-row">
                  <Link
                    href={'/about'}
                    className="text-sm font-medium leading-6 px-6 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-600 to-green-800 hover:from-green-900 hover:via-green-600 hover:to-green-900 text-white"
                  >
                    Read Full Story
                  </Link>
                </div>
              </div>
              <Image
                src="/images/story.svg"
                width={840}
                height={840}
                alt="Logo"
                className="w-full"
                priority
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
