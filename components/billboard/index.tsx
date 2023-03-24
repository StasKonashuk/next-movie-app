import { useCallback } from 'react';
import useBillboard from '@/hooks/useBillboard';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { PlayButton } from '../playButton';
import useInfoModal from '@/hooks/useInfoModal';

const Billboard = () => {
  const { data } = useBillboard();
  const { openModal } = useInfoModal();

  const handleOpenModal = useCallback(() => {
    if (data.id) {
      openModal(data.id);
    }
  }, [openModal, data?.id]);
  return (
    <div className="relative h-[50%] w-full">
      <video
        className="w-full h-full object-cover brightness-[60%]"
        autoPlay
        muted
        loop
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}></video>
      <div className="absolute bottom-20 ml-20 w-[50%]">
        <p className="text-white text-5xl h-full font-bold drop-shadow-xl">{data?.title}</p>
        <p className="text-white text-[18px] mt-3 w-[80%] drop-shadow-xl">{data?.description}</p>
        <div className="flex flex-row items-center mt-3 gap-3">
          <PlayButton movieId={data?.id} />
          <button
            onClick={handleOpenModal}
            className="bg-white text-white bg-opacity-30 rounded-md py-1 px-2 w-auto text-xs font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
            type="button">
            <AiOutlineInfoCircle className="mr-1" size={25} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
