import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center p-[100px] my-auto">
      <div
        className="text-red inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-dark"
        role="status"
      >
        <span className="text-red !absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] dark:text-dark">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loader;
