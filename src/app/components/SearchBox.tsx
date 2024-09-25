'use client';

import { FormEvent, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

type SearchBoxProps = {
  setNewSearch: (term: string) => void;
  setCurrentPage: (page: number) => void;
};

const SearchBox = ({ setCurrentPage, setNewSearch }: SearchBoxProps) => {
  const [query, setQuery] = useState('');
  // const handleChange = useDebouncedCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setQuery(e.target.value);
  //     setCurrentPage(1);
  //   },
  //   300
  // );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewSearch(query);
    setCurrentPage(1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="text-slate-900 px-2 mb-3 rounded-sm focus:border-none"
          placeholder="Search..."
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button type="submit" className="rounded-md px-2 mx-2 bg-orange-400">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
