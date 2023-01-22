import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseFormComponent } from './core/components/course-form/course-form.component';
import { CourseListComponent } from './core/components/course-list/course-list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CourseFormComponent, CourseListComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
