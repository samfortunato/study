import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';

import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<any> {

  constructor(private eventsService: EventsService) { }

  resolve() {
    return this.eventsService
      .getEvents()
      .pipe(map(events => events));
  }

}
