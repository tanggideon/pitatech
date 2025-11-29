import Image from "next/image";
import React from "react";

const ReviewSection = () => {
  return (
    <section className="w-full h-120 bg-green-300 flex flex-col items-center justify-center gap-10 px-10">
      <div className="flex flex-col gap-1">
        <h1 className="text-gray-600 font-bold text-2xl">
          What our clients say
        </h1>
        <div className="w-[25%] h-1 bg-white" />
      </div>
      <div className="h-80 w-full flex items-center justify-center flex-col gap-5">
        <div className="w-full md:w-1/3 h-60 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center relative">
          <div className="absolute -top-10 rounded-full h-25 w-25 bg-red-500">
            <Image
              src="/images/avatar.jpg"
              alt="Client 1"
              width={100}
              height={100}
              className="rounded-full border-4 border-white object-cover h-25 w-25"
            />
          </div>
          <p className="text-gray-500 italic">
            "Pitatech provided excellent service and support throughout our
            borehole installation project. Highly recommend!"
          </p>
          <p className="text-gray-700 font-bold mt-4">- Jane Doe</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-green-600 rounded-full h-3 w-3" />
          <div className="bg-green-600 rounded-full h-3 w-3" />
          <div className="bg-green-600 rounded-full h-3 w-3" />
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
