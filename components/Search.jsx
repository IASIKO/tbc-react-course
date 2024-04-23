import React from "react";
import Button from "./UI/Button";
import { GrPowerReset } from "react-icons/gr";

const Search = ({ onChange, searchValue, onClick, isProductsSorted, dict }) => {
  return (
    <div className="pt-[60px] w-[960px] flex justify-between">
      <input
        type="text"
        placeholder={dict.products.searchInput}
        value={searchValue}
        onChange={onChange}
        className="border border-red px-[15px] rounded-md w-[350px] outline-none"
      />
      <Button onClick={onClick} width="300px">
        {isProductsSorted ? (
          <span className="flex items-center justify-center">
            {dict.products.resetSort}
            <i className="pl-[10px]">
              <GrPowerReset />
            </i>
          </span>
        ) : (
          <span> {dict.products.sortByPrice}</span>
        )}
      </Button>
    </div>
  );
};

export default Search;
