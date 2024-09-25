type SearchBoxProps = {
  query: string;
  setQuery: (term: string) => void;
};

const SearchBox = ({ query, setQuery }: SearchBoxProps) => {
  return (
    <div>
      <input
        className="text-slate-900 px-2 mb-3 rounded-sm"
        placeholder="Search..."
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
