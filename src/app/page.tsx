'use client';

import { Game } from '@/types/Game';
import { useEffect, useState } from 'react';

export default function Home() {
  const api_key = process.env.NEXT_PUBLIC_API_KEY;
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${api_key}`
        );
        const data = await response.json();
        setGames(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGames();
  }, []);

  return (
    <div className="flex flex-col items-center">
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
    </div>
  );
}
