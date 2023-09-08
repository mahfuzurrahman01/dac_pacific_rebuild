"use client";
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React, { useEffect } from "react";
import {
  AiFillBank,
  AiFillCaretDown,
  AiFillHome,
  AiOutlineClose,
  AiOutlineLineChart,
  AiOutlineMenu,
} from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import localFont from "next/font/local";
import Image from "next/image";
const myFont2 = localFont({ src: "../../../public/fonts/Cardo-Bold.ttf" });
import { FaUsers } from "react-icons/fa";
import { BiCut, BiSolidBriefcaseAlt } from "react-icons/bi";
import { GiTrophy } from "react-icons/gi";
import logo from "../../../public/logo/logo.jpg";
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

  const [showDropDown1, setShowDropDown1] = React.useState<boolean>(false);
  const [showDropDown2, setShowDropDown2] = React.useState<boolean>(false);
  const onHoverHandle = (id: number) => {
    if (id === 1) {
      setShowDropDown1(true);
    }
    if (id === 2) {
      setShowDropDown2(true);
    }
  };
  const onMouseOut = (id: number) => {
    if (id === 1) {
      setShowDropDown1(false);
    }
    if (id === 2) {
      setShowDropDown2(false);
    }
  };
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  // menu bar open and closing handle
  const menuBarHandle = () => {
    setOpenMenu(!openMenu);
  };

  const [showSubSection, setShowSubSection] = React.useState(false);

  return (
    <div className="relative">
      <div className="bg-gray-50 p-4 w-full">
        <header className=" lg:w-4/5 w-11/12 mx-auto text-gray-100">
          {/* this menu will show only on large screen  */}
          <div className="container lg:flex hidden justify-between h-16 mx-auto items-center">
            <Link href="/">
              <Image src={logo} alt="logo" className="w-36 h-16" />
            </Link>
            <div className="flex justify-end items-center gap-10">
              <Link
                className="uppercase font-semibold text-black hover:text-sky-600 text-sm duration-300"
                href="/"
              >
                Home
              </Link>
              <div
                onMouseEnter={() => onHoverHandle(1)}
                onMouseLeave={() => onMouseOut(1)}
                className="relative"
              >
                <Link
                  className="uppercase font-semibold text-black hover:text-sky-600 text-sm duration-300 flex justify-center items-center gap-1"
                  href="#"
                >
                  Company
                  <AiFillCaretDown />
                </Link>
                {showDropDown1 && (
                  <div
                    onMouseEnter={() => onHoverHandle(1)}
                    className="z-30 p-5 flex justify-center flex-col w-56 bg-gray-50 absolute top-4 duration-300 text-gray-900  font-semibold  pt-5"
                  >
                    <Link
                      href="/about"
                      className="hover:text-sky-600 duration-300 border-b border-gray-300 p-2"
                    >
                      ABOUT US
                    </Link>
                    <Link
                      href="/service"
                      className="hover:text-sky-600 duration-300 border-b border-gray-300 p-2"
                    >
                      SERVICE
                    </Link>
                    <Link
                      href="/management"
                      className="hover:text-sky-600 duration-300 border-b border-gray-300 p-2"
                    >
                      MANAGEMENT
                    </Link>
                    <Link
                      href="/trump"
                      className="hover:text-sky-600 duration-300 border-b border-gray-300 p-2"
                    >
                      TRUMP CROWN
                    </Link>
                  </div>
                )}
              </div>
              <div
                onMouseEnter={() => onHoverHandle(2)}
                onMouseLeave={() => onMouseOut(2)}
                className="relative"
              >
                <Link
                  className="uppercase font-semibold text-black hover:text-sky-600 text-sm duration-300 flex justify-center items-center gap-1"
                  href="#"
                >
                  Gallary
                  <AiFillCaretDown />
                </Link>
                {showDropDown2 && (
                  <div
                    onMouseEnter={() => onHoverHandle(2)}
                    className="z-30 flex justify-center flex-col w-36 bg-gray-50 absolute top-4 duration-300 text-gray-900  font-semibold pt-5"
                  >
                    <button
                      onMouseEnter={() => setShowSubSection(true)}
                      onMouseLeave={() => setShowSubSection(false)}
                      className="hover:text-sky-600 duration-300 w-full border-b border-gray-300 p-2"
                    >
                      KNIT ITEM
                    </button>
                    <Link
                      href="/woven"
                      className="hover:text-sky-600 duration-300 border-b border-gray-300 py-1 px-4 text-center"
                    >
                      WOVEN SHIRTS
                    </Link>
                    <Link
                      href="/woven/bottoms"
                      className="hover:text-sky-600 duration-300 border-b border-gray-300 py-1 px-4 text-center"
                    >
                      WOVEN BOTTOMS
                    </Link>
                    <Link
                      href="/woven/sweater"
                      className="hover:text-sky-600 duration-300 border-b border-gray-300 py-1 px-4 text-center"
                    >
                      SWEATER
                    </Link>
                    <Link
                      href="/woven/outer"
                      className="hover:text-sky-600 duration-300 border-b border-gray-300 py-1 px-4 text-center"
                    >
                      OUTERWEAR
                    </Link>
                    <Link
                      href="/others"
                      className="hover:text-sky-600 duration-300 border-b border-gray-300 py-1 px-4 text-center"
                    >
                      OTHERS PRODUCTS
                    </Link>
                    {/* <Link
                    href="/"
                    className="hover:text-sky-600 duration-300 border-b border-gray-300 py-1 px-4 text-center"
                  >
                    item2
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-sky-600 duration-300 border-b border-gray-300 py-1 px-4 text-center"
                  >
                    item2
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-sky-600 duration-300 border-b border-gray-300 py-1 px-4 text-center"
                  >
                    item2
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-sky-600 duration-300 border-b border-gray-300 py-1 px-4 text-center"
                  >
                    item2
                  </Link> */}
                  </div>
                )}
                {showSubSection && (
                  <div
                    onMouseEnter={() => setShowSubSection(true)}
                    onMouseLeave={() => setShowSubSection(false)}
                  >
                    <div className="z-30 p-5 flex justify-center flex-col w-36 bg-gray-50 absolute top-10 right-16 duration-300 text-gray-900  font-semibold pt-5">
                      <Link
                        href="/gallary/kids"
                        className="hover:text-sky-600 duration-300 border-b border-gray-300 p-2"
                      >
                        KIDS
                      </Link>
                      <Link
                        href="/gallary/lingerie"
                        className="hover:text-sky-600 duration-300 border-b border-gray-300 p-2"
                      >
                        LINGERIE
                      </Link>
                      <Link
                        href="/men"
                        className="hover:text-sky-600 duration-300 border-b border-gray-300 p-2"
                      >
                        MENS
                      </Link>
                      <Link
                        href="/women"
                        className="hover:text-sky-600 duration-300 border-b border-gray-300 p-2"
                      >
                        WOMENS
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                className="uppercase font-semibold text-black hover:text-sky-600 text-sm duration-300"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
          {/* this menu will show only on small screen  */}
          <div className="container lg:hidden flex justify-between h-8 mx-auto items-center relative z-30">
            <Link href="/">
              <Image src={logo} alt="logo" className="w-24 h-8" />
            </Link>
            <div>
              {openMenu ? (
                <AiOutlineClose
                  onClick={menuBarHandle}
                  className="text-lg bg-sky-600 text-gray-50"
                />
              ) : (
                <AiOutlineMenu
                  onClick={menuBarHandle}
                  className="text-lg bg-sky-600 text-gray-50"
                />
              )}
            </div>
          </div>
        </header>
        {/* // all the small screen tabs  */}
        <div
          className={`${
            openMenu
              ? "w-full flex flex-col justify-center items-center translate-y-3 absolute shadow-xl shadow-gray-300 bg-gray-50 text-gray-900 left-0 duration-500 z-50 min-h-screen max-h-screen gap-5"
              : "w-full  flex flex-col justify-center translate-y-[-300px] left-0 absolute items-center shadow-xl shadow-gray-300 bg-gray-50  text-gray-900 duration-500 -z-50"
          }`}
        >
          <Link
            className="font-semibold hover:text-sky-600 duration-300 uppercase"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-semibold hover:text-sky-600 duration-300 uppercase"
            href="/about"
          >
            About us
          </Link>
          <Link
            className="font-semibold hover:text-sky-600 duration-300 uppercase"
            href="/service"
          >
            Service
          </Link>

          <Link
            className="font-semibold hover:text-sky-600 duration-300 uppercase"
            href="/management"
          >
            Management
          </Link>
          <Link
            className="font-semibold hover:text-sky-600 duration-300 uppercase"
            href="/trump"
          >
            Trump crown
          </Link>
          <Link
            className="font-semibold hover:text-sky-600 duration-300 uppercase"
            href="/gallary/kids"
          >
            Kids Item
          </Link>
          <Link
            className="font-semibold hover:text-sky-600 duration-300 uppercase"
            href="/gallary/lingerie"
          >
            Lingerie
          </Link>
          <Link
            className="font-semibold hover:text-sky-600 duration-300 uppercase"
            href="/men"
          >
            Men's Item
          </Link>
          <Link
            className="font-semibold hover:text-sky-600 duration-300 uppercase"
            href="/women"
          >
            Women's Item
          </Link>
          <Link
            className="font-semibold hover:text-sky-600 duration-300 uppercase"
            href="/others"
          >
            OTHERS PRODUCTS
          </Link>
          <Link
            className="font-semibold hover:text-sky-600 duration-300 uppercase"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
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
                  world. DAC PACIFIC LTD. established in 1992, Operation and
                  monitoring with experience over the years. DAC PACIFIC LTD.
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
                  DAC PACIFIC LTD. is working one of the leading fastest
                  apparels buying house for its customers from Bangladesh.
                  Working as buying agents /local representative to execute the
                  orders on behalf of the customer/buyers. Sourcing Cost
                  effective and Quality Apparel Items with specialized from
                  leading class and compliant unit. Bulk Production follow up,
                  inline inspections, final inspections by our qualified &
                  experienced Quality Auditors/quality Assurance Inspectors.
                  Monitoring and assuring on time delivery/shipment of the
                  garments for the customers.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up-left"
              data-aos-delay="100"
              data-aos-duration="500"
              className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row"
            >
              <Image
                src="https://media.istockphoto.com/id/1415971766/photo/recycling-products-concept-organic-cotton-recycling-cloth-zero-waste-materials-environment.webp?b=1&s=170667a&w=0&k=20&c=lrsYUd0gXRI1dpc6NiHKGDlFcwHbukqLUUiwBDlhnNg="
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
                  Certifications
                </h3>
                <p className="my-6 text-gray-700">
                  DAC PACIFIC{" "}
                  <span className="lowercase">
                    ROOM #308-309, WING FAT INDUSTRIAL BUILDING, 12, WANG TAI
                    ROAD, KOWLOON BAY, KOWLOON, HONG KONG
                  </span>{" "}
                  Has been independently assessed and is in compliant with
                  requirement of: ISO 9001:2015 (Quality Management System) For
                  the following Scope of Activities: EXPORT & IMPORT.
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
                We have been working with RMG sector. We do have a very good
                understanding of this trade. We have working with all kinds of
                textile customer’s, we also understand the different requirement
                for various customers. For this reason, we can offer you very
                good service, good quality products at market prices, and with a
                sincere ambition to make your business in Bangladesh to grow and
                become smooth and hassle-free. Consequently, we have been
                working with top class Quality customers, mainly European, in
                fashion, promotion and corporate wear, work wear, sportswear
                (upon specific request we will gladly list our reference
                customers). Besides let us just say that you’ll be amazed to
                find out how many valuable European brands are already buying in
                Bangladesh.
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
