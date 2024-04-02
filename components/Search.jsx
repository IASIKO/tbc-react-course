import React from "react";
import Button from "./UI/Button";
import { GrPowerReset } from "react-icons/gr";

const Search = ({ onChange, searchValue, onClick, isProductsSorted }) => {
  return (
    <div className="pt-[60px] w-[960px] flex justify-between">
      <input
        type="text"
        placeholder="Search product..."
        value={searchValue}
        onChange={onChange}
        className="border border-red px-[15px] rounded-md w-[350px] outline-none"
      />
      <Button onClick={onClick} width="300px">
        {isProductsSorted ? (
          <span className="flex items-center justify-center">
            Reset Sort
            <i className="pl-[10px]">
              <GrPowerReset />
            </i>
          </span>
        ) : (
          <span>Sort by Price (low to high)</span>
        )}
      </Button>
    </div>
  );
};

export default Search;
