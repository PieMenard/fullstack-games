import { Game } from '@/types/Game';
import Image from 'next/image';

const GameCard = ({ game }: { game: Game }) => {
  return (
    <div className="w-[400px] h-[320px] border-2 rounded-md m-4 bg-slate-500">
      <h1 className="font-bold text-xl py-2">{game.name}</h1>
      <Image
        src={game.background_image}
        alt={game.name}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full max-h-[200px] object-cover rounded-md px-1 "
      />
      <p className="pt-3">Release date: {game.released}</p>
    </div>
  );
};

export default GameCard;
