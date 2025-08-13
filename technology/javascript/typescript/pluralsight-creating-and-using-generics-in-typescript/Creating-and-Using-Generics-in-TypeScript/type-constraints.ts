import { MeetingResource } from './models/meetingResource';
import { ConferenceRoom, conferenceRoomData } from './models/conferenceRoom';
import { partyTentData } from './models/partyTent';
import { buildingData } from './models/building';

function getBigRooms<T extends MeetingResource>(rooms: T[], minSize: number): T[] {
  const bigRooms: T[] = [];

  rooms.forEach(room => {
    if (room.capacity > minSize) {
      bigRooms.push(room);
    }
  });

  return bigRooms;
}

const bigRooms = getBigRooms(buildingData, 20);
console.log(bigRooms);
