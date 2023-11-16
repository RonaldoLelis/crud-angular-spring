import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CourseModel } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<CourseModel[]>;
  color: ThemePalette = 'primary';

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private coursesService: CoursesService,
  ) {

    this.courses$ = this.coursesService.getCourses()
    .pipe(
      catchError(error => {
        this.openDialog('Erro ao carregar a lista de cursos!');
        return of ([])
      })
    );
  }

  ngOnInit() { }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  openDialog(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
