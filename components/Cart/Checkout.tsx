"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { selectedProduct } from "../../types/products-types";
import { AuthUser, CheckoutProfile } from "../../types/profile-types";
import { checkoutAction, resetCartAction } from "../../lib/actions";
import { useTranslations } from "next-intl";
import ThemeLoader from "../UI/ThemeLoader";

const Checkout = ({
  selectedProducts,
  authUser,
}: {
  selectedProducts: selectedProduct[];
  authUser: AuthUser;
}) => {
  const [cartProducts, setCartProducts] = useState<selectedProduct[] | []>([]);
  const [profile, setProfile] = useState<CheckoutProfile>({
    city: "",
    address: "",
    phone: "",
    sub: "",
  });
  const [loading, setLoading] = useState(false);
  const t = useTranslations("profile");
  const tCart = useTranslations("cart");

  useEffect(() => {
    setCartProducts(selectedProducts);
  }, []);

  useEffect(() => {
    if (authUser) {
      setProfile({
        city: authUser.city || "",
        address: authUser.address || "",
        phone: authUser.phone || "",
        sub: authUser.sub || "",
      });
    }
  }, [authUser]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    await checkoutAction(cartProducts, profile);
    setLoading(false);
    resetCartAction()
  };

  const countSubtotal = cartProducts.reduce(
    (curr: number, acc: selectedProduct) => {
      return curr + acc.quantity * acc.price;
    },
    0
  );

  const subtotal = Math.round(countSubtotal * 100) / 100;

  return (
    <div className="border border-red p-8 rounded">
      <form onSubmit={handleSubmit}>
        <div>
          <h3 className="text-[24px] mb-4 font-normal text-black dark:text-white">
            {tCart("cartTotals")}
          </h3>
          <p className="flex justify-between">
            <span className="text-[16px] font-bold">{tCart("subtotal")}</span>
            <span className="text-[16px]">${subtotal}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-[16px] font-bold"> {tCart("delivery")}</span>
            <span className="text-[16px]">$0.00</span>
          </p>
          <p className="flex justify-between mb-4">
            <span className="text-[16px] font-bold">{tCart("discount")}</span>
            <span className="text-[16px]">$0.00</span>
          </p>
          <hr className="text-red" />
          <p className="flex justify-between p-4">
            <span className="text-[22px] font-bold">{tCart("total2")}</span>
            <span className="text-[22px] text-black font-bold dark:text-red">
              ${subtotal - 0 - 0}
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-black font-normal dark:text-white">
            {t("city")}
          </h2>
          <input
            type="text"
            name="city"
            value={profile.city}
            onChange={handleChange}
            className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
          />
          <h2 className="text-black font-normal dark:text-white">
            {t("address")}
          </h2>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
          />
          <h2 className="text-black font-normal dark:text-white">
            {t("phone")}
          </h2>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="p-[7px] px-[25px] border border-solid border-red text-[18px] text-white bg-red font-medium align-middle duration-300 uppercase flex items-center justify-center gap-2 hover:bg-lightred hover:text-white my-4 w-full sm:w-[300px]"
        >
          {loading ? <ThemeLoader /> : t("buyNow")}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
