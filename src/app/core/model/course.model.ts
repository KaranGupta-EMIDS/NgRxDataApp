import { v4 as uuidv4 } from 'uuid';

export class Course {
  id: string | null;
  name: string | null;
  duration: number | null;
  fee: number | null;
  dateLoaded: Date | null;

  constructor(course?: Course) {
    this.id = (course && course.id) || uuidv4();
    this.name = (course && course.name) || null;
    this.duration = (course && course.duration) || null;
    this.fee = (course && course.fee) || null;
    this.dateLoaded = new Date();
  }
}
