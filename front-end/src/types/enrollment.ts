import { Student } from "./students";

export type EnrollmentClass = {
  enrollment_id: number;
  class_id: number;
  student: Student;
  created_at: string;
  updated_at: string;
};
export type StudentEnrollmentForm = {
  student_id: number;
  class_id: number;
};
