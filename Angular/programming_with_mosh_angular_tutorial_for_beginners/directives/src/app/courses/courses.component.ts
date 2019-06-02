import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  title = 'List of Courses';
  courses = ['course1', 'course2', 'course3'];
  
  constructor() { }

  ngOnInit() { }
}
