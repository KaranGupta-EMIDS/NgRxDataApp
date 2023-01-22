import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../classes/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {}

  private storeSubscription() {}

  removeCourse(courseId: number | null) {}
  editCourse(courseId: number | null) {}
}
