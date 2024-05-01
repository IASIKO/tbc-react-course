"use client";

import React, { useState } from "react";
import Button from "../UI/Button";

interface Dict {
  profile: Record<string, string>;
}

const ProfileDetails = ({ dict }: { dict: Dict }) => {
  const [changePassword, setChangePassword] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  return (
    <section className="py-[60px] dark:bg-gray">
      <div className="max-w-[1140px] m-auto">
        <div className="p-[15px]">
          <h3 className="text-[25px] font-medium text-black">
            {dict.profile.profileDetails}
          </h3>
          <div className="flex gap-5">
            <div className="flex flex-col w-[50%] my-[10px]">
              <h2 className="text-black font-normal">
                {dict.profile.firstName}
              </h2>
              <div className="border-[1px] border-solid border-red py-[5px]">
                <span className="pl-[20px] dark:text-white">Giorgi</span>
              </div>
            </div>
            <div className="flex flex-col w-[50%] my-[10px]">
              <h2 className="text-black font-normal">
                {dict.profile.lastName}
              </h2>
              <div className="border-[1px] border-solid border-red py-[5px]">
                <span className="pl-[20px] dark:text-white">Iaseshvili</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[100%] my-[10px]">
            <h2 className="text-black font-normal">
              {dict.profile.stateAndCountry}
            </h2>
            <div className="border-[1px] border-solid border-red py-[5px]">
              <span className="pl-[20px] dark:text-white">Georgia</span>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col w-[50%] my-[10px]">
              <h2 className="text-black font-normal">
                {dict.profile.streetAndAddress}
              </h2>
              <div className="border-[1px] border-solid border-red py-[5px]">
                <span className="pl-[20px] dark:text-white">
                  Ipolite Khvichia 31/1
                </span>
              </div>
            </div>
            <div className="flex flex-col w-[50%] my-[10px]">
              <h2 className="text-black font-normal"></h2>
              <div className="border-[1px] border-solid border-red py-[5px]">
                <span className="pl-[20px] dark:text-white">Flat 3</span>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col w-[50%] my-[10px]">
              <h2 className="text-black font-normal">
                {dict.profile.townOrCity}
              </h2>
              <div className="border-[1px] border-solid border-red py-[5px]">
                <span className="pl-[20px] dark:text-white">Tbilisi</span>
              </div>
            </div>
            <div className="flex flex-col w-[50%] my-[10px]">
              <h2 className="text-black font-normal">
                {dict.profile.postCodeAndZIP}
              </h2>
              <div className="border-[1px] border-solid border-red py-[5px]">
                <span className="pl-[20px] dark:text-white">10166</span>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col w-[50%] my-[10px]">
              <h2 className="text-black font-normal">{dict.profile.phone}</h2>
              <div className="border-[1px] border-solid border-red py-[5px]">
                <span className="pl-[20px] dark:text-white">
                  +995 558 150 018
                </span>
              </div>
            </div>
            <div className="flex flex-col w-[50%] my-[10px]">
              <h2 className="text-black font-normal">
                {dict.profile.emailAddress}
              </h2>
              <div className="border-[1px] border-solid border-red py-[5px]">
                <span className="pl-[20px] dark:text-white">
                  iaseshviligi@gmail.com
                </span>
              </div>
            </div>
          </div>
          <form>
            <h3 className="text-[25px] font-medium text-black pt-[60px]">
              {dict.profile.changePassword}
            </h3>
            <div className="flex mb-[30px]">
              <div className="flex flex-col w-[50%]">
                <label className="uppercase text-[#b7472a] text-[15px] font-medium">
                  {dict.profile.newPassword}
                </label>
                <input
                  type="password"
                  className="w-[100%] text-[17px] rounded-[2px] shadow-none border-b-[1px] border-solid border-gray focus:outline-none focus:border-b-[1px] focus:border-[#b7472a] placeholder:pl-2"
                  placeholder={dict.profile.newPasswordPlaceholder}
                  value={changePassword.newPassword}
                  onChange={(e) =>
                    setChangePassword((prevState) => ({
                      ...prevState,
                      newPassword: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex flex-col ml-[20px] w-[50%]">
                <label className="uppercase text-[#b7472a] text-[15px] font-medium">
                  {dict.profile.confirmNewPassword}
                </label>
                <input
                  type="password"
                  className="w-[100%] text-[17px] rounded-[2px] shadow-none border-b-[1px] border-solid border-gray focus:outline-none focus:border-b-[1px] focus:border-[#b7472a] placeholder:pl-2"
                  placeholder={dict.profile.confirmNewPasswordPlaceholder}
                  value={changePassword.confirmNewPassword}
                  onChange={(e) =>
                    setChangePassword((prevState) => ({
                      ...prevState,
                      confirmNewPassword: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <Button>{dict.profile.save}</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
