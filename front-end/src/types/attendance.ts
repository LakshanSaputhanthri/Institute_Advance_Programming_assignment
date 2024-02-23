import { StudentClass } from "./class";
import { Student } from "./students";
import { Subject } from "./subject";

export type Attendance = {
  attendance_id: number;
  created_at: string;
  updated_at: string;
  student: Student;
  classes: StudentClass;
  subject: Subject;
};

export type AttendanceForm = {
  class_id: number;
  student_id: number;
  isPresent: boolean;
};
