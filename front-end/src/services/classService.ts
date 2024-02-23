import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiCall } from "../util/apiHelper";
import { API_CLASS_URL, API_SUBJECT_URL } from "../util/config";
import { StudentClass, ClassForm } from "../types/class";
import { Subject, SubjectForm } from "../types/subject";

export const useGetClass = () => {
  return useQuery<StudentClass[]>({
    queryKey: ["classList"],
    queryFn: async () => {
      const response: StudentClass[] = await apiCall({
        method: "GET",
        url: `${API_CLASS_URL}/?skip=0&limit=100`,
      });
      return response;
    },
  });
};

export const useClassCreateMutations = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ClassForm) => {
      console.log(data);
      return apiCall<StudentClass, ClassForm>({
        url: `${API_CLASS_URL}`,
        json: data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classList"] });
    },
  });
};

export const useGetSubjects = () => {
  return useQuery<Subject[]>({
    queryKey: ["subjectList"],
    queryFn: async () => {
      const response: Subject[] = await apiCall({
        method: "GET",
        url: `${API_SUBJECT_URL}/?skip=0&limit=100`,
      });
      return response;
    },
  });
};
export const useSubjectCreateMutations = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: SubjectForm) => {
      return apiCall<Subject, SubjectForm>({
        url: `${API_SUBJECT_URL}`,
        json: data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subjectList"] });
    },
  });
};
