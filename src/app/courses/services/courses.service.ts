import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseModel } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly apiURL: string = 'api/courses';

  constructor(private httpClient: HttpClient ) { }

  getCourses() {
    return this.httpClient.get<CourseModel[]>(this.apiURL);
  }

}
