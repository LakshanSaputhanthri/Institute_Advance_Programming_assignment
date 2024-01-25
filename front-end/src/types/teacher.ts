export type Teacher = {
  first_name: string;
  teacher_id: number;
  last_name: string;
  phone_number: number;
  updated_at: string;
  email: string;
  address: string;
  created_at: string;
  nic_number: string;
};
export interface TeacherForm {
  email: string;
  first_name: string;
  last_name: string;
  address: string;
  phone_number: number;
  nic_number: string;
}

export interface TeacherEditForm {
  email?: string;
  first_name?: string;
  last_name?: string;
  address?: string;
  phone_number?: number;
  nic_number?: string;
}
