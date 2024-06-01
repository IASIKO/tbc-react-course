import React from "react";
import { useTranslations } from "next-intl";

interface SearchProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  sortChangeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  isProductsSorted: boolean;
}

const Search: React.FC<SearchProps> = ({
  onChange,
  searchValue,
  sortChangeHandler,
}) => {
  const t = useTranslations("products");

  return (
    <div className="pt-[60px] w-[1140px] flex justify-between">
      <input
        type="text"
        placeholder={t("searchInput")}
        value={searchValue}
        onChange={onChange}
        className="border border-red dark:border-red px-[15px] w-[350px] outline-none"
      />
      <select
        id="products"
        className="p-4 border border-red"
        onChange={sortChangeHandler}
      >
        <option value="default">Default</option>
        <option value="asc">Sort by Price (low to high)</option>
        <option value="desc">Sort by Price (high to low)</option>
      </select>
    </div>
  );
};

export default Search;
