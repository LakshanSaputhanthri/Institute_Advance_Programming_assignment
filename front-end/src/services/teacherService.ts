import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiCall } from "../util/apiHelper";
import { API_TEACHER_URL } from "../util/config";
import { Teacher, TeacherEditForm, TeacherForm } from "../types/teacher";

export const useGetTeachers = () => {
  return useQuery<Teacher[]>({
    queryKey: ["teacherList"],
    queryFn: async () => {
      const response: Teacher[] = await apiCall({
        method: "GET",
        url: `${API_TEACHER_URL}/?skip=0&limit=100`,
      });
      return response;
    },
  });
};
export const useGetTeacher = (id: number) => {
  return useQuery<Teacher>({
    queryKey: ["teacher"],
    queryFn: async () => {
      const response: Teacher = await apiCall({
        method: "GET",
        url: `${API_TEACHER_URL}/${id}`,
      });
      return response;
    },
  });
};

export const useStudentUpdateMutations = (student_id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TeacherEditForm) => {
      console.log(data);
      return apiCall<Teacher, TeacherEditForm>({
        url: `${API_TEACHER_URL}/${student_id}`,
        json: data,
        method: "PUT",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teacherList"] });
      queryClient.invalidateQueries({ queryKey: ["teacher"] });
    },
  });
};

export const useTeacherCreateMutations = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TeacherForm) => {
      console.log(data);
      return apiCall<Teacher, TeacherForm>({
        url: `${API_TEACHER_URL}`,
        json: data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teacherList"] });
    },
  });
};
export const useDeleteTeacherMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      apiCall<Teacher, TeacherForm>({
        method: "DELETE",
        url: `${API_TEACHER_URL}/${id}`,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teacherList"] });
    },
  });
};
