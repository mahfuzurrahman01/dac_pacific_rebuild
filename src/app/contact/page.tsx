/* eslint-disable react-hooks/rules-of-hooks */
"use client";
/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";

import { AiFillBank, AiFillHome, AiOutlineLineChart } from "react-icons/ai";
import AOS from "aos";
import localFont from "next/font/local";
const myFont2 = localFont({ src: "../../../public/fonts/Cardo-Bold.ttf" });
import "aos/dist/aos.css";
import { FaUsers } from "react-icons/fa";
import { BiCut, BiSolidBriefcaseAlt } from "react-icons/bi";
import { GiTrophy } from "react-icons/gi";
import { MdOutlinePriceChange } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import ContactForm from "@/Components/Contact/ContactForm";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/logo/logo.jpg";
import { AiFillCaretDown, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const page = () => {
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
                      Others
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
            href="/others"
          >
            Others
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
            CONTACT
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
                  href="/contact"
                  className="flex items-center px-1 capitalize hover:underline text-lg"
                >
                  CONTACT
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
