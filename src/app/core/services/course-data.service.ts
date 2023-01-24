import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  DefaultDataService,
  HttpUrlGenerator,
  Logger,
  QueryParams,
} from '@ngrx/data';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../model/course.model';

@Injectable()
export class CourseDataService extends DefaultDataService<Course> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    logger: Logger
  ) {
    super('Course', http, httpUrlGenerator);
    logger.log('Created custom Course EntityDataService');
  }

  override getAll(): Observable<Course[]> {
    return super
      .getAll()
      .pipe(map((courses) => courses.map((course) => this.mapCourse(course))));
  }

  override getById(id: string | number): Observable<Course> {
    return super.getById(id).pipe(map((course) => this.mapCourse(course)));
  }

  override getWithQuery(params: string | QueryParams): Observable<Course[]> {
    return super
      .getWithQuery(params)
      .pipe(map((courses) => courses.map((course) => this.mapCourse(course))));
  }

  private mapCourse(course: Course): Course {
    return { ...course, dateLoaded: new Date() };
  }
}
