import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiCall } from "../util/apiHelper";
import { API_CLASS_URL } from "../util/config";
import { StudentClass, ClassForm } from "../types/class";

export const useGetclass = () => {
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
