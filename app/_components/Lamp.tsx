"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";
import { TabsDemo } from "./Tabs";

export function LampDemo() {
  return (
    <LampContainer className="pt-44">
      <motion.h1
      
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" mt-72 bg-gradient-to-br from-slate-100 to-slate-200 py-4 bg-clip-text text-center lg:text-5xl text-5xl font-bold font-unbounded tracking-tight text-transparent md:text-7xl"
      >
        The Services <br /> We Provide
       
      
      </motion.h1>

      <div className=" mt-10">
      <TabsDemo/>
      </div>
    </LampContainer>
  );
}
