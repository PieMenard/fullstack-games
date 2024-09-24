'use client';

import { Game } from '@/types/Game';
import { useEffect, useState } from 'react';

export default function Home() {
  const api_key = process.env.NEXT_PUBLIC_API_KEY;
  const [games, setGames] = useState<Game[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${api_key}&page=${currentPage}&page_size=${itemsPerPage}`
        );
        const data = await response.json();
        setTotalResults(data.count);
        setGames(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGames();
  }, [currentPage]);

  const totalPages = Math.ceil(totalResults / itemsPerPage);

  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl my-5">Gamespot</h1>
      <div>
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              {game.id}. {game.name}
            </li>
          ))}
        </ul>
      </div>
      {/* Pagination */}
      <div className="w-[30%] flex justify-between mx-auto py-6">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-md bg-orange-400 px-2 disabled:opacity-40 disabled:pointer-events-none hover:bg-orange-600"
        >
          {'<'} Prev
        </button>
        page {currentPage} of {totalPages}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-md bg-orange-400 px-2 disabled:opacity-40 disabled:pointer-events-none hover:bg-orange-600"
        >
          Next {'>'}
        </button>
      </div>
    </div>
  );
}
