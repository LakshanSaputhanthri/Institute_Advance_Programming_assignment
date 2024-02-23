export type StudentClass = {
  class_id: number;
  created_at: string;
  updated_at: string;
  teacher_id: number;
  subject_id: number;
  class_name: string;
};
export type ClassForm = {
  teacher_id: number;
  subject_id: number;
  class_name: string;
};
