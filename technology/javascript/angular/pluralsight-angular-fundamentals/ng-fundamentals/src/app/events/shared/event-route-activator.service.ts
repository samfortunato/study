import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  constructor(
    private router: Router,
    private eventsService: EventsService
  ) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const eventId = +route.params['id'];
    const doesEventExist = !!this.eventsService.getEvent(eventId);

    if (!doesEventExist) this.router.navigate(['/404']);

    return doesEventExist;
  }

}
