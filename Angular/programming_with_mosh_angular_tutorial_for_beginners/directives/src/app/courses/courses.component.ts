import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  title = 'List of Courses';
  courses: string[];
  
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit() { }
}
