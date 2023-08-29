/* eslint-disable react-hooks/rules-of-hooks */
"use client";
/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Link from "next/link";
import React from "react";
import { AiFillBank, AiFillHome, AiOutlineLineChart } from "react-icons/ai";
import AOS from "aos";
import localFont from "next/font/local";
import Image from "next/image";
const myFont2 = localFont({ src: "../../../public/fonts/Cardo-Bold.ttf" });
import "aos/dist/aos.css";
import { FaUsers } from "react-icons/fa";
import { BiCut, BiSolidBriefcaseAlt } from "react-icons/bi";
import { GiTrophy } from "react-icons/gi";
import { MdOutlinePriceChange } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
const page = () => {
  useEffect(() => {
    AOS.init();
  });
  const backgroundImageStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80')",
    backgroundBlendMode: "difference",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
  };
  const backgroundImageStyle2 = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1520923179278-ee25e25e09e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="relative">
      <div
        style={backgroundImageStyle}
        className="w-full h-screen fixed top-0  -z-10 brightness-50"
      ></div>
      <div
        className="w-full lg:h-96 h-64 flex justify-center items-center flex-col"
        style={backgroundImageStyle}
      >
        <div className="bg-gray-900 w-full h-full bg-opacity-40 flex justify-center items-center flex-col gap-3">
          <h1 className="font-semibold uppercase text-white text-4xl flex justify-center items-center gap-3">
            About us
          </h1>
          <nav
            aria-label="breadcrumb"
            className="w-full p-4  text-gray-100 flex justify-center items-center"
          >
            <ol className="flex h-8 space-x-2">
              <li className="flex items-center">
                <Link
                  rel="noopener noreferrer"
                  href="/"
                  title="Back to homepage"
                  className="hover:underline text-cyan-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#0e7490"
                    className="w-7 h-7 pr-1 text-white"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  className="w-2 h-2 mt-1 transform rotate-90 fill-current "
                >
                  <path d="M32 30.031h-32l16-28.061z"></path>
                </svg>
                <Link
                  rel="noopener noreferrer"
                  href="/about"
                  className="flex items-center px-1 capitalize hover:underline text-lg"
                >
                  About
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="lg:p-24 p-2 bg-gray-50">
        <h1
          className="lg:text-3xl text-2xl text-center uppercase font-bold text-zinc-900"
          style={myFont2.style}
        >
          About our company
        </h1>
        {/* =======================card ============================  */}
        <section className="p-4 lg:p-8 bg-gray-50 text-gray-900 mt-20">
          <div className="container mx-auto space-y-12">
            <div
              data-aos="fade-up-left"
              data-aos-delay="100"
              data-aos-duration="500"
              className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row"
            >
              <Image
                src="https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=""
                className=" bg-gray-500 aspect-video"
                width={600}
                height={450}
              />
              <div className="flex flex-col justify-center flex-1 p-6 bg-gray-200">
                <h3
                  style={myFont2.style}
                  className="text-3xl font-bold uppercase"
                >
                  Who we are
                </h3>
                <p className="my-6 text-gray-700">
                  DAC PACIFIC LTD., an apparel buying house who is dealing with
                  all kinds of apparel customers of different countries in the
                  world. DAC PACIFIC LTD. established in 2019, Operation and
                  monitoring with experience over the 2 years. DAC PACIFIC LTD.
                  places order to a selected sourcing unit for production. We
                  provide full technical support for the production, Quality and
                  secured on time shipment.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up-right"
              data-aos-delay="100"
              data-aos-duration="500"
              className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse"
            >
              <Image
                src="https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="bg-gray-500 aspect-video"
                width={600}
                height={350}
              />
              <div className="flex flex-col justify-center flex-1 p-6 bg-gray-200">
                <h3
                  style={myFont2.style}
                  className="text-3xl font-bold uppercase"
                >
                  What we do
                </h3>
                <p className="my-6 text-gray-700">
                  SMB TEX is working one of the leading fastest apparel buying
                  house for its customers from Bangladesh. Working as buying
                  agents /local representative to execute the orders on behalf
                  of the customer/buyers. Sourcing Cost effective and Quality
                  Apparel Items with specialized from leading class and
                  compliant unit. Bulk Production follow up, inline inspections,
                  final inspections by our qualified & experienced Quality
                  Auditors/quality Assurance Inspectors. Monitoring and assuring
                  on time delivery/shipment of the garments for the customers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <div className="bg-gray-100 text-gray-700">
          <div className="container grid grid-cols-12 mx-auto w-5/6">
            <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 ">
              <h1
                style={myFont2.style}
                className="text-3xl font-bold text-gray-600  w-full mb-9"
              >
                OUR VERSION
              </h1>
              <div className="flex justify-center items-start gap-5 flex-col">
                <div className="flex flex-col justify-center items-start gap-2">
                  <h1 style={myFont2.style} className="text-xl text-gray-700">
                    OUR MISSION AND VISION
                  </h1>
                  <p className="text-sm text-gray-700 font-semibold">
                    To serve our honorable customers with sincerity, Honesty and
                    hard labor to keep them happy with supplying Quality
                    products with good prices and on time delivery.
                  </p>
                </div>
                <div className="flex flex-col justify-center items-start gap-2">
                  <h1 style={myFont2.style} className="text-xl text-gray-700">
                    BUSINESS
                  </h1>
                  <p className="text-sm text-gray-700 font-semibold">
                    The business stands for reliability in the long run:
                    suppliers are working with us for a long time and today we
                    know-how, vertical production lines gives favorable prices.
                  </p>
                </div>
                <div className="flex flex-col justify-center items-start gap-2">
                  <h1 style={myFont2.style} className="text-xl text-gray-700">
                    FULLY COMPLIENCE
                  </h1>
                  <p className="text-sm text-gray-700 font-semibold">
                    FULLY COMPLIENCE
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start lg:p-12 p-2 col-span-12 lg:col-span-6 lg:h-auto">
              <h1 style={myFont2.style} className="text-4xl text-gray-700">
                WHY WE EXIST
              </h1>
              <p className="my-2">
                We have been working with RMG sector for almost 2 years now. We
                do have a very good understanding of this trade. We have working
                with all kinds of textile customer’s, we also understand the
                different requirement for various customers. For this reason, we
                can offer you very good service, good quality products at market
                prices, and with a sincere ambition to make your business in
                Bangladesh to grow and become smooth and hassle-free.
                Consequently, we have been working with top class Quality
                customers, mainly European, in fashion, promotion and corporate
                wear, work wear, sportswear (upon specific request we will
                gladly list our reference customers). Besides let us just say
                that you’ll be amazed to find out how many valuable European
                brands are already buying in Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-transparent w-full lg:h-96 lg:flex hidden justify-center items-center">
        <div className="w-full py-5 px-2 flex justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-1 w-1/4 duration-500 p-5">
            <FaUsers className="text-white text-5xl" />
            <h1 className="font-bold text-6xl text-white">1200</h1>
            <h1 className="font-semibold text-2xl text-white uppercase">
              Clients
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 w-1/4 k duration-500 p-5">
            <AiFillBank className="text-white text-5xl" />
            <h1 className="font-bold text-6xl text-white">1277</h1>
            <h1 className="font-semibold text-2xl text-white uppercase">
              ITEM SOLD
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 w-1/4 k duration-500 p-5">
            <BiSolidBriefcaseAlt className="text-white text-5xl" />
            <h1 className="font-bold text-6xl text-white">869</h1>
            <h1 className="font-semibold text-2xl text-white uppercase">
              Projects
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 w-1/4 hover:bg-black duration-500 p-5">
            <GiTrophy className="text-white text-5xl" />
            <h1 className="font-bold text-6xl text-white">76</h1>
            <h1 className="font-semibold text-2xl text-white uppercase">
              Awards
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-center items-center">
        <div className="flex flex-wrap lg:w-4/5 w-11/12 mx-auto p-5 justify-center items-center">
          <div className="flex flex-col gap-2 justify-center items-center lg:w-[40%] w-full  lg:p-7 p-2">
            <BiCut className="w-20 h-20 bg-cyan-700 rounded-full p-2 text-white" />
            <p
              className="text-gray-800 text-2xl font-semibold uppercase mt-2"
              style={myFont2.style}
            >
              SAMPLING
            </p>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              consequatur dicta ex dignissimos eos sed explicabo quibusdam
              debitis eligendi ea laborum distinctio iusto delectus! Repellat
              magnam impedit reiciendis autem porro?
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center lg:w-[40%] w-full  lg:p-7 p-2">
            <MdOutlinePriceChange className="w-20 h-20 bg-cyan-700 rounded-full p-2 text-white" />
            <p
              className="text-gray-800 text-2xl font-semibold uppercase mt-2"
              style={myFont2.style}
            >
              PRICING
            </p>
            <p className="text-center">
              Our vast networking in Bangladesh allows us to provide the
              cheapest price available in Bangladesh. Receiving and verifying
              the quotations of suppliers by studying their suitability both in
              terms of quality and capacity to meet contractual requirements.
              Negotiation and finalization of price.
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center lg:w-[40%] w-full  lg:p-7 p-2">
            <AiOutlineLineChart className="w-20 h-20 bg-cyan-700 rounded-full p-2 text-white" />
            <p
              className="text-gray-800 text-2xl font-semibold uppercase mt-2"
              style={myFont2.style}
            >
              QUALITY ASSUANCE
            </p>
            <p className="text-center">
              Our product terms are depend on products range, quality and
              control process, product capacity, financial capacity, technology
              capability and management efficiency. Our Quality Assurance team
              conducted inspection in 4 stages of production.
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center lg:w-[40%] w-full  lg:p-7 p-2">
            <TbTruckDelivery className="w-20 h-20 bg-cyan-700 rounded-full p-2 text-white" />
            <p
              className="text-gray-800 text-2xl font-semibold uppercase mt-2"
              style={myFont2.style}
            >
              SHIPMENT
            </p>
            <p className="text-center">
              We monitor shipment with the forwarders from the sourcing point
              till it goes to buyer door. The above are some of the important
              activities we perform to provide a very effective service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
