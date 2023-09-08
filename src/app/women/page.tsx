/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/logo/logo.jpg";
import { AiFillCaretDown, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const page = () => {
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
  return (
    <div>
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
      <h1 className="uppercase font-serif font-bold text-center text-gray-700 text-xl py-5">
        LADIES DRESS
      </h1>
      <section className="py-6 bg-gray-100 text-gray-50 w-4/5 mx-auto">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <Image
            width={200}
            height={300}
            src={
              "https://www.smbtex.com/images/product/knit-Item/Womens/Dress/knit-women-dress%20(1).png"
            }
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          />
          <Image
            width={200}
            height={300}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={
              "https://www.smbtex.com/images/product/knit-Item/Womens/Dress/knit-women-dress%20(2).png"
            }
          />
          <Image
            width={200}
            height={300}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={
              "https://www.smbtex.com/images/product/knit-Item/Womens/Dress/knit-women-dress%20(3).png"
            }
          />
          <Image
            width={200}
            height={300}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={
              "https://www.smbtex.com/images/product/knit-Item/Womens/Dress/knit-women-dress%20(4).png"
            }
          />
        </div>
      </section>
      <h1 className="uppercase font-serif font-bold text-center text-gray-700 text-xl py-5">
        LADIES WOVEN HOODY JACKET
      </h1>
      <section className="py-6 bg-gray-100 text-gray-50 w-4/5 mx-auto">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <Image
            width={200}
            height={300}
            src={"/womens/wh1.jpg"}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          />
          <Image
            width={200}
            height={300}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={"/womens/wh2.jpg"}
          />
          <Image
            width={200}
            height={300}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={"/womens/wh3.jpg"}
          />
          <Image
            width={200}
            height={300}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={"/womens/wh4.jpg"}
          />
        </div>
      </section>
      <h1 className="uppercase font-serif font-bold text-center text-gray-700 text-xl py-5">
        LADIES POLO SHIRT
      </h1>
      <section className="py-6 bg-gray-100 text-gray-50 w-4/5 mx-auto">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <Image
            width={200}
            height={300}
            src={
              "https://www.smbtex.com/images/product/knit-Item/Womens/Ladies%20Polo%20Shirt/knit-Ladies-Polo-Shirt%20(1).png"
            }
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          />
          <Image
            width={200}
            height={300}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={
              "https://www.smbtex.com/images/product/knit-Item/Womens/Ladies%20Polo%20Shirt/knit-Ladies-Polo-Shirt%20(2).png"
            }
          />
          <Image
            width={200}
            height={300}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={
              "https://www.smbtex.com/images/product/knit-Item/Womens/Ladies%20Polo%20Shirt/knit-Ladies-Polo-Shirt%20(3).png"
            }
          />
          <Image
            width={200}
            height={300}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={
              "https://www.smbtex.com/images/product/knit-Item/Womens/Ladies%20Polo%20Shirt/knit-Ladies-Polo-Shirt%20(4).png"
            }
          />
        </div>
      </section>
      <h1 className="uppercase font-serif font-bold text-center text-gray-700 text-xl py-5">
        LADIES SHIRT
      </h1>
      <section className="py-6 bg-gray-100 text-gray-50 w-4/5 mx-auto">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <Image
            width={200}
            height={300}
            src={
              "https://www.smbtex.com/images/product/knit-Item/Womens/Ladies%20Shirt/knit-Ladies-Shirt%20(1).png"
            }
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          />
          <Image
            width={200}
            height={300}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={
              "https://www.smbtex.com/images/product/knit-Item/Womens/Ladies%20Shirt/knit-Ladies-Shirt%20(2).png"
            }
          />
          <Image
            width={200}
            height={300}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={
              "https://www.smbtex.com/images/product/knit-Item/Womens/Ladies%20Shirt/knit-Ladies-Shirt%20(3).png"
            }
          />
          <Image
            width={200}
            height={300}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={
              "https://www.smbtex.com/images/product/knit-Item/Womens/Ladies%20Shirt/knit-Ladies-Shirt%20(4).png"
            }
          />
        </div>
      </section>
      <h1 className="uppercase font-serif font-bold text-center text-gray-700 text-xl py-5">
        LADIES SPORTSWEAR
      </h1>
      <section className="py-6 bg-gray-100 text-gray-50 w-4/5 mx-auto">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <Image
            width={200}
            height={300}
            src={
              "https://www.smbtex.com/images/product/knit-Item/Womens/Ladies%20Sportswear/knit-sports-wear%20(1).png"
            }
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          />
          <Image
            width={200}
            height={300}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={
              "https://www.smbtex.com/images/product/knit-Item/Womens/Ladies%20Sportswear/knit-sports-wear%20(2).png"
            }
          />
          <Image
            width={200}
            height={300}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={
              "https://www.smbtex.com/images/product/knit-Item/Womens/Ladies%20Sportswear/knit-sports-wear%20(3).png"
            }
          />
          <Image
            width={200}
            height={300}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={
              "https://www.smbtex.com/images/product/knit-Item/Womens/Ladies%20Sportswear/knit-sports-wear%20(4).png"
            }
          />
        </div>
      </section>
    </div>
  );
};

export default page;
