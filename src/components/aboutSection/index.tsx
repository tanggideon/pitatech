import React from "react";
import AboutCard from "../aboutCard";

type Service = {
  image: string;
  title: string;
  info: string;
};

interface Props {
  services: Service[];
}

const AboutUs = ({ services }: Props) => {
  return (
    <section className="w-full flex flex-col items-center justify-center my-10 gap-10 px-10">
      <div className="flex flex-col gap-1">
        <h1 className="text-gray-600 font-bold text-2xl">About Us</h1>
        <div className="w-[65%] h-1 bg-green-500" />
      </div>
      <div className="flex flex-wrap justify-around w-full gap-10">
        {services.map((service, idx) => (
          <AboutCard key={idx} image={service.image} title={service.title} info={service.info}/>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
