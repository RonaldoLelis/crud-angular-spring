import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseModel } from '../model/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;
  isEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private serviceCourse: CoursesService,
  ) {
    this.form = this.fb.group({
      _id: [''],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      category: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    const course: CourseModel = this.route.snapshot.data['course'];
    if(course._id) {
      this.form.setValue({
        _id: course._id,
        name: course.name,
        category: course.category
      });
      this.isEdit = true;
    } else {
      this.isEdit = false;
    }
  }

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

  getErrorMessage(field: string) {
    const fieldName = this.form.get(field);
    if(fieldName?.hasError('required')) return 'Campo obrigatório';
    if(fieldName?.hasError('minlength')) {
      const requiredLength = fieldName.errors ? fieldName.errors['minlength']['requiredLength'] : 5;
      return `Campo deve ter no mínimo ${requiredLength} caracteres`;
    }
    return '';
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  get name() {
    return this.form.get('name');
  }

  get category() {
    return this.form.get('category');
  }

}
