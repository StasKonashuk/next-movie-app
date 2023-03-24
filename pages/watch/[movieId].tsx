import useMovie from '@/hooks/useMovie';
import { useRouter } from 'next/router';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);

  return (
    <div className="h-screen w-screen bg-main-bg-dark-color">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-opacity-70 bg-main-bg-dark-color">
        <AiOutlineArrowLeft
          className="text-white cursor-pointer"
          size={40}
          onClick={() => router.push('/')}
        />
        <p className="text-white text-1xl font-bold">
          <span className="font-light">Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video autoPlay controls src={data?.videoUrl} className="h-full w-full"></video>
    </div>
  );
};

export default Watch;
