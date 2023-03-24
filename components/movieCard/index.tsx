import useBillboard from '@/hooks/useBillboard';
import useInfoModal from '@/hooks/useInfoModal';
import { useRouter } from 'next/router';
import { BsFillPlayFill } from 'react-icons/bs';
import { BiChevronDown } from 'react-icons/bi';
import { FavoriteButton } from '../favoriteBtn';

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }: MovieCardProps) => {
  const router = useRouter();
  const { openModal } = useInfoModal();

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw] z-10 hover:z-20">
      <div
        className="
          flex 
          relative
          flex-col 
          scale-100
          transition
          duration
          group-hover:scale-125
          group-hover:-translate-y-[2vw]
          group-hover:translate-x-[2vw]">
        <img
          className="    
          cursor-pointer
          object-cover
          shadow-xl
          rounded-md
          group-hover:rounded-b-none
          w-full
          h-[12vw]"
          src={data.thumbnailUrl}
          alt="Thumbnail"
        />
        <div className="opacity-0 z-10 bg-zinc-800 p-2 w-full transition shadow-md rounded-mb  group-hover:opacity-100">
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={() => router.push(`/watch/${data?.id}`)}
              className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
              <BsFillPlayFill className="text-black w-4 lg:w-6" />
            </div>
            <FavoriteButton movieId={data?.id} />
            <div
              onClick={() => openModal(data?.id)}
              className="cursor-pointer ml-auto group/item w-6 h-6 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
              <BiChevronDown size={20} className="text-white group-hover/item:text-neutral-300" />
            </div>
          </div>
          <p className="text-green-400 font-semibold mt-2">
            New <span className="text-white">2023</span>
          </p>
          <div className="flex flex-row mt-2 gap-2 items-center">
            <p className="text-white text-[10px] text-sm">{data.duration}</p>
          </div>
          <div className="flex flex-row mt-2 gap-2 items-center">
            <p className="text-white text-[10px] text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
