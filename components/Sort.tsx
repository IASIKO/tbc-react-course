interface SortProps {
  sortChangeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Sort: React.FC<SortProps> = ({ sortChangeHandler }) => {
  return (
    <select
      id="products"
      className="border border-red"
      onChange={sortChangeHandler}
    >
      <option value="default">Default</option>
      <option value="asc">Sort by Price (low to high)</option>
      <option value="desc">Sort by Price (high to low)</option>
    </select>
  );
};

export default Sort;
