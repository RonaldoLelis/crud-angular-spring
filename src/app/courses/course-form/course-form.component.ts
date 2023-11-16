import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private serviceCourse: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location
  ) {
    this.form = this.fb.group({
      name: [''],
      category: ['']
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    this.serviceCourse.save(this.form.value).subscribe(() => {
      this.onSuccess();
    }, () => { this.onError()});
  }

  onCancel() {
    this.location.back();
  }

  onSuccess() {
    this._snackBar.open('Sucesso ao salvar o curso.', 'fechar', { duration: 3000 });
    this.onCancel();
  }

  onError() {
    this._snackBar.open('Erro ao salvar o curso.', 'fechar', { duration: 3000 });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
