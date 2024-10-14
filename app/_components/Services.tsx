"use client";

import { motion, useInView } from "framer-motion";
import CardForService from "./CardForService";
import { useRef } from "react";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const gridSquareVariants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const items = [
  {
    id: 1,
    imageSrc: "/images/services/ad.png",
    title: "App Development",
    desc: "Impress your mobile audience with a user-friendly app that is visually appealing and engaging.",
  },
  {
    id: 2,
    imageSrc: "/images/services/ai.png",
    title: "AI-ML",
    desc: "Leading provider of AI-driven solutions offering chatbots, machine learning, and generative AI services for innovation.",
  },
  {
    id: 3,
    imageSrc: "/images/services/wd.png",
    title: "Web Development",
    desc: "Customized development solutions that are visually stunning, user-friendly and seamlessly functional.",
  },
  {
    id: 4,
    imageSrc: "/images/services/uiux.png",
    title: "UI/UX",
    desc: `Your software is your business's digital face. Let's make it an unforgettable one with user-centered designs.`,
  },
  {
    id: 5,
    imageSrc: "/images/services/marketing.png",
    title: "Marketing",
    desc: "From strategy creation to execution, we provide comprehensive marketing services to help your business thrive.",
  },
  {
    id: 6,
    imageSrc: "/images/services/branding.png",
    title: "Branding",
    desc: "Creating an identity that is unique, consistent and captivating. Let us craft a brand story that resonates with your audience.",
  },
];

const Services = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="flex font-unbounded text-black flex-col justify-center items-center text-center w-[95%] lg:w-[90%] lg:gap-y-8 gap-y-6 mt-10">
      <h1 className="lg:text-4xl uppercase text-2xl text-center font-medium">
        Transform your{" "}
        <span className="bg-gradient-to-l from-purple-700 to-black text-transparent bg-clip-text [-webkit-background-clip:text]">
          business
        </span>{" "}
        with our services
      </h1>
      <motion.div
        ref={ref}
        variants={gridContainerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-3 p-6 gap-6"
      >
        {items.map((item) => (
          <motion.div
            variants={gridSquareVariants}
            key={item.id}
            className="flex justify-center items-center w-full"
          >
            <CardForService
              desc={item.desc}
              imageSrc={item.imageSrc}
              title={item.title}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
