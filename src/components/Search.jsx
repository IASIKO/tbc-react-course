import React from "react";
import Button from "./UI/Button";

const Search = ({ onChange, searchValue }) => {
  return (
    <div className="pt-[60px] flex justify-center">
      <input
        type="text"
        placeholder="Search product..."
        value={searchValue}
        onChange={onChange}
        className="border px-[15px] rounded-md w-[400px] outline-none"
      />
      <Button>Search</Button>
    </div>
  );
};

export default Search;
