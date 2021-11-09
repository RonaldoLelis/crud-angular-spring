import { ThemePalette } from '@angular/material/core';
import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<CourseModel[]>;
  displayedColumns = ['name', 'category'];
  color: ThemePalette = 'primary';

  constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.getCourses();
  }

  ngOnInit() { }

}
