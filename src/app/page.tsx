'use client';

import { Game } from '@/types/Game';
import { useEffect, useState } from 'react';
import Pagination from './component/Pagination';
import SearchBox from './component/SearchBox';

export default function Home() {
  const api_key = process.env.NEXT_PUBLIC_API_KEY;
  const [games, setGames] = useState<Game[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const itemsPerPage = 20;

  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${api_key}&page=${currentPage}&page_size=${itemsPerPage}&search=${query}`
        );
        const data = await response.json();
        setTotalResults(data.count);
        setGames(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGames();
  }, [currentPage, query]);

  const totalPages = Math.ceil(totalResults / itemsPerPage);

  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl my-5">Gamespot</h1>
      <SearchBox query={query} setQuery={setQuery} />
      <div>
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              {game.id}. {game.name}
            </li>
          ))}
        </ul>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
