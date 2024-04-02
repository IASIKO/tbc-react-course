"use client";

import React, { useState } from "react";
import Button from "../UI/Button";

const ProfileDetails = () => {
  const [changePassword, setChangePassword] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  return (
    <section className="py-[60px]">
      <div className="max-w-[1140px] m-auto">
        <div className="p-[15px]">
          <h3 className="text-[25px] font-medium text-black">
            Profile Details
          </h3>
          <div className="flex gap-5">
            <div className="flex flex-col w-[50%] my-[10px]">
              <h2 className="text-black font-normal">First Name</h2>
              <div className="border-[1px] border-solid border-red py-[5px]">
                <span className="pl-[20px]">Giorgi</span>
              </div>
            </div>
            <div className="flex flex-col w-[50%] my-[10px]">
              <h2 className="text-black font-normal">Last Name</h2>
              <div className="border-[1px] border-solid border-red py-[5px]">
                <span className="pl-[20px]">Iaseshvili</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[100%] my-[10px]">
            <h2 className="text-black font-normal">State / Country</h2>
            <div className="border-[1px] border-solid border-red py-[5px]">
              <span className="pl-[20px]">Georgia</span>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col w-[50%] my-[10px]">
              <h2 className="text-black font-normal">Street / Address</h2>
              <div className="border-[1px] border-solid border-red py-[5px]">
                <span className="pl-[20px]">Ipolite Khvichia 31/1</span>
              </div>
            </div>
            <div className="flex flex-col w-[50%] my-[10px]">
              <h2 className="text-black font-normal">Last Name</h2>
              <div className="border-[1px] border-solid border-red py-[5px]">
                <span className="pl-[20px]">Flat 3</span>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col w-[50%] my-[10px]">
              <h2 className="text-black font-normal">Town / City</h2>
              <div className="border-[1px] border-solid border-red py-[5px]">
                <span className="pl-[20px]">Tbilisi</span>
              </div>
            </div>
            <div className="flex flex-col w-[50%] my-[10px]">
              <h2 className="text-black font-normal">Post Code / ZIP</h2>
              <div className="border-[1px] border-solid border-red py-[5px]">
                <span className="pl-[20px]">10166</span>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col w-[50%] my-[10px]">
              <h2 className="text-black font-normal">Phone</h2>
              <div className="border-[1px] border-solid border-red py-[5px]">
                <span className="pl-[20px]">+995 558 150 018</span>
              </div>
            </div>
            <div className="flex flex-col w-[50%] my-[10px]">
              <h2 className="text-black font-normal">Email Address</h2>
              <div className="border-[1px] border-solid border-red py-[5px]">
                <span className="pl-[20px]">iaseshviligi@gmail.com</span>
              </div>
            </div>
          </div>
          <form>
            <h3 className="text-[25px] font-medium text-black pt-[60px]">
              Change Password
            </h3>
            <div className="flex mb-[30px]">
              <div className="flex flex-col w-[50%]">
                <label className="uppercase text-[#b7472a] text-[15px] font-medium">
                  new password
                </label>
                <input
                  type="password"
                  className="w-[100%] text-[17px] rounded-[2px] shadow-none border-b-[1px] border-solid border-gray focus:outline-none focus:border-b-[1px] focus:border-[#b7472a]"
                  placeholder="New Password"
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
                  confirm new password
                </label>
                <input
                  type="password"
                  className="w-[100%] text-[17px] rounded-[2px] shadow-none border-b-[1px] border-solid border-gray focus:outline-none focus:border-b-[1px] focus:border-[#b7472a]"
                  placeholder="Confirm New Password"
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
            <Button>Save</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
