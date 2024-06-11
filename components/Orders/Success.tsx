"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

const SuccessPage = () => {
  const t = useTranslations('resPay')
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen dark:bg-[#171717] text-white text-center"
    >
      <motion.h2
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-2xl font-bold text-success uppercase"
      >
       {t("succ")}
      </motion.h2>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#f04d2e] text-white border-none py-2 px-4 text-lg cursor-pointer rounded-md"
      >
        <Link href="/orders">{t("seeOrders")}</Link>
      </motion.button>
    </motion.div>
  );
};

export default SuccessPage;
