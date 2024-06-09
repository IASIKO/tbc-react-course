interface SortProps {
  sortChangeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Sort: React.FC<SortProps> = ({ sortChangeHandler }) => {
  return (
    <select
      id="products"
      className="border border-red w-[350px] p-1 px-2"
      onChange={sortChangeHandler}
    >
      <option value="default">Sort by (Default)</option>
      <option value="asc">Sort by Price (low to high)</option>
      <option value="desc">Sort by Price (high to low)</option>
    </select>
  );
};

export default Sort;
