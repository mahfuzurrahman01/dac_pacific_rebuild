"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../public/banner/banner-1.jpg";
import banner2 from "../../public/banner/banner-2.jpg";
import banner3 from "../../public/banner/banner-3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //
import { BsBriefcaseFill, BsSendCheckFill } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Home() {
  const [toggle, setToggle] = useState<number>(1);
  const toggleHandle = (num: number) => {
    setToggle(num);
  };
  return (
    <main className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        transitionTime={1000}
        interval={5000}
        showStatus={false}
        className="w-full"
      >
        <div className="w-full h-[700px]">
          <Image alt="banner" src={banner1} className="brightness-50" />
        </div>
        <div className="w-full h-[700px]">
          <Image alt="banner" src={banner2} className="brightness-50" />
        </div>
        <div className="w-full h-[700px]">
          <Image alt="banner" src={banner3} className="brightness-50" />
        </div>
      </Carousel>
      {/* absolute div for showing in banner   */}
      <div className="text-center absolute top-[40%] left-[20%] text-white">
        <h1 className="text-6xl font-bold text-white">
          WELCOME TO <span className="text-green-500">DAC</span> PACIFIC LTD
        </h1>
        <h1 className="text-3xl font-semibold mt-2">
          OPERATION AND MONITORING WITH EXPERIENCE
        </h1>
      </div>
      <div className=" w-3/4 mx-auto flex justify-start px-10 py-16 items-stretch gap-24">
        <div className="flex flex-col w-[30%] justify-start items-center gap-6 mt-10">
          <div
            onClick={() => toggleHandle(1)}
            className={`w-full flex items-start gap-6  text-gray-500 hover:text-sky-600 duration-300 cursor-pointer pr-3 py-1 ${
              toggle === 1 && " border-r-4 border-sky-600"
            }`}
          >
            <BsBriefcaseFill className="text-3xl hover:text-sky-600 duration-300" />
            <p className="text-xl font-semibold uppercase">Our company</p>
          </div>
          <div
            onClick={() => toggleHandle(2)}
            className={`w-full flex items-start gap-6  text-gray-500 hover:text-sky-600 duration-300 cursor-pointer pr-3 py-1 ${
              toggle === 2 && " border-r-4 border-sky-600"
            }`}
          >
            <BsSendCheckFill className=" text-3xl hover:text-sky-600 duration-300" />
            <p className="text-xl font-semibold uppercase">What we do</p>
          </div>
          <div
            onClick={() => toggleHandle(3)}
            className={`w-full flex items-start gap-6  text-gray-500 hover:text-sky-600 duration-300 cursor-pointer pr-3 py-1 ${
              toggle === 3 && " border-r-4 border-sky-600"
            }`}
          >
            <IoIosSettings className="text-3xl hover:text-sky-600 duration-300" />
            <p className="text-xl font-semibold uppercase">Services</p>
          </div>
        </div>
        <div className="duration-500">
          {toggle === 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BsBriefcaseFill className="w-52 h-52 text-cyan-700 " />
              <p className="font-bold text-gray-800 text-2xl mt-3">
                WE HAVE WORLDWIDE BUSINESS
              </p>
              <p className="text-gray-600 text-lg">
                DAC pacific ltd supplies multi product to its customer. This
                buying house designed and set up to cater worldwide customers.
              </p>
              <button className="bg-cyan-700 rounded-3xl px-7 py-2 text-white mt-4">
                Read more
              </button>
            </motion.div>
          )}
          {toggle === 2 && (
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
              <BsSendCheckFill className="w-52 h-52 text-cyan-700 " />
              <p className="font-bold text-gray-800 text-2xl mt-3">
                WE HAVE WORLDWIDE BUSINESS
              </p>
              <p className="text-gray-600 text-lg">
                DAC pacific ltd supplies multi product to its customer. This
                buying house designed and set up to cater worldwide customers.
              </p>
              <button className="bg-cyan-700 rounded-3xl px-7 py-2 text-white mt-4">
                Read more
              </button>
            </motion.div>
          )}
          {toggle === 3 && (
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
              <IoIosSettings className="w-52 h-52 text-cyan-700 duration-300" />
              <p className="font-bold text-gray-800 text-2xl mt-3">
                WE HAVE WORLDWIDE BUSINESS
              </p>
              <p className="text-gray-600 text-lg">
                DAC pacific ltd supplies multi product to its customer. This
                buying house designed and set up to cater worldwide customers.
              </p>
              <button className="bg-cyan-700 rounded-3xl px-7 py-2 text-white mt-4">
                Read more
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
