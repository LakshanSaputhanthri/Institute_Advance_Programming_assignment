import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { EnrollmentClass, StudentEnrollmentForm } from "../types/enrollment";
import { apiCall } from "../util/apiHelper";
import { API_ENROLLMENT_URL } from "../util/config";

export const useEnrollmentCreateMutations = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: StudentEnrollmentForm) => {
      console.log(data);
      return apiCall<EnrollmentClass, StudentEnrollmentForm>({
        url: `${API_ENROLLMENT_URL}`,
        json: data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enrollments"] });
    },
  });
};
export const useGetenrollmentByClassId = (class_id: number) => {
  return useQuery<EnrollmentClass[]>({
    queryKey: ["enrollments"],
    queryFn: async () => {
      const response: EnrollmentClass[] = await apiCall({
        method: "GET",
        url: `${API_ENROLLMENT_URL}/${class_id}`,
      });
      return response;
    },
  });
};
