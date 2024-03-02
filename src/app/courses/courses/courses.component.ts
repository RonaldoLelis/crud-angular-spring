import { ActivatedRoute, Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CourseModel } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<CourseModel[]> | null = null;
  color: ThemePalette = 'primary';

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private coursesService: CoursesService,
  ) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.courses$ = this.coursesService.getCourses()
    .pipe(
      catchError(() => {
        this.openDialog('Erro ao carregar a lista de cursos!');
        return of ([])
      })
    );
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(course: CourseModel) {
    this.router.navigate(['edit', course._id], { relativeTo: this.route });
  }

  onDelete(course: CourseModel) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse curso?',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.coursesService.remove(course._id).subscribe(() => {
          this.onRemoveSuccess();
          this.refresh()
        }, () => this.onError());
      }
    });
  }

  openDialog(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onRemoveSuccess() {
    this._snackBar.open('Curso removido com sucesso.', 'fechar',
    { duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }

  onError() {
    this._snackBar.open('Erro ao excluir o curso.', 'fechar', { duration: 3000 });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
