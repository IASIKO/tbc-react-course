"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Image from "next/image";
import askem from "../../public/Assets/images/partners/askmen.png";
import buzz from "../../public/Assets/images/partners/buzzfeed.png";
import vine from "../../public/Assets/images/partners/vinepair.webp";
import whisky from "../../public/Assets/images/partners/whisky-advocate.webp";
import { useTranslations } from "next-intl";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const images = [askem, buzz, vine, whisky];

const PartnersSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const t = useTranslations("about");
  const imageIndex = wrap(0, images.length, page);

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <div className="bg-white dark:bg-gray py-8 relative">
      <h2 className="text-center text-red dark:text-white sm:text-[30px] text-[20px] font-bold mb-4 italic">
        {t("partners")}
      </h2>
      <div className="w-full h-[250px] sm:h-32 mx-auto flex items-center overflow-hidden relative">
        <button
          aria-label="Click left button"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full w-[30px] h-[30px] md:w-[40px] md:h-[40px] flex justify-center items-center select-none cursor-pointer font-bold text-[18px] z-20 hover:bg-gray-200"
          onClick={() => paginate(-1)}
        >
          <FaAngleLeft />
        </button>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="w-full h-full flex flex-col sm:flex-row items-center justify-center"
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1 }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1/3 flex-shrink-0 sm:p-24">
                <Image
                  src={images[wrap(0, images.length, imageIndex + i)]}
                  alt={`Partners ${
                    images[wrap(0, images.length, imageIndex + i)]
                  }`}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        <button
          aria-label="Click right button"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full w-[30px] h-[30px] md:w-[40px] md:h-[40px] flex justify-center items-center select-none cursor-pointer font-bold text-[18px] z-20 hover:bg-gray-200"
          onClick={() => paginate(1)}
        >
         <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default PartnersSlider;
