"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Blog = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <section className="py-6 sm:py-12 bg-gray-50 text-gray-600 w-11/12 mx-auto">
      <div className="container p-6 mx-auto space-y-8">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mt-4">
          <article
            data-aos="zoom-in"
            className="flex flex-col bg-zinc-950 text-white"
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
          </article>
          <article
            data-aos="zoom-in"
            className="flex flex-col bg-zinc-950 text-white"
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
                2 years as product development service. Specializing in quality
                product pattern development, precision made for production
                environment.
              </p>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                <span>June 2, 2020</span>
                <span>2.2K views</span>
              </div>
            </div>
          </article>
          <article
            data-aos="zoom-in"
            className="flex flex-col bg-zinc-950 text-white"
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
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blog;
