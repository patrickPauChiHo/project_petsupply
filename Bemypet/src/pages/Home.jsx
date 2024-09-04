import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCat } from "react-icons/fa";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  return (
    <AnimatePresence>
      <motion.section
        {...slideAnimation("left")}
        className="w-full min-h-screen justify-center  flex-col gap-10 xl:gap-0 items-center  text-white"
      >
        <motion.header className="mb-4" {...slideAnimation("down")}>
          <FaCat color="gray" size="50px" />
        </motion.header>
        <motion.div
          {...headContainerAnimation}
          className="flex-1 xl:justify-center justify-start flex flex-col gap-10"
        >
          <motion.div {...headTextAnimation}>
            <h2 className="text-slate-600 font-bold xl:text-center">
              Mobile Grooming Service! Your Happy Pets, Our Priority!
            </h2>
          </motion.div>

          <img className="mt-10" src="./landing.jpg" alt="landing" />
          <motion.div
            {...headContentAnimation}
            className="text-slate-600 flex flex-col gap-5  text-sm mt-10"
          >
            <p className="absolute ">
              Welcome to{" "}
              <span className="font-bold text-slate-500 text-xl ">BemyPet</span>
              , your one-stop shop for all your pet's needs. We're passionate
              about providing high-quality products and exceptional customer
              service to ensure your furry friends live happy, healthy lives.
              From premium food and treats to cozy beds and toys, we have
              everything you need to pamper your pet. Discover our wide range of
              products and shop with confidence knowing you're supporting a
              company that truly cares about animals.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};
export default Home;
