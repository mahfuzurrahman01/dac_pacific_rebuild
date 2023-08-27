"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/logo/logo.jpg";
import { AiFillCaretDown, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
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
  return (
    <div className="bg-gray-50 p-4 ">
      <header className=" lg:w-4/5 w-11/12 mx-auto text-gray-100">
        {/* this menu will show only on large screen  */}
        <div className="container lg:flex hidden justify-between h-16 mx-auto items-center">
          <Link href="/">
            <Image src={logo} alt="logo" className="w-36 h-16" />
          </Link>
          <div className="flex justify-end items-center gap-10">
            <Link
              className="uppercase font-semibold text-black hover:text-sky-600 text-sm duration-300"
              href="#"
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
                  className="z-30 p-5 flex justify-center flex-col w-36 bg-gray-50 absolute top-4 duration-300 text-gray-900  font-semibold  pt-5"
                >
                  <Link
                    href="/"
                    className="hover:text-sky-600 duration-300 border-b border-gray-300 p-2"
                  >
                    item
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-sky-600 duration-300 border-b border-gray-300 p-2"
                  >
                    item
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-sky-600 duration-300 border-b border-gray-300 p-2"
                  >
                    item
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
                  className="z-30 p-5 flex justify-center flex-col w-36 bg-gray-50 absolute top-4 duration-300 text-gray-900  font-semibold pt-5"
                >
                  <Link
                    href="/"
                    className="hover:text-sky-600 duration-300 border-b border-gray-300 p-2"
                  >
                    item2
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-sky-600 duration-300 border-b border-gray-300 p-2"
                  >
                    item2
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-sky-600 duration-300 border-b border-gray-300 p-2"
                  >
                    item2
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-sky-600 duration-300 border-b border-gray-300 p-2"
                  >
                    item2
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-sky-600 duration-300 border-b border-gray-300 p-2"
                  >
                    item2
                  </Link>
                </div>
              )}
            </div>

            <Link
              className="uppercase font-semibold text-black hover:text-sky-600 text-sm duration-300"
              href="#"
            >
              Contact
            </Link>
          </div>
        </div>
        {/* this menu will show only on small screen  */}
        <div className="container lg:hidden flex justify-between h-8 mx-auto items-center relative">
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
            ? "w-full p-5 flex flex-col justify-center items-center translate-y-3 absolute shadow-xl shadow-gray-300 bg-gray-50 text-gray-900 left-0 duration-500"
            : "w-full p-5 flex flex-col justify-center translate-y-[-300px] left-0 absolute items-center shadow-xl shadow-gray-300 bg-gray-50  text-gray-900 duration-500"
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
          href="/"
        >
          Company
        </Link>
        <Link
          className="font-semibold hover:text-sky-600 duration-300 uppercase"
          href="/"
        >
          Gallary
        </Link>
        <Link
          className="font-semibold hover:text-sky-600 duration-300 uppercase"
          href="/"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
