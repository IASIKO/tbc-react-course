import { motion } from "framer-motion";
import Link from "next/link";


const EmptyOrdersComp = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center dark:bg-[#171717] text-white text-center row-start-2 sm:h-[500px]"
    >
      <motion.h2
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-2xl font-bold text-red uppercase"
      >
        You have not orders
      </motion.h2>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#f04d2e] text-white border-none py-2 px-4 text-lg cursor-pointer rounded-md"
      >
        <Link href="/products">See products</Link>
      </motion.button>
    </motion.div>
  )
}

export default EmptyOrdersComp