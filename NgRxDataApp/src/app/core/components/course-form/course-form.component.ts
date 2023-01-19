import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent implements OnInit {
  readonly SAVE_LABEL = 'Save';
  readonly UPDATE_LABEL = 'Save';
  courseForm!: FormGroup;
  buttonLabel: string = this.SAVE_LABEL;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.courseForm = new FormGroup({
      id: new FormControl<number | null>(null),
      name: new FormControl<string | null>(null, [
        Validators.required,
        Validators.maxLength(10),
      ]),
      duration: new FormControl<number | null>(null, [
        Validators.required,
        Validators.max(12),
      ]),
      fee: new FormControl<number | null>(null, [
        Validators.required,
        Validators.max(999),
      ]),
    });
  }

  resetForm() {
    this.courseForm.reset();
  }

  saveCourse() {}
}
