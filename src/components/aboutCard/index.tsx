"use client"
import Image from "next/image";
import { useState } from "react";

const AboutCard = ({ image, title, info }: { image: string; title: string; info: string }) => {

  const [open, setOpen] = useState(false);

  return (
    <div className="w-100">
      <div className="relative w-full h-60">
        <Image
          src={image}
          alt="About Us"
          width={320}
          height={320}
          className="rounded-t-lg w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-b/shorter from-transparent to-gray-700" />

        <div className="absolute z-2 bottom-5 left-10 flex flex-col gap-2">
          <h1 className="font-bold text-lg text-gray-100">{title}</h1>

          <button
            onClick={() => setOpen(!open)}
            className="bg-green-400 cursor-pointer hover:bg-green-300 transition rounded-md px-5 py-2 text-sm font-semibold"
          >
            {open ? "Hide" : "Learn More"}
          </button>
        </div>
      </div>

      {/* Slide-down content */}
      <div
        className={`
          overflow-hidden transition-all duration-500 
          ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <p className="p-4 text-gray-800 bg-gray-100">
          {info}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
