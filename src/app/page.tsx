/* eslint-disable react/no-unescaped-entities */
"use client";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../public/banner/banner-1.jpg";
import banner2 from "../../public/banner/banner-2.jpg";
import banner3 from "../../public/banner/banner-3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //
import { BsBriefcaseFill, BsSendCheckFill } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo/logo.jpg";
import { AiFillCaretDown, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import BlogCard from "@/Components/Cards/BlogCard";
import axios from "axios";
import StatsCard from "@/Components/Stats/StatsCard";
import Blog from "@/Components/Blog/Blog";
import Touch from "@/Components/GetTouch/Touch";
import ContactForm from "@/Components/Contact/ContactForm";
import { FaUsers } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { BiSolidBriefcaseAlt } from "react-icons/bi";
import { GiTrophy } from "react-icons/gi";
import localFont from "@next/font/local";
import AOS from "aos";
import "aos/dist/aos.css";
const myFont2 = localFont({ src: "../../public/fonts/Cardo-Bold.ttf" });
export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  const [showDropDown1, setShowDropDown1] = useState<boolean>(false);
  const [showDropDown2, setShowDropDown2] = useState<boolean>(false);
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
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  // menu bar open and closing handle
  const menuBarHandle = () => {
    setOpenMenu(!openMenu);
  };

  const [showSubSection, setShowSubSection] = useState(false);
  const [toggle, setToggle] = useState<number>(1);
  const toggleHandle = (num: number) => {
    setToggle(num);
  };

  const backgroundImageStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')",
    backgroundBlendMode: "multiply",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
  };

  return (
    <main className="overflow-hidden">
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
            href="/kids"
          >
            Kids Item
          </Link>
          <Link
            className="font-semibold hover:text-sky-600 duration-300 uppercase"
            href="/lingerie"
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
      <div className="relative">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          transitionTime={1000}
          interval={5000}
          showStatus={false}
          className="w-full"
        >
          <div className="w-full lg:h-[700px] h-screen">
            <Image
              alt="banner"
              src={banner1}
              className="brightness-75 w-full h-full"
            />
          </div>
          <div className="w-full h-[700px]">
            <Image
              alt="banner"
              src={banner2}
              className="brightness-75 w-full h-full"
            />
          </div>
          <div className="w-full h-[700px]">
            <Image
              alt="banner"
              src={banner3}
              className="brightness-75 w-full h-full"
            />
          </div>
        </Carousel>
        {/* absolute div for showing in banner   */}
        <div className="text-center absolute top-[40%] lg:left-[20%] left-[10%] text-white">
          <h1 className="lg:text-6xl text-4xl font-bold text-white">
            WELCOME TO <span className="text-cyan-800">DAC</span> PACIFIC LTD
          </h1>
          <h1 className="lg:text-3xl text-xl  font-semibold mt-2">
            OPERATION AND MONITORING WITH EXPERIENCE
          </h1>
        </div>
      </div>
      <div className="bg-gray-50 lg:block hidden">
        <div className=" w-3/4 mx-auto flex justify-start px-10 py-16 items-stretch gap-24 ">
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
      </div>

      <BlogCard />
      <div className="w-full py-5 px-2 lg:flex hidden justify-between items-center bg-zinc-950">
        <div className="flex flex-col justify-center items-center gap-1 w-1/4 hover:bg-black duration-500 p-5">
          <FaUsers className="text-white text-5xl" />
          <h1 className="font-bold text-6xl text-white">1200</h1>
          <h1 className="font-semibold text-2xl text-white uppercase">
            Clients
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 w-1/4 hover:bg-black duration-500 p-5">
          <AiFillBank className="text-white text-5xl" />
          <h1 className="font-bold text-6xl text-white">1277</h1>
          <h1 className="font-semibold text-2xl text-white uppercase">
            ITEM SOLD
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 w-1/4 hover:bg-black duration-500 p-5">
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
      <div className="container p-6 mx-auto space-y-8 bg-gray-50">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mt-4">
          <div
            data-aos="zoom-in"
            className="flex flex-col bg-zinc-950 text-white border-l-2 border-gray-100"
          >
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <Image
                alt=""
                src="https://www.smbtex.com/images/service/service-1.jpg"
                className="object-cover w-full h-52 bg-gray-500"
                width={150}
                height={150}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="SOURCING FACTORIES & FACTORY EVALUATION"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracki uppercase hover:underline text-gray-400"
              >
                Convenire
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                SOURCING FACTORIES & FACTORY EVALUATION
              </h3>
              <p className="text-gray-400">
                Compliance to social code-of-conduct standarda: Managment and
                human resources, House Keeping, Working Conditions, Production
                Capability.
              </p>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex flex-col bg-zinc-950 text-white border-l-2 border-gray-100"
          >
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <Image
                alt=""
                className="object-cover w-full h-52 bg-gray-500"
                src="https://www.smbtex.com/images/service/service-2.jpg"
                width={150}
                height={150}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracki uppercase hover:underline text-gray-400"
              >
                Convenire
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                DESIGN, PATTERN & SAMPLE DEVELOPMENT
              </h3>
              <p className="text-gray-400">
                we provide product development service. Specializing in quality
                product pattern development, precision made for production
                environment.
              </p>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                <span>June 2, 2020</span>
                <span>2.2K views</span>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex flex-col bg-zinc-950 text-white border-l-2 border-gray-100"
          >
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="DESIGN, PATTERN & SAMPLE DEVELOPMENT"
            >
              <Image
                alt=""
                className="object-cover w-full h-52 bg-gray-500"
                src="https://www.smbtex.com/images/service/service-3.jpg"
                width={150}
                height={150}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracki uppercase hover:underline text-gray-400"
              >
                Convenire
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                EMBELLISHMENT & ACCESSORIES DEVELOPMENT
              </h3>
              <p className="text-gray-400">
                DAC PACIFIC LTD LIMITED is experienced in design and development
                for offering highly detailed embroideries and embellishments to
                enhance any type of garment.
              </p>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                <span>June 3, 2020</span>
                <span>2.3K views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-transparent w-full h-96 flex justify-center flex-col items-center gap-10">
          <h1
            style={myFont2.style}
            className="font-bold text-2xl text-white w-3/4 text-center"
          >
            TILL NOW WE HAVE WORKED WITH THIS BRANDS AND MOVING ON SUCCESSFULLY.
          </h1>
          <p className="text-white text-lg font-light">
            To serve our honorable customers with sincerity, Honesty and hard
            labor to keep them happy .
          </p>
          <div className="flex justify-center items-center gap-4">
            <button className="py-2 px-8 rounded-full hover:bg-cyan-700 duration-300  bg-transparent border-2 border-white text-white ">
              READ MORE
            </button>
            <button className="py-2 px-8 rounded-full bg-cyan-700 hover:bg-transparent duration-300 border-2 border-white text-white ">
              GET IN TOUCH
            </button>
          </div>
        </div>
        <div className="w-full bg-gray-50 ">
          <div className="pt-5 container flex flex-col flex-wrap content-center items-center justify-center p-4 py-20 mx-auto md:p-10">
            <h1
              className="uppercase text-5xl antialiased font-semibold text-center text-gray-800"
              style={myFont2.style}
            >
              Get Our Updates
            </h1>
            <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-800">
              Find out about events and other news
            </p>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="example@email.com"
                className="w-3/5 p-3 rounded-l-lg sm:w-2/3 outline-slate-500 text-gray-800 bg-gray-300"
              />
              <button
                type="button"
                className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-cyan-700 text-gray-50 "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-zinc-200 py-16 bg-opacity-40">
        <div className="p-5 rounded-lg bg-zinc-50  grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">CONTACT INFO</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#0E7490"
                  className="w-8 h-8 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className=" text-xs text-black font-normal">
                  House No. # 447, road # 7 (east side) D.O.H.S. Baridhara,
                  Dhaka Cantonment, Dhaka - 1206. Bangladesh.
                </span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#0E7490"
                  className="w-8 h-8 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>
                  +(8802) 8414994, 8417985, 8412234, 8810629, 8412920-2
                </span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#0E7490"
                  className="w-8 h-8 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>dinesh@dacpacificbd.com. </span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#0E7490"
                  className="w-8 h-8 mr-2 sm:mr-6"
                >
                  <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                </svg>
                <span>www.dacpacific.com</span>
              </p>
            </div>
          </div>
          <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Leroy Jenkins"
                className="p-2 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-800"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="leroy@jenkins.com"
                className="p-2 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-800"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea className="block w-full rounded-md focus:ring focus:ri focus:ri bg-gray-800"></textarea>
            </label>
            <button
              type="button"
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri bg-cyan-600 text-gray-50 focus:ri hover:ri"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div>
    <footer className="px-4 divide-y bg-zinc-900 text-gray-100">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-400">

            </div>
            <span className="self-center text-2xl font-semibold">
              Dac
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracki uppercase text-gray-50">Product</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Features
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Integrations
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracki uppercase text-gray-50">Company</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-gray-50">Developers</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Public API
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Documentation
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Guides
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-gray-50">Social media</div>
            <div className="flex justify-start space-x-3">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                className="flex items-center p-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-400">
        ©All Copyrights Reserved for Dac Pacific Ltd 2023
      </div>
    </footer>
  </div>
    </main>
  );
}
