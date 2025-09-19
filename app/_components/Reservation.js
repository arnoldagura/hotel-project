import DateSelector from '@/app/_components/DateSelector';
import ReservationForm from '@/app/_components/ReservationForm';

import { getBookedDatesByRoomId, getSettings } from '@/app/_lib/data-service';

export async function Reservation({ room }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByRoomId(room.id),
  ]);
  return (
    <div className='grid grid-cols-2 border border-primary-800 min-h-[400px]'>
      <DateSelector settings={settings} bookedDates={bookedDates} room={room} />
      <ReservationForm room={room} />
    </div>
  );
}

export default Reservation;
