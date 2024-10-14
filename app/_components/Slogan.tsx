"use client";

import { motion } from "framer-motion";

const Slogan = () => {
  return (
    <div className="flex font-unbounded text-black flex-col justify-center items-center text-center w-[95%] lg:w-[90%] lg:gap-y-8 gap-y-6">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, ease: "backOut", duration: 0.8 }}
        className="lg:text-6xl uppercase text-2xl font-medium"
      >
        A creative agency dedicated to delivering impactful design and
        development solutions.
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, ease: "backOut", duration: 1.0 }}
        className="lg:text-xl uppercase text-base font-medium text-muted-foreground"
      >
        ● ● ●
      </motion.h1>
      <div className="lg:w-[60%] w-[80%]">
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, ease: "easeOut", duration: 1.2 }}
          className="lg:text-base capitalize text-black/80 text-xs"
        >
          Whether you need to strengthen your team with our experts or want us
          to create your product from scratch, we&apos;re ready to launch your
          vision and accelerate your growth.
        </motion.p>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, ease: "backOut", duration: 1.0 }}
        className="lg:text-xl uppercase text-base font-medium text-muted-foreground"
      >
        ● ● ●
      </motion.h1>
    </div>
  );
};

export default Slogan;
