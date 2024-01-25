import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Student, StudentEditForm, StudentForm } from "../types/students";
import { apiCall } from "../util/apiHelper";
import { API_STUDENT_URL } from "../util/config";

export const useGetStudents = () => {
  return useQuery<Student[]>({
    queryKey: ["studentList"],
    queryFn: async () => {
      const response: Student[] = await apiCall({
        method: "GET",
        url: `${API_STUDENT_URL}/?skip=0&limit=100`,
      });
      return response;
    },
  });
};
export const useGetStudent = (studentId: number) => {
  return useQuery<Student>({
    queryKey: ["student"],
    queryFn: async () => {
      const response: Student = await apiCall({
        method: "GET",
        url: `${API_STUDENT_URL}/${studentId}`,
      });
      return response;
    },
  });
};

export const useStudentCreateMutations = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: StudentForm) => {
      console.log(data);
      return apiCall<Student, StudentForm>({
        url: `${API_STUDENT_URL}`,
        json: data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["studentList"] });
    },
  });
};

export const useStudentUpdateMutations = (student_id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: StudentEditForm) => {
      console.log(data);
      return apiCall<Student, StudentEditForm>({
        url: `${API_STUDENT_URL}/${student_id}`,
        json: data,
        method: "PUT",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["studentList"] });
      queryClient.invalidateQueries({ queryKey: ["student"] });
    },
  });
};

export const useDeleteStudentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      apiCall<Student, StudentForm>({
        method: "DELETE",
        url: `${API_STUDENT_URL}/${id}`,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["studentList"] });
    },
  });
};
