import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseModel } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly apiURL: string = 'http://localhost:3001/courses';

  constructor(private httpClient: HttpClient ) { } 
  
  getCourses() {
    return this.httpClient.get<CourseModel[]>(this.apiURL);
  }

}
