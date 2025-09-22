import DateSelector from '@/app/_components/DateSelector';
import ReservationForm from '@/app/_components/ReservationForm';

import { getBookedDatesByRoomId, getSettings } from '@/app/_lib/data-service';
import { auth } from '../_lib/auth';
import LoginMessage from './LoginMessage';

export async function Reservation({ room }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByRoomId(room.id),
  ]);
  const session = await auth();

  return (
    <div className='grid grid-cols-2 border border-primary-800 min-h-[400px]'>
      <DateSelector settings={settings} bookedDates={bookedDates} room={room} />
      {session?.user ? (
        <ReservationForm room={room} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
