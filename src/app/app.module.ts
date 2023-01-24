import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EntityDataModule, EntityDefinitionService } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CourseFormComponent } from './core/components/course-form/course-form.component';
import { CourseListComponent } from './core/components/course-list/course-list.component';
import { entityConfig, entityMetadata } from './core/store/entity-metadata';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CourseFormComponent,
    CourseListComponent,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(eds: EntityDefinitionService) {
    eds.registerMetadataMap(entityMetadata);
  }
}
