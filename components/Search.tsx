import React from "react";
import Button from "./UI/Button";
import { GrPowerReset } from "react-icons/gr";
import { useTranslations } from "next-intl";

interface SearchProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isProductsSorted: boolean;
}

const Search: React.FC<SearchProps> = ({
  onChange,
  searchValue,
  onClick,
  isProductsSorted,
}) => {
  const t = useTranslations("products");

  return (
    <div className="pt-[60px] w-[960px] flex justify-between">
      <input
        type="text"
        placeholder={t("searchInput")}
        value={searchValue}
        onChange={onChange}
        className="border border-red dark:border-none px-[15px] rounded-md w-[350px] outline-none"
      />
      <Button onClick={onClick} width="300px">
        {isProductsSorted ? (
          <span className="flex items-center justify-center">
            {t("resetSort")}
            <i className="pl-[10px]">
              <GrPowerReset />
            </i>
          </span>
        ) : (
          <span> {t("sortByPrice")}</span>
        )}
      </Button>
    </div>
  );
};

export default Search;
