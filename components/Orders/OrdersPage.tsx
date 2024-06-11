"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { AuthUser } from "../../types/profile-types";
import { IoReceiptSharp } from "react-icons/io5";
import { createRefund } from "../../lib/actions";
import { useState } from "react";
import ThemeLoader from "../UI/ThemeLoader";

const OrdersPage = ({
  userOrders,
  authUser,
}: {
  userOrders: any;
  authUser: AuthUser;
}) => {
  const [loading, setLoading] = useState(false);
  const t = useTranslations("orders");
  
  const refundHandler = async (charge: string) => {
    setLoading(true);
    await createRefund(charge);
    setLoading(false);
  };

  return (
    <div className="py-4 m-auto w-full max-w-5xl animate-fade-in-up">
      <div className="p-4 flex gap-8 flex-col lg:flex-row lg:items-start items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userOrders.map((order: any) => (
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
              <div className="space-y-2">
                <p className="text-gray-700">
                  {t("address")}: {order.metadata.address}
                </p>
                <p className="text-gray-700">City: {order.metadata.city}</p>
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
                      ? "Refunded"
                      : "Paid"}
                  </span>
                </p>
                {authUser.role === "admin" &&
                  order.latest_charge.refunded === false && (
                    <button
                      onClick={() => refundHandler(order.latest_charge.id)}
                      type="button"
                      className="p-1 px-[25px] border border-solid border-red text-[18px] text-white font-medium align-middle duration-300 uppercase flex items-center justify-center gap-2 bg-red hover:bg-lightred w-[150px]"
                    >
                      {loading ? <ThemeLoader /> : "Refund"}
                    </button>
                  )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
