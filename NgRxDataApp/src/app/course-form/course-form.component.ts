import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.courseForm = this.fb.group({
      id: null,
      name: null,
      duration: null,
      fee: null,
    });
  }
}
