"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ProductIsInCartModal = ({ isClose }: { isClose: () => void }) => {

  const t = useTranslations("products");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={isClose}
      className="fixed inset-0 z-30 bg-[#000000bf] opacity-90 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0, rotate: "12.5deg" }}
        animate={{ scale: 1, rotate: "0deg" }}
        exit={{ scale: 0, rotate: "0deg" }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-50 p-8 border border-red rounded-xl bg-white dark:bg-gray dark:border-black"
      >
        <div className="flex items-center flex-col justify-center">
          <h2 className="text-red uppercase tracking-widest mb-6 dark:text-white">
            {t("warning")}
          </h2>
          <p>{t("isInCart")}</p>
          <div className="flex gap-2 mt-6">
            <button
              type="button"
              onClick={isClose}
              className="p-2 px-6 text-lg bg-red text-white font-medium align-middle duration-300 uppercase flex items-center gap-2 hover:bg-red hover:text-white"
            >
              {t("close")}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductIsInCartModal;
