export type Student = {
  first_name: string;
  student_id: number;
  last_name: string;
  phone_number: number;
  grade: number;
  updated_at: string;
  address: string;
  created_at: string;
};
export interface StudentForm {
  grade: number;
  first_name: string;
  last_name: string;
  address: string;
  phone_number: number;
}
export interface StudentEditForm {
  grade?: number;
  first_name?: string;
  last_name?: string;
  address?: string;
  phone_number?: number;
}
