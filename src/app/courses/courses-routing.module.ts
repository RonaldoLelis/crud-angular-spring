import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseResolver } from './guards/course.resolver';


const routes: Routes = [
  {
    path: '',
    component: CoursesComponent
  },
  {
    path: 'new',
    component: CourseFormComponent,
    resolve: { course: CourseResolver }
  },
  {
    path: 'edit/:id',
    component: CourseFormComponent,
    resolve: { course: CourseResolver }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoursesRoutingModule { }
