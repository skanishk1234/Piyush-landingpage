import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Page() {
  return (
    <>
      <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#171717] to-[#1E1E1E] py-12 px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="max-w-3xl mt-32 text-white mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4 text-white">Cookies Policy</h1>
          <p className="mb-4">
            At TurtlePapa.com, we are committed to enhancing your experience
            within the decentralized and crypto-centric environment of our
            website. By continuing to navigate our site, you consent to our use
            of cookies.
          </p>
          <h2 className="text-xl font-bold mb-2">What are cookies?</h2>
          <p className="mb-4">
            Cookies are tiny text files stored on your device when you access
            our website. They allow us to remember specific information about
            your visit, like your preferred settings, and enable us to optimize
            your experience within the crypto space.
          </p>
          <h2 className="text-xl font-bold mb-2">How we use cookies</h2>
          <p className="mb-4">
            <strong>Essential Cookies:</strong> These cookies ensure that our
            website functions properly. Without them, certain blockchain-related
            features may not operate as intended.
          </p>
          <p className="mb-4">
            <strong>Performance Cookies:</strong> These cookies help us analyze
            how users interact with our crypto features, enabling us to make
            improvements to the site&apos;s functionality.
          </p>
          <p className="mb-4">
            <strong>Third-Party Cookies:</strong> We may use third-party cookies
            to offer additional crypto-related services, such as embedded
            exchange widgets or social media plugins. These cookies are
            controlled by respective third-party providers and may track your
            activity across other sites.
          </p>
          <p className="mb-4">
            <strong>Crypto Cookies:</strong> These cookies enable us to provide
            personalized cryptocurrency experiences, such as remembering your
            wallet address or preferred tokens.
          </p>
          <h2 className="text-xl font-bold mb-2">Managing Cookies</h2>
          <p className="mb-4">
            You can manage or delete cookies using your browser settings.
            Disabling essential cookies may affect the functionality of certain
            crypto-related features on the site.
          </p>
          <p>
            If you have any questions or concerns about our use of cookies or
            this policy within the crypto context, please contact us at{" "}
            <a
              href="mailto:contact@turtlepapa.com"
              className="text-blue-500 hover:underline"
            >
              contact@turtlepapa.com
            </a>
            .
          </p>
          <p>
            By engaging with TurtlePapa.com, you agree to our use of cookies in
            accordance with this Cookies Policy.
          </p>
        </div>
        
      </div>
      <Footer />
    </>
  );
}
