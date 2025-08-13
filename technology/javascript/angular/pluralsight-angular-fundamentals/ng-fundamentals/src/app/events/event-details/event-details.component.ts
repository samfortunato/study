import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventsService } from '../shared/events.service';

import { IEvent } from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.getEvent();
  }

  private getEvent() {
    const eventId = +this.route.snapshot.params['id'];
    this.event = this.eventsService.getEvent(eventId);
  }

}
