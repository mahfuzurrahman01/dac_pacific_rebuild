"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import localFont from "@next/font/local";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const myFont2 = localFont({ src: "../../../public/fonts/Cardo-Bold.ttf" });
const page = () => {
  const backgroundImageStyle2 = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1520923179278-ee25e25e09e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
  };
  const backgroundImageStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80')",
    backgroundBlendMode: "difference",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
  };
  const [divisionMessage, setDivisionMessage] = useState<number>(3);
  return (
    <div className="relative -z-10">
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
            Service
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
                  href="/service"
                  className="flex items-center px-1 capitalize hover:underline text-lg"
                >
                  service
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 bg-white">
        <div className="w-[45%] p-5 lg:block hidden">
          <Image
            alt=""
            width={500}
            height={400}
            src="https://images.unsplash.com/photo-1524275539700-cf51138f679b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            className=""
          />
        </div>
        <div className="lg:w-[45%] lg:p-5 w-full p-2">
          <h4 className="text-2xl font-semibold mb-4" style={myFont2.style}>
            QUALITY CONTROLLING SYSTEM
          </h4>
          <small className="">
            DAC PACIFIC LTD. was established in 2019 with mission and vision to
            support in readymade garments business in Bangladesh. This company
            is running by a group of well-experienced personnel to become a
            leading Apparel Sourcing & Export Solutions Company in Bangladesh.
            We deploy one quality assurance inspector for factory who visit
            factory on regular and full-time basis in order to ensure
            development, sampling, production follow up, CSR Checking,
            Confirming required quality standards. Supplier makes sample and
            send it to us to check the workmanship and according to the customer
            comment. Supplier makes each color sample by using actual
            accessories and send to customer to avoid any mistake in Bulk
            Production.
          </small>
          <h4
            className="text-2xl font-semibold mt-5 mb-2"
            style={myFont2.style}
          >
            CLIENTS
          </h4>
          <p className="text-cyan-600 font-semibold">
            Main Market: Japan, Europe, UK & USA
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-5 bg-zinc-900 bg-opacity-90">
        <div className="lg:w-1/2 w-full">
          <section className="bg-white text-gray-800">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
              <h2 className="text-2xl font-semibold sm:text-4xl mb-4">
                OUR RESPONSIBILITY
              </h2>

              <div className="space-y-4">
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ri font-bold">
                    NEW PRODUCTS
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                    Developing any product by following buyers design and basic
                    guidelines in a short period.
                  </p>
                </details>
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ri font-bold">
                    PRICING / EVALUATION
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                    Pricing any Garment with basic details available in a Very
                    short time.
                  </p>
                </details>
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible font-bold">
                    SAMPLE DEVELOPMENT
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                    Making Development samples / Proto Samples / Counter samples
                    and Pre Production samples in a Very short time.
                  </p>
                </details>
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible font-bold">
                    SOURCING OF PRODUCTS
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                    Having service agreements with many well reputed Garment
                    Manufacturers, we are able to make any kind of item with
                    high quality items for a very competitive pricing. We always
                    honor our customer delivery commitments.
                  </p>
                </details>
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible font-bold">
                    FABRICS/TRIMS SOURCING
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                    Having contact with Many Asian and Local Fabric Mills We
                    could Source any kind of fabrics and Trim with Good Quality
                    and very competitively.
                  </p>
                </details>
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible font-bold">
                    PRINTING/ APPLIQUÉ/ EMBROIDERY
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                    We could develop Printing Screens and Embroidery Tapes,
                    following buyers Artwork and we have the facilities to do
                    any kinds of Printing, Embroidery and Appliqués in
                    Bangladesh.
                  </p>
                </details>
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible font-bold">
                    SOCIAL RESPONSIBILITY
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                    We believe safe & Healthy work place gives much confidence
                    to the workers. Human rights, occupational health and safety
                    are our main principal to source suppliers. We respect
                    customer’s code of conduct and always trying for the
                    continuous improvement of the social standard of the
                    workers.
                  </p>
                </details>
              </div>
            </div>
          </section>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col justify-center items-center p-10">
          <div className="flex gap-1 justify-center items-center">
            <button
              onClick={() => setDivisionMessage(1)}
              className={` px-4 py-1 border-transparent rounded-lg text-gray-800 ${
                divisionMessage === 1 ? "bg-gray-300" : "bg-cyan-700 text-white"
              }`}
            >
              Shipping Department
            </button>
            <button
              onClick={() => setDivisionMessage(2)}
              className={` px-4 py-1 border-transparent rounded-lg text-gray-800 ${
                divisionMessage === 2 ? "bg-gray-300" : "bg-cyan-700 text-white"
              }`}
            >
              Technical Support
            </button>
            <button
              onClick={() => setDivisionMessage(3)}
              className={` px-4 py-1 border-transparent rounded-lg text-gray-800 ${
                divisionMessage === 3 ? "bg-gray-300" : "bg-cyan-700 text-white"
              }`}
            >
              Washing Development
            </button>
          </div>
          <div className="p-5">
            {divisionMessage === 1 && (
              <p className="text-white text-center mt-5 text-lg font-semibold">
                This department consist team members and they are closely
                monitoring shipping line, Freight forwarder, vessel booking etc.
              </p>
            )}
            {divisionMessage === 2 && (
              <p className="text-white text-center mt-5 text-lg font-semibold">
                We have textile graduate Engineers whose job is to guide the
                factory from the selection of the yarn till to finishing of the
                fabric and guiding the factory in every day’s trouble shooting
                to get the proper fabrics, garments fits.
              </p>
            )}
            {divisionMessage === 3 && (
              <p className="text-white text-center mt-5 text-lg font-semibold">
                As per market requirement has developed all type of fancy washes
                like, Enzyme wash, Stone wash, Bleach wash, Tinting, Over
                dyeing, Sandblasting, Scraping, Whickering, Destroy, Grinding,
                Tagging Crinkle ,Resin ,PP etc Also keeping in mind the
                environmental problem new plant has started with full water
                treatment plant.
              </p>
            )}
          </div>
          <section className="my-8 text-white">
            <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
              <h1 className="text-2xl uppercase font-semibold leadi text-center">
              OUR PRODUCTS
              </h1>
            </div>
            <div className="">
              <div className="flex flex-col items-center mx-12 lg:mx-0">
                <div className="relative text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute top-0 left-0 w-8 h-8 text-gray-700"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  <p className="px-6 py-1 text-lg italic">
                  All kinds of T-shirts, Polo Shirts, Tank top, Pajama set, Nightwear, Home wear.   All Kinds of Jacket on Polar Fleece, Micro Fleece, Terry, Sweat, Bonded Fleece, AOP Fleece.
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute bottom-0 right-0 w-8 h-8 text-gray-700"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </div>
              
              </div>
         
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
