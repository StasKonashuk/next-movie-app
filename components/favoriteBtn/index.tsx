import axios from 'axios';
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai';
import { FC, useMemo, useCallback } from 'react';
import useFavorites from '@/hooks/useFavorites';
import useCurrentUser from '@/hooks/useCurrentUser';

interface ButtonProps {
  movieId: string;
}

export const FavoriteButton: FC<ButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites();
  const { data: currentUser, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavorites = useCallback(async () => {
    let response;

    if (isFavorite) {
      response = await axios.delete('api/favorite', { data: { movieId } });
    } else {
      response = await axios.post('api/favorite', { movieId });
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({
      ...currentUser,
      favoriteIds: updatedFavoriteIds,
    });

    mutateFavorites();
  }, [movieId, currentUser, isFavorite, mutate, mutateFavorites]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;
  return (
    <div
      onClick={toggleFavorites}
      className="cursor-pointer group/items w-6 h-6 border-white border-2 rounded-full flex justify-center items-start transition hover:border-neutral-300">
      <Icon className="text-white text-sm" size={20} />
    </div>
  );
};
