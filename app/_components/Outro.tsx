"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Outro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 0 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      className="flex font-unbounded text-black flex-col justify-center items-center text-center w-[95%] lg:w-[90%] lg:gap-y-8 gap-y-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, ease: "backOut", duration: 0.4 }}
        className="lg:text-xl uppercase text-base font-medium text-muted-foreground"
      >
        ● ● ●
      </motion.h1>
      <div className="lg:w-[60%] w-[80%]">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6, ease: "easeOut", duration: 0.6 }}
          className="lg:text-base capitalize text-black/80 text-xs"
        >
          we are passionate about turning your ideas into innovative digital
          solutions. Whether you&apos;re looking to transform your business with
          a cutting-edge application or need expert guidance on your next big
          project, our team is ready to help. Reach out today, and let&apos;s
          create the future together.
        </motion.p>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, ease: "backOut", duration: 0.4 }}
        className="lg:text-xl uppercase text-base font-medium text-muted-foreground"
      >
        ● ● ●
      </motion.h1>
    </motion.div>
  );
};

export default Outro;
