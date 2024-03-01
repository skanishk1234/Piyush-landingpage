import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = {
  support: [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "NFT’s", href: "#" },
    { name: "Tokenomics", href: "#" },
    { name: "Why Us", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "White Papers", href: "#" },
  ],
  social: [
    {
      name: "Discord",
      href: "https://discord.gg/vA3DZ72T",
      icon: (props: any) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          viewBox="0 0 24 24"
          fill="none"
          {...props}
        >
          <circle cx={12} cy={12} r={12} fill="url(#a)" />
          <path
            fill="#fff"
            d="M9.888 7.5c-.406 0-1.631.504-1.851.604-.22.101-.464.415-.741.934-.277.519-.5 1.125-.861 2.017-.362.892-.446 2.611-.434 3.136.012.525.072.934.602 1.245.53.31 1 .635 1.494.83.494.195.83.336 1.06.14.229-.195.38-.537.38-.537s.216-.305-.193-.488c-.41-.183-.615-.311-.597-.5.018-.19.048-.293.15-.269.103.025.344.464 1.272.665.927.201 1.831.171 1.831.171s.904.03 1.832-.17c.927-.202 1.168-.641 1.27-.666.103-.024.133.08.15.268.019.19-.186.318-.595.501-.41.183-.193.488-.193.488s.15.342.38.537c.228.196.566.055 1.06-.14.493-.195.963-.52 1.493-.83.53-.31.59-.72.602-1.245.012-.525-.072-2.244-.433-3.136-.362-.892-.584-1.498-.862-2.017-.276-.519-.52-.833-.74-.934-.22-.1-1.446-.604-1.852-.604-.407 0-.527.287-.527.287l-.142.317s-.951-.183-1.436-.183c-.486 0-1.45.183-1.45.183l-.142-.317s-.12-.287-.527-.287Zm.045 3.808h.015c.592 0 1.072.525 1.072 1.173 0 .649-.48 1.174-1.072 1.174-.593 0-1.073-.525-1.073-1.174 0-.642.471-1.164 1.058-1.173Zm4.12 0h.015c.587.009 1.058.532 1.058 1.173 0 .649-.48 1.174-1.073 1.174s-1.073-.525-1.073-1.174c0-.648.48-1.173 1.073-1.173Z"
          />
          <defs>
            <linearGradient
              id="a"
              x1={-10.125}
              x2={26.043}
              y1={-6.818}
              y2={21.984}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.149} stopColor="#22C55E" />
              <stop offset={0.684} stopColor="#18763C" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "Telegram",
      href: "https://t.me/TurtlePapaOfficial",
      icon: (props: any) => (
        <svg
          width={48}
          height={48}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_343_21)" />
          <path
            d="M6.72388 11.4599C9.69732 10.1898 11.6801 9.3525 12.6721 8.94795C15.5047 7.79286 16.0933 7.59221 16.4769 7.58551C16.5613 7.58413 16.75 7.60463 16.8722 7.70185C16.9754 7.78394 17.0038 7.89483 17.0173 7.97266C17.0309 8.05049 17.0479 8.22779 17.0344 8.36632C16.8809 9.94755 16.2167 13.7848 15.8788 15.5558C15.7358 16.3051 15.4543 16.5564 15.1818 16.581C14.5894 16.6344 14.1397 16.1972 13.566 15.8285C12.6683 15.2516 12.1611 14.8924 11.2897 14.3295C10.2827 13.6788 10.9355 13.3213 11.5094 12.7368C11.6596 12.5839 14.2694 10.2566 14.3199 10.0455C14.3262 10.0191 14.3321 9.92068 14.2724 9.86871C14.2128 9.81673 14.1248 9.83451 14.0613 9.84864C13.9712 9.86868 12.5371 10.798 9.75894 12.6366C9.35188 12.9106 8.98317 13.0442 8.65282 13.0372C8.28864 13.0295 7.58809 12.8353 7.06731 12.6693C6.42855 12.4658 5.92088 12.3581 5.96509 12.0124C5.98811 11.8323 6.24104 11.6482 6.72388 11.4599Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_343_21"
              x1="-10.125"
              y1="-6.81818"
              x2="26.0433"
              y2="21.9836"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.149" stop-color="#22C55E" />
              <stop offset="0.684" stop-color="#18763C" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://twitter.com/TurtlePapa_",
      icon: (props: any) => (
        <svg
          width={48}
          height={48}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_343_24)" />
          <mask id="path-2-inside-1_343_24" fill="white">
            <path d="M6.02876 6.75L10.5541 12.9069L6.00024 17.9128H7.02521L11.0122 13.53L14.2334 17.9128H17.7212L12.9411 11.4096L17.1799 6.75H16.1549L12.4832 10.7864L9.51652 6.75H6.02876ZM7.53602 7.51816H9.13828L16.2137 17.1446H14.6115L7.53602 7.51816Z" />
          </mask>
          <path
            d="M6.02876 6.75L10.5541 12.9069L6.00024 17.9128H7.02521L11.0122 13.53L14.2334 17.9128H17.7212L12.9411 11.4096L17.1799 6.75H16.1549L12.4832 10.7864L9.51652 6.75H6.02876ZM7.53602 7.51816H9.13828L16.2137 17.1446H14.6115L7.53602 7.51816Z"
            fill="url(#paint1_linear_343_24)"
          />
          <path
            d="M6.02876 6.75V5.26691H3.0981L4.83374 7.62834L6.02876 6.75ZM10.5541 12.9069L11.6511 13.9049L12.4681 13.0068L11.7491 12.0286L10.5541 12.9069ZM6.00024 17.9128L4.90318 16.9148L2.64613 19.3959H6.00024V17.9128ZM7.02521 17.9128V19.3959H7.681L8.12229 18.9108L7.02521 17.9128ZM11.0122 13.53L12.2072 12.6517L11.1343 11.1918L9.9151 12.532L11.0122 13.53ZM14.2334 17.9128L13.0384 18.7911L13.4829 19.3959H14.2334V17.9128ZM17.7212 17.9128V19.3959H20.6519L18.9162 17.0344L17.7212 17.9128ZM12.9411 11.4096L11.8441 10.4116L11.0271 11.3097L11.7461 12.288L12.9411 11.4096ZM17.1799 6.75L18.277 7.74799L20.5339 5.26691H17.1799V6.75ZM16.1549 6.75V5.26691H15.4991L15.0578 5.75203L16.1549 6.75ZM12.4832 10.7864L11.2882 11.6647L12.3612 13.1246L13.5803 11.7843L12.4832 10.7864ZM9.51652 6.75L10.7115 5.87166L10.2671 5.26691H9.51652V6.75ZM7.53602 7.51816V6.03507H4.60535L6.341 8.3965L7.53602 7.51816ZM9.13828 7.51816L10.3333 6.63982L9.88881 6.03507H9.13828V7.51816ZM16.2137 17.1446V18.6277H19.1444L17.4087 16.2663L16.2137 17.1446ZM14.6115 17.1446L13.4164 18.023L13.8609 18.6277H14.6115V17.1446ZM4.83374 7.62834L9.35905 13.7853L11.7491 12.0286L7.22379 5.87166L4.83374 7.62834ZM9.45701 11.9089L4.90318 16.9148L7.09731 18.9108L11.6511 13.9049L9.45701 11.9089ZM6.00024 19.3959H7.02521V16.4297H6.00024V19.3959ZM8.12229 18.9108L12.1093 14.528L9.9151 12.532L5.92813 16.9148L8.12229 18.9108ZM9.81713 14.4083L13.0384 18.7911L15.4285 17.0345L12.2072 12.6517L9.81713 14.4083ZM14.2334 19.3959H17.7212V16.4297H14.2334V19.3959ZM18.9162 17.0344L14.1361 10.5313L11.7461 12.288L16.5262 18.7912L18.9162 17.0344ZM14.0382 12.4076L18.277 7.74799L16.0828 5.75201L11.8441 10.4116L14.0382 12.4076ZM17.1799 5.26691H16.1549V8.23309H17.1799V5.26691ZM15.0578 5.75203L11.3861 9.78839L13.5803 11.7843L17.252 7.74797L15.0578 5.75203ZM13.6783 9.90802L10.7115 5.87166L8.3215 7.62834L11.2882 11.6647L13.6783 9.90802ZM9.51652 5.26691H6.02876V8.23309H9.51652V5.26691ZM7.53602 9.00126H9.13828V6.03507H7.53602V9.00126ZM7.94326 8.3965L15.0187 18.023L17.4087 16.2663L10.3333 6.63982L7.94326 8.3965ZM16.2137 15.6615H14.6115V18.6277H16.2137V15.6615ZM15.8065 16.2663L8.73105 6.63982L6.341 8.3965L13.4164 18.023L15.8065 16.2663Z"
            fill="white"
            mask="url(#path-2-inside-1_343_24)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_343_24"
              x1="-10.125"
              y1="-6.81818"
              x2="26.0433"
              y2="21.9836"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.149" stop-color="#22C55E" />
              <stop offset="0.684" stop-color="#18763C" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_343_24"
              x1="7.37074"
              y1="8.18669"
              x2="20.759"
              y2="12.1145"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.081971" stop-color="#171717" />
              <stop offset="0.75264" stop-color="#1E1E1E" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[url('/images/footer-bg.svg')] pt-40 bg-cover" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="space-x-10 flex items-center flex-col md:flex-row space-y-6 md:space-y-0 justfiy-center">
          <div className="flex flex-col max-w-lg text-center md:text-left space-y-3">
          <p className="text-sm leading-5 text-gray-400">
            &copy; 2024 $TUPA All Rights Reserved.
          </p>
          <p className="text-sm leading-5 text-gray-400">
            Disclaimer: $TUPA Token is a meme coin made for entertainment purposes. We make no promises about future value, so be responsible. Crypto may be unregulated in your jurisdiction. Profits may be subject to taxes. Always do your own research before aping.
            </p>
            <div className="flex space-x-4 items-center justify-center md:items-start md:justify-start">
            <Link className="text-sm leading-5 hover:text-green-600 text-gray-200" href={"/privacy-policy"} >Privacy policy</Link>
              <Link className="text-sm leading-5 hover:text-green-600 text-gray-200" href={"/cookie-policy"} >Cookie policy</Link>
              </div>
          </div>
          <a href="#"><img className="h-20" src="/logo.svg" alt="Turtle Papa" /></a>
          

          <div className="flex flex-col items-left justify-center space-y-3">
          <p className="text-sm leading-5 text-gray-400">
            40A Turtle Papa Street, New Turtle City, Turtle Land, 9876, United
            States of Turtle
          </p>
          <a href="mailto:contact@turtlepapa.com" className="text-sm text-left leading-5 hover:text-green-600 text-gray-400">
            contact@turtlepapa.com
            </a>
            
          </div>
          <div className="flex space-x-6 justify-between">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-400"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-12 w-12" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
