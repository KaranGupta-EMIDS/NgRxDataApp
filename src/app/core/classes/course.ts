export class Course {
  id: number | null;
  name: string | null;
  duration: number | null;
  fee: number | null;

  constructor(course?: Course) {
    this.id = (course && course.id) || null;
    this.name = (course && course.name) || null;
    this.duration = (course && course.duration) || null;
    this.fee = (course && course.fee) || null;
  }
}
