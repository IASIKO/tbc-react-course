import React from "react";

const LoginForm = () => {
  return (
    <form className="w-full flex flex-col justify-center items-center px-[90px]">
      <h2 className="uppercase tracking-widest mb-3">acount login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full outline-none py-[5px] px-[15px] border border-red mb-3"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full outline-none py-[5px] px-[15px] border border-red mb-3"
      />
      <button className="uppercase bg-red w-full py-[5px] text-white mb-3 ease-in duration-300 hover:bg-lightred">
        sign in
      </button>
      <p className="text-[18px]">
        Forgot{" "}
        <span className="text-red hover:text-black cursor-pointer ease-in duration-300">
          Email / password?
        </span>
      </p>
      <button className="uppercase text-red mt-[200px] cursor-pointer hover:text-black ease-in duration-300">
        sign up
      </button>
    </form>
  );
};

export default LoginForm;
