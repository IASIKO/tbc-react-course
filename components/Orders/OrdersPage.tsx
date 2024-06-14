"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { AuthUser, Order } from "../../types/profile-types";
import { IoReceiptSharp } from "react-icons/io5";
import { createRefund } from "../../lib/actions";
import { useState } from "react";
import ThemeLoader from "../UI/ThemeLoader";
import EmptyOrdersComp from "./EmptyOrdersComp";

const OrdersPage = ({
  userOrders,
  authUser,
}: {
  userOrders: Order[];
  authUser: AuthUser;
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedChargeId, setSelectedChargeId] = useState<string | null>(null);
  const t = useTranslations("orders");

  const refundHandler = async () => {
    if (selectedChargeId) {
      setLoading(true);
      await createRefund(selectedChargeId);
      setModalIsOpen(false);
      setLoading(false);
      setSelectedChargeId(null);
    }
  };

  const isClose = () => {
    document.body.style.overflow = "unset";
    setModalIsOpen(false);
    setSelectedChargeId(null);
  };

  const isOpen = (chargeId: string) => {
    document.body.style.overflow = "hidden";
    setModalIsOpen(true);
    setSelectedChargeId(chargeId);
  };

  return (
    <div className="py-4 m-auto w-full max-w-5xl animate-fade-in-up">
      <div className="p-4 flex gap-8 flex-col lg:flex-row lg:items-start items-center">
        <div
          className={
            userOrders.length
              ? `m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
              : `w-full flex justify-center`
          }
        >
          {userOrders.length ? (
            userOrders.map((order) => (
              <motion.div
                key={order.latest_charge.id}
                className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4 flex justify-between">
                  <div>
                    <p className="text-xl font-semibold">
                      {t("price")}:{" "}
                      <span className="text-red">
                        ${(order.amount / 100).toFixed(2)}
                      </span>
                    </p>
                    <p className="text-sm text-gray-500">
                      {t("currency")}: {order.currency.toUpperCase()}
                    </p>
                  </div>
                  <a
                    href={order.latest_charge.receipt_url}
                    aria-label="Order Receipt"
                    target="_blank"
                    className="text-red underline"
                  >
                    <IoReceiptSharp />
                  </a>
                </div>
                <div className="space-y-2 flex flex-col justify-between h-auto sm:h-[250px] mb-4">
                  <p className="text-gray-700">
                    {t("address")}: {order.metadata.address}
                  </p>
                  <p className="text-gray-700">{t("city")}: {order.metadata.city}</p>
                  <p className="text-gray-700">
                    {t("phone")}: {order.metadata.phone}
                  </p>
                  <p>
                    {t("status")}:{" "}
                    <span
                      className={`font-bold ${
                        order.latest_charge.refunded === true
                          ? "text-gray"
                          : "text-green"
                      }`}
                    >
                      {order.latest_charge.refunded === true
                        ? t("refunded")
                        : t("paid")}
                    </span>
                  </p>
                </div>
                  {authUser.role === "admin" &&
                    order.latest_charge.refunded === false && (
                      <button
                        onClick={() => isOpen(order.latest_charge.id)}
                        type="button"
                        className="p-1 px-[25px] border border-solid border-red text-[18px] text-white font-medium align-middle duration-300 uppercase flex items-center justify-center gap-2 bg-red hover:bg-lightred w-[150px]"
                      >
                        {t("refund")}
                      </button>
                    )}
              </motion.div>
            ))
          ) : (
            <EmptyOrdersComp />
          )}
          <AnimatePresence>
            {modalIsOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={isClose}
                className="fixed inset-0 z-30 bg-black bg-opacity-80 flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: "12.5deg" }}
                  animate={{ scale: 1, rotate: "0deg" }}
                  exit={{ scale: 0, rotate: "0deg" }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative z-50 p-8 border border-red rounded-xl bg-red dark:bg-gray dark:border-black mx-2"
                >
                  <div className="flex items-center flex-col justify-center">
                    <h2 className="text-white tracking-widest mb-6 dark:text-white text-center max-w-[400px]">
                    {t("modalText")}
                    </h2>
                    {loading ? (
                      <ThemeLoader />
                    ) : (
                      <div className="flex gap-2 mt-6">
                        <button
                          type="button"
                          onClick={refundHandler}
                          className="p-2 px-6 text-lg bg-white text-red dark:text-black font-medium align-middle duration-300 uppercase flex items-center gap-2 w-[100px] justify-center"
                        >
                          {t("yes")}
                        </button>
                        <button
                          type="button"
                          onClick={isClose}
                          className="p-2 px-6 text-lg bg-white text-red dark:text-black font-medium align-middle duration-300 uppercase flex items-center gap-2 w-[100px] justify-center"
                        >
                          {t("no")}
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
