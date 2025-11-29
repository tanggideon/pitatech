import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <section
      className="w-full my-10 flex flex-col items-center justify-center gap-10 px-10"
      id="contact-us"
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-gray-600 font-bold text-2xl">Contact Us</h1>
        <div className="w-[70%] h-1 bg-green-500" />
      </div>
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-[50%] h-full flex flex-col md:flex-row px-5 items-center">
          <div className="h-full w-full md:w-[50%] flex items-center justify-center">
            <Image
              src="/images/map.png"
              alt="Contact Us"
              width={3000}
              height={3000}
              className="w-100 h-full object-cover"
            />
          </div>

          <div className="w-full md:w-[50%] h-full flex flex-col justify-around">
            <div>
              <div className="w-full flex flex-col gap-2">
                <h1 className="font-bold text-xl">Where are we?</h1>
                <div className="bg-green-400 w-full h-1" />
              </div>
              <div className="p-5">
                <ul className="flex flex-col gap-1">
                  <li className="font-semibold text-lg text-gray-600">Accra</li>
                  <li className="font-semibold text-lg text-gray-600">
                    Kumasi
                  </li>
                  <li className="font-semibold text-lg text-gray-600">Bolga</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col gap-2">
                <h1 className="font-bold text-xl">Email</h1>
                <div className="bg-green-400 w-full h-1" />
              </div>
              <div className="p-5">
                <ul className="flex flex-col gap-1">
                  <li className="font-semibold text-lg text-gray-600">
                    <a href="mailto:">pitatech.ltd@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col gap-2">
                <h1 className="font-bold text-xl">Telephone</h1>
                <div className="bg-green-400 w-full h-1" />
              </div>
              <div className="p-5">
                <ul className="flex flex-col gap-1">
                  <li className="font-semibold text-lg text-gray-600">
                    <a href="tel:+233207479578">+233 (0) 20 747 9578</a>
                  </li>
                  <li className="font-semibold text-lg text-gray-600">
                    <a href="tel:+233549317814">+233 (0) 54 931 7814</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] h-full bg-white flex flex-col gap-10 px-5 py-10 shadow-lg rounded-lg items-center justify-center">
          <h1 className="font-bold text-2xl text-gray-700">Request a Quote</h1>
          <form className="w-full h-full flex flex-col items-center justify-center gap-5 md:px-10">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full h-10 border-2 border-green-300 rounded-md px-3"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full h-10 border-2 border-green-300 rounded-md px-3"
            />
            <textarea
              placeholder="Your Message"
              className="w-full h-32 border-2 border-green-300 rounded-md px-3 py-2 resize-none"
            />
            <button
              type="submit"
              className="bg-green-400 text-white font-bold px-5 py-2 rounded-md hover:bg-green-500 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
