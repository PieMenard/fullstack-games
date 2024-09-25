'use client';

import { Game } from '@/types/Game';
import { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import SearchBox from './components/SearchBox';
import GameCard from './components/GameCard';

export default function Home() {
  const api_key = process.env.NEXT_PUBLIC_API_KEY;
  const [games, setGames] = useState<Game[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const itemsPerPage = 20;

  const [newSearch, setNewSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchGames = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${api_key}&page=${currentPage}&page_size=${itemsPerPage}&search=${newSearch}`
        );
        const data = await response.json();
        setTotalResults(data.count);
        setGames(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, [currentPage, newSearch]);

  const totalPages = Math.ceil(totalResults / itemsPerPage);

  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl my-5">Gamespot</h1>
      <SearchBox setNewSearch={setNewSearch} setCurrentPage={setCurrentPage} />
      <div>
        {' '}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {games.length === 0 ? (
              <p>No games found {':('}</p>
            ) : (
              <ul className="flex flex-wrap justify-center">
                {games.map((game) => (
                  <li key={game.id}>
                    <GameCard game={game} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
