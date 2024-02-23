import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Student } from "../types/students";
import { apiCall } from "../util/apiHelper";
import { API_ATTENDANCE_URL } from "../util/config";
import { Attendance, AttendanceForm } from "../types/attendance";

export const useGetAttendanceByClassId = (classId: number) => {
  return useQuery<Student>({
    queryKey: ["attendance"],
    queryFn: async () => {
      const response: Student = await apiCall({
        method: "GET",
        url: `${API_ATTENDANCE_URL}/${classId}`,
      });
      return response;
    },
  });
};
export const useAttendanceCreateMutations = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: AttendanceForm) => {
      return apiCall<Attendance, AttendanceForm>({
        url: `${API_ATTENDANCE_URL}`,
        json: data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["attendance"] });
    },
  });
};
