import { useTranslations } from "next-intl";

interface SortProps {
  sortChangeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Sort: React.FC<SortProps> = ({ sortChangeHandler }) => {

  const t = useTranslations("products")

  return (
    <select
      id="products"
      className="border border-red w-[320px] p-1 px-2"
      onChange={sortChangeHandler}
    >
      <option value="default">{t("sortByPriceDef")}</option>
      <option value="asc">{t("sortByPriceLow")}</option>
      <option value="desc">{t("sortByPriceHigh")}</option>
    </select>
  );
};

export default Sort;
