import RoomList from '@/app/_components/RoomList';
import { getRooms } from '../_lib/data-service';
import { Suspense } from 'react';
import Spinner from '../_components/Spinner';

export const metadata = {
  title: 'Rooms',
};

export const revalidate = 3600;

export default async function Page() {
  console.log('Starting');
  const rooms = await getRooms();

  return (
    <div>
      <h1 className='text-4xl mb-5 text-accent-400 font-medium'>
        Our Luxury Rooms
      </h1>
      <p className='text-primary-200 text-lg mb-10'>
        Cozy yet luxurious rooms, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <Suspense fallback={<Spinner />}>
        <RoomList />
      </Suspense>
    </div>
  );
}
