"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="py-4 mt-8 text-4xl font-bold text-center text-transparent bg-gradient-to-br from-white to-white/60 bg-clip-text md:text-7xl"
      >
        $TUPA Token Addresses
        <img
          src="/images/logos/turtle-papa-coin.svg"
          alt="turtle-papa-coin"
          width={2432}
          height={1442}
          className="w-full mx-auto mt-4 h-64"
        />
        <p className="text-sm sm:text-xl font-medium rounded-xl border-l-2 border-white/80 cursor-pointer bg-white/10 hover:bg-gradient-to-tr from-green-500 via-green-600 to-green-800 px-6 py-4 transition-all duration-75 ease-in-out hover:scale-105 hover:text-white flex flex-col space-y-2">
          <p>SOL: <br className="sm:hidden" />xy1NogYK53gCsaDxCmsHe44<br className="sm:hidden" />cgrytZvKbGGqn7yaX25X <br /></p>
          <p>BNB: TBC (Available on April 2024) <br /></p>
          <p>ETH: TBC (Available on May 2024)</p>
        </p>
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen pt-24 flex-col items-center justify-center overflow-hidden bg-[#1E1E1E] w-full z-0",
        className
      )}
    >
      <div className="relative z-0 flex items-center justify-center flex-1 w-full scale-y-125 isolate ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-green-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-[#1E1E1E] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-[#1E1E1E]  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-green-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-[#1E1E1E]  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-[#1E1E1E] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#1E1E1E] blur-2xl"></div>
        <div className="absolute z-50 w-full h-48 bg-transparent top-1/2 opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-green-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-green-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-green-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[#1E1E1E] "></div>
      </div>

      <div className="relative z-50 flex flex-col items-center px-5 -translate-y-40">
        {children}
      </div>
    </div>
  );
};