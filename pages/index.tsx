import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { signOut, getSession } from 'next-auth/react';
import { CustomButton } from '@/components/button';
import { NextPageContext } from 'next';
import useCurrentUser from '../hooks/useCurrentUser';
import NavBar from '@/components/navbar';
import Billboard from '@/components/billboard';
import MovieList from '@/components/movieList';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';
import InfoModal from '@/components/infoModal';
import useInfoModal from '@/hooks/useInfoModal';

const inter = Inter({ subsets: ['latin'] });

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { isOpen, closeModal } = useInfoModal();
  const { data: user } = useCurrentUser();
  const { data: movies } = useMovieList();
  const { data: favorites } = useFavorites();

  return (
    <div className="flex flex-row h-screen bg-main-bg-dark-color">
      <NavBar />
      <InfoModal visible={isOpen} onClose={closeModal} />
      <div className="flex flex-col pl-80">
        <Billboard />
        <div className="pb-40">
          <MovieList title="Trending now" data={movies} />
          <MovieList title="My List" data={favorites} />
        </div>
      </div>
    </div>
  );
}
