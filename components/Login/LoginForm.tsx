"use client";

import React, { useState } from "react";
import Theme from "../UI/Theme";
import { useRouter } from "next/navigation";
import Language from "../UI/Language";
import { handleLoginRoute } from "../../lib/helpers";
import ThemeLoader from "../UI/ThemeLoader";

interface Dict {
  login: Record<string, string>;
}

const LoginForm: React.FC<{ dict: Dict }> = ({ dict }) => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      await handleLoginRoute(loginInfo.username, loginInfo.password);
      router.push("/");
      setIsLoading(false);
    } catch (error) {
      setErrorMessage("Username / Password is incorrect");
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-40">
      <div className="mt-2">
        <Theme />
        <Language dict={dict} />
      </div>
      <form
        className="w-full flex flex-col justify-center items-center px-[90px]"
        onSubmit={handleSubmit}
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
          className={`h-11 flex justify-center uppercase bg-red w-full py-[5px] text-white mb-3 ease-in duration-300 hover:bg-lightred dark:bg-dark dark:hover:bg-secondary ${
            isLoading ? "bg-lightred" : "bg-red"
          } ${isLoading ? "dark:bg-secondary" : "dark:bg-dark"}`}
          disabled={isLoading ? true : false}
        >
          {isLoading ? <ThemeLoader /> : dict.login.signin}
        </button>
        <p className="text-[18px] dark:text-dark">
          {dict.login.forgot}{" "}
          <span className="text-red hover:text-black cursor-pointer ease-in duration-300 dark:text-white">
            {dict.login.usernameInput} / {dict.login.passwordInput}?
          </span>
        </p>
        {errorMessage && (
          <p className="bg-red text-white font-normal dark:bg-dark p-2 mt-4 rounded-md animate-fall text-[18px]">
            {errorMessage}
          </p>
        )}
        <button
          type="button"
          className="absolute bottom-14 uppercase text-red cursor-pointer hover:text-black ease-in duration-300 dark:text-white"
        >
          {dict.login.signup}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
