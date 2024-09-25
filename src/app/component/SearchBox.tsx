import { useDebouncedCallback } from 'use-debounce';

type SearchBoxProps = {
  query: string;
  setQuery: (term: string) => void;
};

const SearchBox = ({ query, setQuery }: SearchBoxProps) => {
  const handleChange = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
      console.log(query);
    },
    300
  );
  return (
    <div>
      <input
        className="text-slate-900 px-2 mb-3 rounded-sm"
        placeholder="Search..."
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
