import React from "react";

const Search = () => {
  return (
    <div className="pt-[60px] flex justify-center">
      <input
        type="text"
        placeholder="Search product..."
        className="border px-[15px] rounded-md w-[400px] outline-none"
      />
      <button className="cursor-pointer ml-[5px] bg-[#b7472a] border-[#b7472a] text-white rounded-md px-[15px]">
        Search
      </button>
    </div>
  );
};

export default Search;
