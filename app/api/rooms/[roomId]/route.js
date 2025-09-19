import { getBookedDatesByRoomId, getRoom } from '@/app/_lib/data-service';

export async function GET(request, { params }) {
  const { roomId } = params;

  try {
    const [room, bookedDates] = await Promise.all([
      getRoom(roomId),
      getBookedDatesByRoomId(roomId),
    ]);

    return Response.json({ room, bookedDates });
  } catch {
    return Response.json({ message: 'Room not found' });
  }
}

// export async function POST() {}
