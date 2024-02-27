import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Page() {
  return (
    <>
      <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#171717] to-[#1E1E1E] py-12 px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="max-w-3xl mt-32 mx-auto">
          <h1 className="text-3xl text-white font-bold text-center mb-8">
            About Turtle Papa
          </h1>
          <div className="prose prose-lg text-gray-200">
            <p>
            Once upon a time, in the serene depths of a tranquil sewer beneath the bustling city, lived a wise and gentle creature known as Turtle Papa. He wasn&apos;t just any turtle; Turtle Papa was the epitome of wisdom, strength, and compassion. As the proud guardian of four remarkable turtles - Leonard, Raph, Donnie, and Mikey - Turtle Papa embarked on a journey unlike any other, instilling in his sons the values of courage, unity, and resilience.
            </p>
            <p>
            Turtle Papa had seen many adventures in his long life, but nothing quite like the joy and challenge of raising his energetic and unique sons. Each of them had their distinct personalities and talents, yet they all shared a common goal - to safeguard the city from the shadows and uphold justice, all while enjoying the occasional slice of pie.
            </p>
            <p>
            Leonard, the eldest and the leader of the group, possessed the wisdom and discipline of a seasoned warrior. Raph, with his fiery spirit and unyielding determination, was the brawn of the team, always ready to leap into action. Donnie, the ingenious inventor, could fashion gadgets and contraptions that aided them in their quests. And last but not least, Mikey, the youngest and most carefree of them all, brought levity and humor to even the direst situations.
            </p>
            <p>
            Amidst their adventures, Turtle Papa ensured to impart essential life lessons to his sons, emphasizing the importance of family, unity, and empathy. Through his guidance, the turtles learned valuable virtues that would shape them into formidable heroes.
            </p>
            <p>
            The Turtle Papa Project embodies the spirit of its namesake, offering a comprehensive suite of features and utilities designed to empower its community and drive positive social impact.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
