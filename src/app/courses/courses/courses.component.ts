import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: CourseModel[] = [];
  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getCourses().subscribe(result => {
      this.courses = result;
    });
  }

}
