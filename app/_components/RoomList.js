import { unstable_noStore as noStore } from 'next/cache';
import RoomCard from '@/app/_components/RoomCard';
import { getRooms } from '../_lib/data-service';

async function CabinList() {
  const rooms = await getRooms();
  noStore();

  if (!rooms.length) return null;

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
      {rooms.map((room) => (
        <RoomCard room={room} key={rooms.id} />
      ))}
    </div>
  );
}

export default CabinList;
