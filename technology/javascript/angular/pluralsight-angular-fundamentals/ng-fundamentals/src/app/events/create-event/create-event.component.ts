import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { IEvent, EventsService } from '../shared';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {

  newEvent;
  isDirty = false;

  constructor(
    private router: Router,
    private eventsService: EventsService
  ) { }

  saveEvent(formValue: IEvent) {
    this.eventsService.saveEvent(formValue);
    this.goToEvents();
  }

  goToEvents() {
    this.router.navigate(['/events']);
  }

}
