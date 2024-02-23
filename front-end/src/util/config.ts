export const API_HOST =
  import.meta.env.VITE_API_HOST ?? "http://127.0.0.1:8000/";

export const API_STUDENT_URL = `${API_HOST}students`;
export const API_TEACHER_URL = `${API_HOST}teachers`;
export const API_CLASS_URL = `${API_HOST}class`;
export const API_SUBJECT_URL = `${API_HOST}subject`;
export const API_ENROLLMENT_URL = `${API_HOST}enrollment`;
export const API_ATTENDANCE_URL = `${API_HOST}attendance`;
