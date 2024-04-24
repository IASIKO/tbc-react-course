import React from "react";
import Button from "./UI/Button";
import { GrPowerReset } from "react-icons/gr";

interface Dict {
  products: Record<string, string>;
}

interface SearchProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isProductsSorted: boolean;
  dict: Dict;
}

const Search: React.FC<SearchProps> = ({ onChange, searchValue, onClick, isProductsSorted, dict }) => {
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
