import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Page() {
  return (
    <>
      <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#171717] to-[#1E1E1E] py-12 px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="max-w-3xl mt-32 mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="mb-4">
            At TurtlePapa.com, we value your privacy. This privacy policy
            explains what information we collect from you and how we use it. We
            will never release your private information to third parties.
          </p>
          <h2 className="text-xl font-bold mb-2">What Data We Collect</h2>
          <ul className="list-disc pl-4 mb-4">
            <li>Your Name and Email: if you choose to provide them.</li>
            <li>
              Technical Information: like your IP address and browser type.
            </li>
            <li>Crypto Information: such as your wallet addresses.</li>
          </ul>
          <h2 className="text-xl font-bold mb-2">How We Use Your Data</h2>
          <p className="mb-4">We use this information to:</p>
          <ul className="list-disc pl-4 mb-4">
            <li>Make our website work for you.</li>
            <li>Keep everything safe and secure.</li>
            <li>
              Help us understand what you need so we can make our website
              better.
            </li>
          </ul>
          <h2 className="text-xl font-bold mb-2">Keeping Your Data Safe</h2>
          <p className="mb-4">
            We take special care to keep your information safe:
          </p>
          <h2 className="text-xl font-bold mb-2">Holding onto Your Data</h2>
          <p className="mb-4">
            We only keep your information for as long as we need it. After that,
            we delete it.
          </p>
          <h2 className="text-xl font-bold mb-2">No Third Parties</h2>
          <p className="mb-4">
            We promise not to give your information to any third-party
            companies. Your privacy is important to us.
          </p>
          <h2 className="text-xl font-bold mb-2">Talk to Us</h2>
          <p>
            If you have any questions or need help with anything, you can email
            us at{" "}
            <a
              href="mailto:contact@turtlepapa.com"
              className="text-blue-500 hover:underline"
            >
              contact@turtlepapa.com
            </a>
            .
          </p>
        </div>
        
      </div>
      <Footer />
    </>
  );
}
