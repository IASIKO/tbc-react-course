"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const OrdersPage = ({ userOrders }: { userOrders: any }) => {

  const t = useTranslations("orders")

  return (
    <div className="py-4 m-auto w-full max-w-5xl animate-fade-in-up">
      <div className="p-4 flex gap-8 flex-col lg:flex-row lg:items-start items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userOrders.map((order: any, index: number) => {
            if (order.payment_status === "paid") {
              return (
                <motion.div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4">
                    <p className="text-xl font-semibold">
                      {t("price")}:{" "}
                      <span className="text-red">
                        ${(order.amount_total / 100).toFixed(2)}
                      </span>
                    </p>
                    <p className="text-sm text-gray-500">
                    {t("currency")}: {order.currency.toUpperCase()}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                    {t("address")}: {order.metadata.address}
                    </p>
                    <p className="text-gray-700">City: {order.metadata.city}</p>
                    <p className="text-gray-700">
                    {t("phone")}: {order.metadata.phone}
                    </p>
                    <p className="text-green">{t("status")}: {order.payment_status}</p>
                  </div>
                </motion.div>
              );
            } else {
              return <div>{t("message")}</div>
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
