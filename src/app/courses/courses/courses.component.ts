import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CourseModel } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<CourseModel[]>;
  displayedColumns = ['name', 'category'];
  color: ThemePalette = 'primary';

  constructor(private coursesService: CoursesService, public dialog: MatDialog) {
    this.courses$ = this.coursesService.getCourses()
    .pipe(
      catchError(error => {
        this.openDialog('Erro ao carregar a lista de cursos!');
        return of ([])
      })
    );
  }

  ngOnInit() { }

  openDialog(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
