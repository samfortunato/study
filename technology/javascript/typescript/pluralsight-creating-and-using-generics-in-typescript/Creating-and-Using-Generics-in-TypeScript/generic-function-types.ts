import { MeetingResource } from './models/meetingResource';

let getLargeRooms: <T extends MeetingResource>(rooms: T[], minSize: number) => T[];

getLargeRooms = function<T>(arg: T): T {
  return arg;
}
