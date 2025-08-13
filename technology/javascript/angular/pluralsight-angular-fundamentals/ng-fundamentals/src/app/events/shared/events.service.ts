import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { IEvent } from './event.model';

import { EVENTS } from 'src/assets/data/events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  getEvents(): Observable<IEvent[]> {
    const subject = new Subject<IEvent[]>();

    setTimeout(() => {
      subject.next(EVENTS);
      subject.complete();
    }, 100);

    return subject;
  }

  getEvent(eventId: number): IEvent {
    return EVENTS.find(event => event.id === eventId);
  }

  saveEvent(event: IEvent) {
    event.id = 999;
    event.sessions = [];

    EVENTS.push(event);
  }

}
