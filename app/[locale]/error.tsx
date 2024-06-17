"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log(error);

  const t = useTranslations("error");

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
        className="mb-6 text-2xl font-bold"
      >
        {t("wrong")}
      </motion.h2>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => reset()}
        className="bg-[#f04d2e] text-white border-none py-2 px-4 text-lg cursor-pointer rounded-md"
      >
        {t("try")}
      </motion.button>
    </motion.div>
  );
}
