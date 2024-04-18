"use client";

import React, { useState } from "react";
import { useFormStatus } from "react-dom";

const LoginForm = ({ handleLogin }) => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const { pending } = useFormStatus();

  return (
    <form
      className="w-full flex flex-col justify-center items-center px-[90px]"
      action={() => {
        handleLogin(loginInfo.username, loginInfo.password);
      }}
    >
      <h2 className="uppercase tracking-widest mb-3">acount login</h2>
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
        className="w-full outline-none py-[5px] px-[15px] border border-red mb-3"
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
        className="w-full outline-none py-[5px] px-[15px] border border-red mb-3"
      />
      <button
        type="submit"
        disabled={pending}
        className="uppercase bg-red w-full py-[5px] text-white mb-3 ease-in duration-300 hover:bg-lightred"
      >
        sign in
      </button>
      <p className="text-[18px]">
        Forgot{" "}
        <span className="text-red hover:text-black cursor-pointer ease-in duration-300">
          Email / password?
        </span>
      </p>
      <button
        type="button"
        className="uppercase text-red mt-[200px] cursor-pointer hover:text-black ease-in duration-300"
      >
        sign up
      </button>
    </form>
  );
};

export default LoginForm;
