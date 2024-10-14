"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Wedo from '../_components/Wedo';

import { HeroParallaxDemo } from '../_components/Aboutland';
import { CardHoverEffectDemo } from '../_components/Sticky-scroll';
 



gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  
  useEffect(() => {
    // Apply GSAP ScrollTrigger to change background color smoothly as you scroll
    const sections = document.querySelectorAll(".main");

    sections.forEach((section, index) => {
      const nextBgColor = section.getAttribute("data-bgcolor") || "#ffffff"; // Default color
      const prevBgColor = index === 0 ? "#ffffff" : sections[index - 1].getAttribute("data-bgcolor");

      gsap.fromTo(
        section,
        { backgroundColor: prevBgColor || "#ffffff" }, // Start from the previous section's color
        {
          backgroundColor: nextBgColor, // Transition to the current section's color
          scrollTrigger: {
            trigger: section,
            start: "top 75%", // Color starts changing when section hits the center of the screen
            end: "bottom 100%", // End when section bottom reaches the center
            scrub: true, // Smooth transition
          },
        }
      );
    });

    // Clean up ScrollTriggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
 

  return (
    <div>
      <HeroParallaxDemo/>
      
      <div className="main flex justify-center" data-bgcolor="#ffffff">
        <div className="absolute z-10 lg:mt-80 mt-28 text-center">
          <h1 className="font-unbounded font-bold text-3xl  lg:text-7xl">Team Grove</h1>
          <p className="font-semibold font-alice text-2xl">
            Sense of growth, community, and organic development
          </p>
        </div>
        <div className="lg:w-1/2 opacity-60">
          <img src="/images/5471.jpg" alt="Group" />
        </div>
      </div>

      <section className="text-gray-600 body-font main" data-bgcolor="#7E60BF">
        <div className="container px-5 py-24 mx-auto">
        <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8 text-center ml-10"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
          <div className=" w-full mx-auto text-left">
          
            <p className="leading-relaxed lg:text-4xl text-2xl text-black font-unbounded font-bold">
              At <span className=" font-extrabold text-white">Grove</span> we believe in cultivating innovative solutions that empower businesses to thrive in the digital age. Our mission is to transform the way companies operate by providing cutting-edge software products tailored to meet the unique needs of our clients.


            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              Team Grove
            </h2>
          </div>
        </div>
      </section>

      <div className="main lg:p-24" data-bgcolor="#7E60BF">
        <h2 className="text-4xl font-bold font-unbounded text-center p-4">
          We are Team Grove
        </h2>
        {/* <Staff /> */}
        <CardHoverEffectDemo/>
      </div>
      <div>
        <Wedo/>
      </div>
    </div>
  );
};

export default Page;
