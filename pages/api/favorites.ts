import { NextApiRequest, NextApiResponse } from 'next';
import serverAuth from '@/lib/serverAuth';
import prismadb from '@/lib/prismadb';
import { without } from 'lodash';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end;
  }
  try {
    const { currentUser } = await serverAuth(req);

    const favoritesMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        },
      },
    });

    return res.status(200).json(favoritesMovies);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
