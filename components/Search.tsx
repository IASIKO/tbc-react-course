import React from "react";
import { useTranslations } from "next-intl";

interface SearchProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}

const Search: React.FC<SearchProps> = ({ onChange, searchValue }) => {
  const t = useTranslations("products");

  return (
    <input
      type="text"
      placeholder={t("searchInput")}
      value={searchValue}
      onChange={onChange}
      className="border border-red dark:border-red px-[15px] w-[320px] outline-none"
    />
  );
};

export default Search;
