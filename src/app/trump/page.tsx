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
            TRUMP CROWN (HONG KONG) LIMITED
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
                  href="/trump"
                  className="flex items-center px-1 capitalize hover:underline text-lg"
                >
                  TRUMP CROWN
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
          About trump crown
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
                src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
                  COMPANY PROFILE
                </h3>
                <p className="my-6 text-gray-700">
                  Trump Crown, thrives to be an ultimate sourcing and
                  manufacturing partner for companies in business of Garments
                  and sourcing/consolidation of fabric/trims, commodity division
                  n and furnishings. Our vision and excellence have earned the
                  company a strong reputation n that resonate reliability,
                  quality and a worldwide recognition of our commitment to
                  supply products at the best value. The Company, established
                  and incorporated in, 2010 i n Hong Kong is the center of our
                  network of Manufacturing Plants and Representative Offices
                  throughout Asia and also the gateway to the production giant
                  People’s RepubliC c of China. This infrastructure, along with
                  our experienced personnel, enables us to provide our buyers
                  with: <br />
                  <span className="font-bold">Jimmy Paryani</span> Jinn my,
                  having 30 years of experience in garment industry believes
                  that there is a close relationship with Bangladesh and China,
                  Tru mp Crown Hong Kong continues to support Bangladesh
                  manufacturers with its growing garment business. “Trump Crown
                  (Hong Kong) Ltd” is associated with “Shanta Group” for their
                  Hong Kong sourcing and Jimmy has been handling its marketing
                  since twenty years.{" "}
                  <span className="font-bold">Dinesh Chhugani</span>
                  Dinesh, the promoter of DAC Pacific (HK) Ltd with offices in
                  HK, China and Bangladesh, have been supplying and
                  manufacturing large quantity of Garments and accessories out
                  of Bangladesh, China, Sri Lanka, Horig Kong and India to USA,
                  EEC and Indian Subcontinent markets.
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
                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXBhbnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
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
                  Our Business Activities
                </h3>
                <p className="my-6 text-gray-700">
                  Manufacturer, Distributor and Exporter of Ready made Garments,
                  Fabrics and Garment related accessories, (Inclusive Buttons,
                  Metal items, Belts, Laces and Lingerie accessories) to USA,
                  E.E.C, India, Bangladesh, Sri Lanka, South America and Gulf
                  markets from Hong Kong, China, Ind ia and Bangladesh. We
                  provide development of new products based on customer
                  requirements, fashion trends and styles, the latest technical
                  developments and the creative skills from designers. We offer
                  a diversified range of products incm ding: Solid dyed Printed
                  & Yarn-dyed i n Cotton & Blends, Ramie/Linen & Blends, Rayon,
                  Nylon, Polyester, Corduroy, Chambray & Denim, Velveteen (Piece
                  dyed & Printed), Knits, Silk and Pocketing Fabrics. Represent
                  and assist overseas buyers and retail stores as Buying Agents
                  or Consultants for all the ir sourcing and Q.C. needs in the
                  markets of China, Bangladesh, India Sri Lanka.
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
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbXBhbnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
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
                  PRINCIPAL PRODUCTS:
                </h3>
                <p className="my-6 text-gray-700">
                  All types of Woven and Knitted Garments, all types of Fabrics
                  and Garment related accessories, inclusive Pants, Shorts,
                  Skirts, Blouses, Dresses, Jackets, Blazers, Vest, Rompers,
                  Jumpers and all types of work wear. Knitted Tops, Leggings and
                  Shorts. All types of garment accessories inclusive Buttons,
                  Metal Items, Belts, Laces, Lingerie accessories etc. , India,
                  China, Hong Ko ng & Far East markets.
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
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbXBhbnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
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
                  COMMODITY DIVISION:
                </h3>
                <p className="my-6 text-gray-700">
                  Trump Crown is an entrepreneurial company focused on
                  merchandising physical commodities. We position ourselves to
                  provide value th rough merchandising services, strategic
                  assets and investments. We trade food products, whole grains,
                  feed ingredients, agriculture products, emulsifying and
                  stabilizing agents and many other commodities within North
                  America and internationally. We have grown into a strong
                  trading company as a result of our experience, relationships
                  and service.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up-left"
              data-aos-delay="100"
              data-aos-duration="500"
              className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row"
            >
              <div className="flex flex-col justify-center flex-1 p-6 bg-gray-200">
                <h1 className="font-bold text-xl">HONG KONG HEAD OFFICE:</h1>
                <address>
                  <p>
                    308-9, 3/f., Wing Fat Industrial Building, <br /> 12, Wang
                    Tai Road, <br />
                    Kowloon Bay, Kowloon, <br /> Hong Kong Tel: (852) 2798 7213{" "}
                    <br /> Fax: (852) 2798 7151 <br /> Email:
                    jimmy@trumpcrown.com.hk
                  </p>
                </address>
              </div>
              <div className="flex flex-col justify-center flex-1 p-6 bg-gray-200">
                <h1 className="font-bold text-xl">Bangladesh office</h1>
                <address>
                  <p>
                    Trump Crow'n (BD) Ltd. <br /> (Estd. 1992 under DAC Pacific
                    Ltd) <br />
                    House No. 447, Road # 7 (East Side) <br />
                    D.O.H.S. Baridhara, Dhaka Cantonment, Dhaka — 1206, <br />
                    Bangladesh Tel: +(8802) 8414994, 8417985, 8412234 Fax:
                    +(8802) 8416263 <br /> Email:dinesh@trumpcrown.com.hk
                  </p>
                </address>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
