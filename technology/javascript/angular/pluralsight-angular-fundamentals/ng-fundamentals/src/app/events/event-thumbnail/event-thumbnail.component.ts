import { Component, Input } from '@angular/core';

import { ToastrService } from 'src/app/shared/toastr.service';

import { IEvent } from '../shared';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {

  @Input() event: IEvent;

  constructor(private toastrService: ToastrService) { }

  handleThumbnailClick(eventName: string) {
    this.toastrService.success(eventName);
  }

  getStartTimeClass() {
    return {
      green: this.event && this.event.time === '8:00 am',
      bold: this.event && this.event.price === 800
    };
  }

}
