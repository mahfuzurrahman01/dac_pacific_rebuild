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
      
    </section>
  );
};

export default Blog;
