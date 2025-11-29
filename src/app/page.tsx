import AboutCard from "@/components/aboutCard";
import AboutUs from "@/components/aboutSection";
import ContactUs from "@/components/contactUs";
import HeroSection from "@/components/heroSection";
import ReviewSection from "@/components/reviewSection";
import Image from "next/image";

const services = [
  {
    title: "Borehole Installation & Maintenance",
    image: "/images/borehole_drilling.jpg",
    info: "We provide expert level installations and after sales maintenance of pumps and boreholes to all our clients all over Ghana all at affordable prices"
  },
  {
    title: "Geological Surveying",
    image: "/images/survey.jpg",
    info: "Our teams of engineers and surveyors are elites in the systematic investigation of an area to map its rock formations, mineral resources, and subsurface structures"
  },
  {
    title: "Pump Testing",
    image: "/images/team.jpg",
    info: "Our after sales services are top-notched, and even if we did not install it, we will make sure you have no problems after we are done"
  },
  {
    title: "Water Quality Analysis",
    image: "/images/testing.jpg",
    info: ""
  },
];


export default function Home() {
  return (
    <div className="w-full bg-[url('/images/texture1.jpg')] bg-cover bg-center h-full">
      <nav className="w-full z-10 h-20 px-10 py-5 flex items-center justify-between fixed">
        <h1 className="text-white text-2xl font-bold">Pitatech Company LTD</h1>
        <a href="#contact-us">

        <button className="bg-white text-green-600 font-bold px-5 py-2 rounded-lg shadow-lg hover:bg-green-100">Get a Quote</button>
        </a>
      </nav>
      <HeroSection />
      <AboutUs services={services} />
      <ReviewSection />
      <ContactUs />
      <footer className="w-full bg-green-400 h-20 px-10 py-5 flex flex-col items-center justify-center gap-3">
        <h1 className="text-black z-10 font-bold text-sm">© 2025 Pitatech Company LTD</h1>
        <h6 className="text-xs">Powered by <span className="font-semibold">T & N Digital Solutions</span></h6>
      </footer>
    </div>
  );
}
