import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EntityDataService } from '@ngrx/data';
import { CourseDataService } from '../services/course-data.service';

@NgModule({
  imports: [CommonModule],
  providers: [CourseDataService],
})
export class EntityStoreModule {
  constructor(
    entityDataService: EntityDataService,
    courseDataService: CourseDataService
  ) {
    entityDataService.registerService('Course', courseDataService);
  }
}
