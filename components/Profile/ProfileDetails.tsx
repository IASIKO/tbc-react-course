"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useUser } from "@auth0/nextjs-auth0/client";
import ProfileAvatar from "./ProfileAvatar";
import { AuthUser, Profile } from "../../types/profile-types";
import { PutBlobResult } from "@vercel/blob";
import { createAuthUserAction } from "../../lib/actions";
import ThemeLoader from "../UI/ThemeLoader";

interface ProfileDetailsProps {
  authUser: AuthUser;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ authUser }) => {
  const { user } = useUser();
  const [profile, setProfile] = useState<Profile>({
    given_name: (user?.given_name as string) || "",
    family_name: (user?.family_name as string) || "",
    country: "",
    city: "",
    address: "",
    phone: "",
    email: user?.email || "",
    sub: user?.sub || "",
    picture: user?.picture || "",
    role: authUser.role && authUser.role === 'admin' ? 'admin' : 'default'
  });
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [loading, setLoading] = useState(false);
  
  const t = useTranslations("profile");
  
  useEffect(() => {
    if (authUser) {
      setProfile({
        given_name: authUser.given_name || "",
        family_name: authUser.family_name || "",
        country: authUser.country || "",
        city: authUser.city || "",
        address: authUser.address || "",
        phone: authUser.phone || "",
        email: authUser.email || "",
        sub: authUser.sub || "",
        picture: authUser.picture || "",
        role: authUser.role
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
      await createAuthUserAction(
        { ...profile },
        blob ? blob.url : profile.picture
      );
    setLoading(false);
  };

  useEffect(() => {
    if (blob !== null) {
      createAuthUserAction(profile, blob.url);
    }
  }, [blob]);

  return (
    <section className="py-[60px] dark:bg-gray">
      <div className="max-w-[1140px] m-auto">
        <div className="p-[15px]">
          <h3 className="text-[25px] font-medium text-black dark:text-white">
            {t("profileDetails")}
          </h3>
          <ProfileAvatar
            picture={profile.picture}
            blob={blob}
            setBlob={setBlob}
          />
          <form onSubmit={handleSubmit}>
            <div className="flex gap-5">
              <div className="flex flex-col w-[50%] my-[10px]">
                <h2 className="text-black font-normal dark:text-white">
                  {t("firstName")}
                </h2>
                <input
                  type="text"
                  name="given_name"
                  value={profile.given_name}
                  onChange={handleChange}
                  className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
                />
              </div>
              <div className="flex flex-col w-[50%] my-[10px]">
                <h2 className="text-black font-normal dark:text-white">
                  {t("lastName")}
                </h2>
                <input
                  type="text"
                  name="family_name"
                  value={profile.family_name}
                  onChange={handleChange}
                  className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
                />
              </div>
            </div>
            <div className="flex flex-col w-[100%] my-[10px]">
              <h2 className="text-black font-normal dark:text-white">
                {t("stateAndCountry")}
              </h2>
              <input
                type="text"
                name="country"
                value={profile.country}
                onChange={handleChange}
                className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
              />
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col w-[50%] my-[10px]">
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
              </div>
              <div className="flex flex-col w-[50%] my-[10px]">
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
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col w-[50%] my-[10px]">
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
              <div className="flex flex-col w-[50%] my-[10px]">
                <h2 className="text-black font-normal dark:text-white">
                  {t("emailAddress")}
                </h2>
                <input
                  type="text"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
                  disabled
                />
              </div>
            </div>
            <button
              type="submit"
              className="p-[7px] px-[25px] border border-solid border-red text-[18px] text-red font-medium align-middle duration-300 uppercase flex items-center justify-center gap-2 hover:bg-red hover:text-white"
            >
              {loading ? <ThemeLoader /> : t("save")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
