"use client";

import React, { useState } from "react";
import Theme from "../UI/Theme";
import { handleLoginRoute } from "@/lib/helpers";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-center py-8 gap-40">
      <Theme />
      <form
        className="w-full flex flex-col justify-center items-center px-[90px]"
        onSubmit={(e) => {
          e.preventDefault();
          handleLoginRoute(loginInfo.username, loginInfo.password).then(() =>
            window.location.reload()
          );
        }}
      >
        <h2 className="uppercase tracking-widest mb-3 dark:text-white">
          acount login
        </h2>
        <input
          type="text"
          placeholder="Username"
          required
          value={loginInfo.username}
          onChange={(e) =>
            setLoginInfo((prevState) => ({
              ...prevState,
              username: e.target.value,
            }))
          }
          className="w-full outline-none py-[5px] px-[15px] border border-red mb-3 dark:border-dark"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={loginInfo.password}
          onChange={(e) =>
            setLoginInfo((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
          className="w-full outline-none py-[5px] px-[15px] border border-red mb-3 dark:border-dark"
        />
        <button
          type="submit"
          className="uppercase bg-red w-full py-[5px] text-white mb-3 ease-in duration-300 hover:bg-lightred dark:bg-dark dark:hover:bg-secondary"
        >
          sign in
        </button>
        <p className="text-[18px] dark:text-dark">
          Forgot{" "}
          <span className="text-red hover:text-black cursor-pointer ease-in duration-300 dark:text-white">
            Email / password?
          </span>
        </p>
        <button
          type="button"
          className="uppercase text-red mt-[200px] cursor-pointer hover:text-black ease-in duration-300 dark:text-white"
        >
          sign up
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
