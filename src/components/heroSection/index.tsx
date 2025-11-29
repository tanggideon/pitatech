import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-[60vh] flex flex-col items-center bg-white justify-center bg-cover bg-center relative">
      <Image
        className="w-full h-full object-cover absolute inset-0"
        src="/images/bg1.jpeg"
        width={1000}
        height={1000}
        alt="hero image"
        objectFit="cover"
      />
      <div className="absolute z-1 inset-0 bg-linear-to-b/shorter from-transparent to-gray-700" />
      <div className="z-2 absolute inset-0 flex items-center justify-end pb-20 flex-col">
        <h1 className="font-extrabold text-3xl md:text-5xl text-white mb-5">
          Welcome to Pitatech Company LTD
        </h1>
        <p className="text-white text-center text-lg md:text-3xl px-10 shadow-2xl">
          Ghana's number one water solutions expert
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
