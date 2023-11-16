import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { SharedModule } from './../shared/shared.module';
import { CourseFormComponent } from './course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesListComponent } from './courses-list/courses-list.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormComponent,
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule,
    CoursesRoutingModule,
    SharedModule
  ]
})
export class CoursesModule { }
