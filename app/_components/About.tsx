"use client";

import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.4, ease: "easeOut", duration: 0.6 }}
      className="flex font-unbounded justify-center items-center flex-col lg:gap-y-6 gap-y-8 my-10 text-center text-white bg-gradient-to-b from-black to-purple-900 lg:w-[95%] w-[92%] p-6 lg:p-12 rounded-md shadow-md"
    >
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.8, ease: "backOut", duration: 0.8 }}
        className="lg:text-6xl uppercase text-2xl font-medium"
      >
        We design, build and ship world-class digital products for
        forward-thinking brands.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2, ease: "backOut", duration: 0.8 }}
        className="flex flex-col justify-center items-center lg:p-6 p-4 gap-y-6 lg:gap-y-10 lg:w-[60%]"
      >
        <p className="text-xs lg:text-sm capitalize">
          We prioritize people, recognizing that a thoughtfully designed product
          can profoundly enhance the lives of its users. By empowering
          individuals, we tackle distinct challenges, drive innovation, and
          unlock new opportunities for our clients. <br />
          <br />
          Our independent mindset fuels our creativity and technological
          approach, enabling us to maintain high standards and consistently
          deliver exceptional results.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, ease: "backOut", duration: 0.8 }}
        >
          <Button size="sm" variant="secondary">
            <Link href="/about" className="flex items-center">
              About Us
              <span>
                <ArrowRight className="w-4 h-4 ml-1 duration-300" />
              </span>
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
