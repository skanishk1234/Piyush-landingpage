import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buy $TUPA Token | Turtle Papa is the Hottest MultiChain Meme Coin Ever - Turtle Papa",
  description: "Introducing Turtle Papa Token ($TUPA): Embodying the resilience and wisdom of its namesake, $TUPA offers a comprehensive ecosystem with features like staking, airdrops, and governance, fostering community engagement and driving positive impact. Buy and hold $TUPA tokens to gain access to the greatest airdrop of all time!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
