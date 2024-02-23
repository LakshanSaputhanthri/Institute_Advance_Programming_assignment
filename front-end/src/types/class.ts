import { Subject } from "./subject";
import { Teacher } from "./teacher";

export type StudentClass = {
  class_id: number;
  created_at: string;
  updated_at: string;
  teacher: Teacher;
  subject: Subject;
  class_name: string;
};
export type ClassForm = {
  teacher_id: number;
  subject_id: number;
  class_name: string;
};
