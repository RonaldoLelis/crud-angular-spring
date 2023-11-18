import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseModel } from '../model/course';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly apiURL: string = 'api/courses';

  constructor(private httpClient: HttpClient ) { }

  getCourses() {
    return this.httpClient.get<CourseModel[]>(this.apiURL).pipe(first());
  }

  loadById(id: string) {
    return this.httpClient.get<CourseModel>(`${this.apiURL}/${id}`);
  }

  save(course: CourseModel) {
    if(course._id) return this.update(course);
    else return this.create(course);
  }

  private create(course: CourseModel) {
    return this.httpClient.post<CourseModel>(this.apiURL, course).pipe(first());
  }

  private update(course: CourseModel) {
    return this.httpClient.put<CourseModel>(`${this.apiURL}/${course._id}`, course).pipe(first());
  }

}
