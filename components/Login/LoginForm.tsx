"use client";

import React, { useState } from "react";
import Theme from "../UI/Theme";
import { useRouter } from "next/navigation";
import Language from "../UI/Language";
import { handleLoginRoute } from "../../lib/helpers";

interface Dict {
  login: {
    title: string;
    usernameInput: string;
    passwordInput: string;
    signin: string;
    forgot: string;
    signup: string;
  };
}

const LoginForm: React.FC<{ dict: Dict }> = ({ dict }) => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-center py-5 gap-40">
      <div>
        <Theme />
        <Language dict={dict} />
      </div>
      <form
        className="w-full flex flex-col justify-center items-center px-[90px]"
        onSubmit={(e) => {
          e.preventDefault();
          handleLoginRoute(loginInfo.username, loginInfo.password).then(() =>
            router.push("/")
          );
        }}
      >
        <h2 className="uppercase tracking-widest mb-3 dark:text-white">
          {dict.login.title}
        </h2>
        <input
          type="text"
          placeholder={dict.login.usernameInput}
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
          placeholder={dict.login.passwordInput}
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
          {dict.login.signin}
        </button>
        <p className="text-[18px] dark:text-dark">
          {dict.login.forgot}{" "}
          <span className="text-red hover:text-black cursor-pointer ease-in duration-300 dark:text-white">
            {dict.login.usernameInput} / {dict.login.passwordInput}?
          </span>
        </p>
        <button
          type="button"
          className="uppercase text-red mt-[200px] cursor-pointer hover:text-black ease-in duration-300 dark:text-white"
        >
          {dict.login.signup}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
