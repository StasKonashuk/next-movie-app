import axios from 'axios';
import { BsFillPlayFill } from 'react-icons/bs';
import { FC, useMemo, useCallback } from 'react';
import useFavorites from '@/hooks/useFavorites';
import useCurrentUser from '@/hooks/useCurrentUser';
import { useRouter } from 'next/router';

interface PlayButtonProps {
  movieId: string;
}

export const PlayButton: FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="cursor-pointer bg-white rounded-md py-1 px-2 w-auto text-xs font-semibold flex flex-row items-center hover:bg-neutral-300 transition">
      <BsFillPlayFill className="mr-1" size={25} /> Play
    </button>
  );
};
